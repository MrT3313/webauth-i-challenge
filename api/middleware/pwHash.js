const bcrypt = require('bcrypt')

function pwHash(req, res, next) {
    const newUser = req.body

    const hash = bcrypt.hashSync(newUser.password, 12)
    newUser.password = hash
        console.log('MIDDLEWARE - pwHash',newUser)
    
    req.newUser = newUser
    next()
}

module.exports = pwHash