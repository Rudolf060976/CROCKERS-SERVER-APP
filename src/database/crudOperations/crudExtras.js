const models = require('../models');


const { ApolloError } = require('apollo-server-express');

const { ObjectID } = require('mongodb');


const addNewExtra = async (groupId, name, price) => {

    if (!ObjectID.isValid(groupId)) {

        throw new ApolloError('INVALID ID', '400');

    }

    try {
        
        return models.Extra.create({
            _id: new ObjectID(),
            group: groupId,
            name,
            price
        });


    } catch (error) {
        
        throw new ApolloError('Could not create the Extra: ' + error.message, '500');

    }

};


const deleteExtra = async (extraId) => {

    if (!ObjectID.isValid(extraId)) {

        throw new ApolloError('INVALID ID', '400');

    }

    try {
        
        return models.Extra.findByIdAndDelete(extraId);

    } catch (error) {
        
        throw new ApolloError('Could not remove the Item: ' + error.message, '500');

    }

};


const getExtrasByGroup = async (groupId) => {

    if (!ObjectID.isValid(groupId)) {

        throw new ApolloError('INVALID ID', '400');

    }

    try {
        

        return models.Extra.find({ group: groupId });


    } catch (error) {
        

        throw new ApolloError('Could Not Find the Extras: ' + error.message, '500');

    }

};

const getExtrasByItem = async (itemId) => {

    if (!ObjectID.isValid(itemId)) {

        throw new ApolloError('INVALID ID', '400');

    }

    try {

        const item = await models.MenuItem.findById(itemId);

        const groupId = item.group;

        return models.Extra.find({ group: groupId });


    } catch (error) {
        

        throw new ApolloError('Could Not Find the Extras: ' + error.message, '500');

    }

};



module.exports = {
    addNewExtra,
    deleteExtra,
    getExtrasByGroup,
    getExtrasByItem
};