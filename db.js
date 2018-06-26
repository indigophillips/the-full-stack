const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getSong,
  addSong

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

function getSong () {
  return songs
}

function addSong () {
  return db('song')
}
