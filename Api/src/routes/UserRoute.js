import express from 'express'
import User from "../controllers/UserController.js";
import gerarToken from '../services/jwtServices.js';
import ValidateInputs from '../middlewares/validateInputsMiddleware.js';
import ValidaToken from '../middlewares/validaToken.js';
import { ValidaDados } from '../../../cripto/src/utils/functions.js';
import notify from '../controllers/NotifyController.js';


const route = express.Router()

route.get('/getUser/:email', ValidaDados, User.getUser)
route.post('/postUser', ValidaDados, User.postUser)
route.post('/getLogin', ValidateInputs, gerarToken)
route.post('/getLogin/autentic', ValidaToken, User.UserAutentic)
route.post('/postNotify', notify.AddNotify)

export default route