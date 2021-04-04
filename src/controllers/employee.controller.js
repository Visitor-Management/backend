const employeeModel = require('../models/employee.model')

module.exports = {
  employee: (req, res, next) => {
    const employee = req.body
    employee.emppic = req.files['emppic'] && req.files['emppic'][0].filename
    console.log(employee)
    const createdEmployee = employeeModel.create(employee)
    return res.send(createdEmployee)
  },
  getEmployees: async (req, res, next) => {
    const { page, count, employee } = req.query
    const data = await employeeModel.find({}).sort({ _id: -1 })
    const filter = data => {
      const p = parseInt(page)
      const c = parseInt(count)
      const skip = p * c
      return data.slice(skip, skip + c)
    }
    const filteredData = filter(data)
    res.send({
      totalCount: data.length,
      data: filteredData,
    })
  },
}
