const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getSong,
  getSongs,
  createSong,
  updateSong,
  deleteSong
}

const songs = [{

  id: 1,
  artist: '5 seconds of summer',
  song: 'Youngblood',
  distributor: 'Capitol',
  inStock: 7

}, {
  id: 2,
  artist: 'Maroon 5 feat. Cardi B',
  song: 'Girls like you',
  distributor: 'Universal',
  inStock: 11

}, {
  id: 3,
  artist: 'Post Malone',
  song: 'Better now',
  distributor: 'Republic',
  inStock: 9

}, {
  id: 4,
  artist: 'Billiw Ellish feat. Khalid',
  song: 'Darkroom',
  distributor: '2',
  inStock: 3
}]

function getSong (song = knex) {
  const db = knex
  return db('songs')
}

function getSongs (song = knex) {
  const db = knex
  return db('songs').select()
}

function createSong (newSong) {
  const db = knex
  return db('songs').insert(newSong)
}

function updateSong (updatedSong) {
  const db = knex
  return db('songs')
    .where('id', updatedSong.id)
    .update(updatedSong)
}
function deleteSong (id) {
  const db = knex
  return db('songs')
    .where('id', id)
    .del()
}
