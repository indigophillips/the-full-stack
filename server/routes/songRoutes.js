const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSong()
    .then(songs => {
      res.json(songs)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getSong(id)
    .then(user => {
      res.json({user: user})
    })
  .catch(err => {
  // eslint-disable-next-line no-console
    console.error(err)
    res.status(500).send('Unable to read from database')
  })

router.put('/', (req, res) => {
  
})

router.post('/', (req, res) => {
  const id = Number(req.params.id)
  db.addSong(id)
    .then(song => {
      res.json({song: song})
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
})

router.delete('/:id', (req, res) => {
  const deleteSong = req.body
  db.addUser(deleteSong)
    .then(() => {
      res.status(200).end()
    })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })

})

module.exports = router
