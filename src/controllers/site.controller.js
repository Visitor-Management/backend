const siteModel = require('../models/site.model')

module.exports = {
  site: (req, res, next) => {
    const site = req.body
    const createdSite = siteModel.create(site)
    return res.send(createdSite)
  },
  getSites: async (req, res, next) => {
    const { page, count, visitor, purpose, site } = req.query
    const data = await siteModel.find({}).sort({ _id: -1 })
    const filter = data => {
      const p = parseInt(page)
      const c = parseInt(count)
      const skip = p * c
      return data
        .slice(skip, skip + c)
        .filter(el => el.name.toLowerCase().startsWith(visitor.toLowerCase()))
    }
    const filteredData = filter(data)
    res.send({
      totalCount: data.length,
      data: data,
    })
  },
}
