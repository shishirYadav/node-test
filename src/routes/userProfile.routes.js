
const express = require("express");
const route = express.Router();
const ProfileController = require('../controllers/userProfile.controller')


route.delete('/deleteUser',  ProfileController.deleteUser)
route.put('/updateUser',  ProfileController.updateUser)
route.post('/createUser', ProfileController.createUser)
route.post('/fetchAllUser', ProfileController.fetchAllUser)



module.exports = route
