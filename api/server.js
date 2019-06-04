// EXPRESS
    const express = require('express')

// ROUTERS

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req, res) => {
        res.json({ message: 'webAuth Server is Working!'})
    })

// INDIVIDUAL ROUTES 

// EXPORTS
    module.exports = server 