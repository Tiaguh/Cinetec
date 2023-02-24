import express from 'express'
import user from './controllers/userController.js'

const route = express();

route.use('/', user)

export default route;