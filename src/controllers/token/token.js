import jwt from 'jsonwebtoken';
import { successResponse, tokenResponse } from '../../helpers/responses.js';

let token = (req, res) => {
    let myToken = jwt.sign({ name: process.env.USER_JWT }, process.env.PASSWORD_JWT, {expiresIn:'2h'});
    
    return tokenResponse(res, myToken);
}

export default token;