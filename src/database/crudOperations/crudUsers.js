const models = require('../models');

const { ApolloError } = require('apollo-server-express');

const { ObjectID } = require('mongodb');


const addNewUser = async (filter) => {

    try {
        
        

        const user = await models.User.create({
            _id: new ObjectID(),
            ...filter
        });

        return user[0];

    } catch (error) {
        
        throw new ApolloError('Could not create new User', '500');

    }

};

const getUserById = async userId => {

    try {
        const user = models.User.findById(userId);

        if (!user) {

            throw new ApolloError('ID Not Found');

        }

        return user;


    } catch (error) {
        
        throw new ApolloError('Could not find the Item', '500');

    }


};



module.exports = {
    addNewUser,
    getUserById
};



