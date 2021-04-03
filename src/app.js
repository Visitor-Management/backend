const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connect } = require('mongoose')
const dbConnection = require('./database/MongoConnection')
require('dotenv').config()
const validateEnv = require('./utils/validateEnv')
const morgan = require('morgan')
const { stream } = require('./utils/logger.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
// app.options('*', cors())
app.use(morgan('dev', { stream }))

// app.use(errorMiddleware())

// app.get(baseUrl, (req, res) => {
//     res.send('hii harshal')
// })

// Routes
const authRoute = require('./routes/auth.routes')
app.use(authRoute)
const visitorRoute = require('./routes/visitor.routes')
app.use(visitorRoute)
const inviteRoute = require('./routes/invite.routes')
app.use(inviteRoute)
app.use(require('./routes/stats.routes'))
app.use(require('./routes/sites.routes'))
app.use(require('./routes/device.routes'))
app.use(require('./routes/employee.routes'))
app.use(require('./routes/checkInPoint.routes'))

validateEnv()
// Connect to MongoDB Database
connect(dbConnection.url, dbConnection.options)
  .then(() => {
    console.log('🟢 The database is connected.')
  })
  .catch(error => {
    console.log(`🔴 Unable to connect to the database: ${error}.`)
  })

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`::::Server Running at port ${PORT}`))
