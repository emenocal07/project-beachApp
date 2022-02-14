const router = require("express").Router()
const bcryptjs = require('bcryptjs')

const User = require('./../models/User.model')
const saltRounds = 10


// Signup form (render)
router.get("/registro", (req, res, next) => res.render("auth/signup-form"))


// Signup form (handle)
router.post('/registro', (req, res, next) => {

    const { username, email, userPwd } = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(userPwd, salt))
        .then(hashedPassword => {
            return User.create({ username, email, password: hashedPassword })
        })
        .then(createdUser => res.redirect('/'))
        .catch(error => next(error))
})


// Login from (render)
router.get('/iniciar-sesion', (req, res, next) => res.render('auth/login-form'))

// Login form (handle)
router.post('/iniciar-sesion', (req, res, next) => {

    const { username, userPwd } = req.body

    if (email.length === 0 || userPwd.length === 0) {
        res.render('auth/login-form', { errorMessage: 'Por favor, rellena todos los campos' })
        return
    }

    User
        .findOne({ email})
        .then(user => {
            if (!user) {
                res.render('auth/login-form', { errorMessage: 'Email no registrado en la Base de Datos' })
                return
            } else if (bcryptjs.compareSync(userPwd, user.passwordHash) === false) {
                res.render('auth/login-form', { errorMessage: 'La contraseña es incorrecta' })
                return
            } else {
                req.session.currentUser = user
                console.log('El objeto de EXPRESS-SESSION', req.session)
                res.redirect('/')
            }
        })
})


// Logout
router.post('/cerrar-sesion', (req, res) => {
    req.session.destroy(() => res.redirect('/iniciar-sesion'))
})

module.exports = router