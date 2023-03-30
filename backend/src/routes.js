import express from 'express'
import user from './controllers/userController.js'
import login from './controllers/loginController.js'

const route = express();

route.use('/user', user)
route.use('/login', login)

export default route;