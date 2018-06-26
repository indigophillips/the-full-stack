const path = require('path')

const express = require('express')

const songRoutes = require('./routes/songs')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/songs', songRoutes)

module.exports = server
