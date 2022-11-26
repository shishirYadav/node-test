const connection = require("../config/database");
const Profile = connection.import("../models/profile.js");
const responseHelper = require("../helpers/response");


const Sequelize = require("sequelize");
const profile = require("../models/profile");
const Op = Sequelize.Op;



exports.updateUser = async (req, res) => {
 
    try {
        let updateToken = await Profile.update({ firstname: req.body.firstname }, { where: { contact: req.body.contact } });
        responseHelper.sendSuccessResponseObject(updateToken, 'updated.', res)
    }
    catch (err) {
        responseHelper.sendFailureResponseObject({ error: err.message }, "Something went wrong.", res);
    }
};




exports.createUser = async (req, res) => {

    try {
        
       const responseData =  await Profile.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            contact: req.body.contact
        }).then((user) => res.status(201).send(user)).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });   
        responseHelper.sendSuccessResponseObject(responseData, 'user created .', res)
    }
    catch (err) {
        responseHelper.sendFailureResponseObject({ error: err.message }, "Something went wrong.", res);
    }
};

exports.deleteUser = async (req, res) => {

    try {
        
        const count = await Profile.destroy({ where: { firstname: req.body.firstname } })    
        responseHelper.sendSuccessResponseObject(count, 'user deleted.', res)
    }
    catch (err) {
        responseHelper.sendFailureResponseObject({ error: err.message }, "Something went wrong.", res);
    }
};

exports.fetchAllUser = async (req, res) => {

    try {
        
           const responseData = await Profile.findAll({limit:10});
        responseHelper.sendSuccessResponseObject(responseData, 'Selected question/Knowledge deatils.', res)
    }
    catch (err) {
        responseHelper.sendFailureResponseObject({ error: err.message }, "Something went wrong.", res);
    }
};


