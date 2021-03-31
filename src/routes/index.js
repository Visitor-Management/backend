const authRoute = require('./auth.routes')

module.exports = (app) => {
    app.use(authRoute);
}