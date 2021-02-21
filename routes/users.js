import express from "express";

import {v4 as uuidv4} from 'uuid';

// from controller
import {createUser,getUser,getUserId,deleteUserId,patchUserId} from '../controllers/users.js';

const router = express.Router();

let users = [];

//all routes starting with /users
router.get("/", getUser);
router.post('/', createUser);
//users/2 => req.params(parameters to our function)
router.get('/:id', getUserId);
// we create a callback function with request , response
router.delete('/:id', deleteUserId);
router.patch('/:id', patchUserId);

export default router;