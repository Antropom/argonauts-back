const mongoose = require('mongoose')

const argonautSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
})

const Argonaut = mongoose.model('Argonaut', argonautSchema)

module.exports = Argonaut
