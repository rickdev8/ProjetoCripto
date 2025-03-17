import express from 'express'
import User from "../controllers/UserController.js";
import gerarToken from '../services/jwtServices.js';
import ValidateInputs from '../middlewares/validateInputsMiddleware.js';
import ValidaToken from '../middlewares/validaToken.js';
import ValidaDados from '../middlewares/HashMiddleware.js';

const route = express.Router()

route.get('/getUser/:email', ValidaDados, User.getUser)
route.post('/postUser', ValidaDados, User.postUser)
route.post('/getLogin', ValidateInputs, gerarToken, User.Login)
route.post('/getLogin/autentic', ValidaToken, User.UserAutentic)

export default route