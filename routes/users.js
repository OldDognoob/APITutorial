import express from "express";

import {v4 as uuidv4} from 'uuid';

// from controller
import {createUser,getUsers,getUser,deleteUser,patchUser} from '../controllers/users.js';

const router = express.Router();

let users = [];

//all routes starting with /users
router.get("/", getUsers);
router.post('/', createUser);
//users/2 => req.params(parameters to our function)
router.get('/:id', getUser);
// we create a callback function with request , response
router.delete('/:id', deleteUser);
router.patch('/:id', patchUser);

export default router;