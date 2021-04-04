const { model, Schema, Document } = require('mongoose')

const employeeSchema = new Schema({
  fname: {
    type: String,
  },
  mname: {
    type: String,
  },
  lname: {
    type: String,
  },
  empid: {
    type: String,
  },
  email: {
    type: String,
  },
  designation: {
    type: String,
  },
  mobile: {
    type: String,
  },
  emppic: {
    type: String,
  },
})

const employeeModel = model('Employee', employeeSchema)

module.exports = employeeModel
