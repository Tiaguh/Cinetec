import express from 'express'

import user from './controllers/userController.js'
import login from './controllers/loginController.js'
import actor from './controllers/actorController.js'

import {verifyToken} from './middleware/jwt.js'

const route = express();

route.use('/user', user)
route.use('/login', login)
route.use('/actor', verifyToken, actor)

export default route;