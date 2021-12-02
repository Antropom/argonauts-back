const ArgonautModel = require('../models/argonautModel.js')

const findAll = () => {
  return ArgonautModel.find()
}

const findOne = (id) => {
  return ArgonautModel.findById(id)
}

const search = (query) => {
  const reg = new RegExp(query, 'i')
  return ArgonautModel.find({ message: reg })
}

const create = (datas) => {
  const argonaut = new ArgonautModel({
    name: datas.argonaut,
  })
  return argonaut.save().then((result) => {
    return result
  })
}

module.exports = { findAll, findOne, search, create }
