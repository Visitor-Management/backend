const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env
require('dotenv').config()

const dbConnection = {
    url:
        process.env.MONGO_URL ||
        `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
}

module.exports = dbConnection