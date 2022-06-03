const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const { UserSystemRoutes, UserPlatformRoutes, ProductRoutes } = require('./routes');


require('dotenv').config({ path: path.join(__dirname, '../.env') });

const app = express();

const PORT = process.env.PORT;

app.use(cors({ credentials: true, origin: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/api/user/system', UserSystemRoutes);
app.use('/v1/api/user/platform', UserPlatformRoutes);
app.use('/v1/api/product', ProductRoutes);

app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server is running in port : ${PORT}`);
});