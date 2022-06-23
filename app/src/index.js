const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config({ path: path.join(__dirname, '../../.env') });
}
const PORT = process.env.PORT;
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

const { UserSystemRoutes, UserPlatformRoutes, ProductRoutes, SocketRoutes } = require('./routes');
const { userJoin, getRoomUsers, userLeave, getCurrentUser } = require('./utils/user');
const { addNewMessage } = require('./utils/messages');


io.on('connection', (socket) => {
    socket.on('ADD-PRODUCT', (data) => {
        console.log('[DATA PRODUCT]', data);
        io.emit('LOAD-DATA', data);
    });
    socket.on('JOIN-ROOM', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);
        socket.broadcast.emit('NEW-USER', user);
        io.to(user.room).emit('USERS-ROOM', { users: getRoomUsers(user.room) });
        console.log('[USERS-ROOM]', { username, room, users: getRoomUsers(user.room) })
    });

    socket.on('CHAT-ADMIN-MESSAGES', ({ message }) => {
        const user = getCurrentUser(socket.id);
        addNewMessage({ message, username: user.username });
        socket.broadcast.to(user.room).emit('NEW-MESSAGE', { message, username: user.username });
        io.to(user.room).emit('LOAD-CHAT-ADMIN-MESSAGES', { message, username: user.username });
    });

    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('USERS-ROOM', { users: getRoomUsers(user.room) });
        }
    })
});

app.use(cors({ credentials: true, origin: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/api/user/system', UserSystemRoutes);
app.use('/v1/api/user/platform', UserPlatformRoutes);
app.use('/v1/api/product', ProductRoutes);
app.use('/v1/api/socket', SocketRoutes);

server.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server is running in port : ${PORT}`);
});