const Moto = require('../models/moto')

module.exports = {
  create: (req, res, next) => {
    let moto = new Moto(req.body)

    moto.save()
      .then(saved => res.json(saved))
      .catch(e => next(e))
    
  },

  find: (req, res, next) => {
    Moto.findById(req.params.id)
      .then(user => res.json(user))
      .catch(e => next(e))
  },

  findAll: (req, res) => {
    Moto.find()
      .then(users => res.json(users))
      .catch(e => next(e))
  },

  update: (req, res, next) => {
    Moto.findById(req.params.id)
      .then( found => {
        found.set(req.body)
        found.save()
          .then(saved => res.json(saved))
          .catch(e => next(e))
      })
      .catch(e => next(e))
  },

  delete: (req, res) => {
    Moto.findByIdAndRemove(req.params.id)
      .then(deleted => {
        res.json({
          message: 'Moto deleted',
          id: deleted._id
        })
      })
      .catch(e => next(e))
  }
}