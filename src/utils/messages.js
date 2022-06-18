let messages = [];

const addNewMessage = (data) => {
    const { username, message } = data;
    messages.push({ username, message });
    if (messages.length > Number(process.env.LIMIT_CACHE_MESSAGES)) {
        deleteMessage()
    }
}

const deleteMessage = () => {
    messages.shift();
}

const getAllMessageRoom = () => {
    return messages;
}

module.exports = {
    addNewMessage,
    deleteMessage,
    getAllMessageRoom
}