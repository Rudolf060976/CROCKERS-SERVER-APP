const models = require('../models');

const { ObjectID } = require('mongodb');

const { ApolloError } = require('apollo-server-express');


const addNewMenuGroup = async (name, description) => {

	try {
		
		const group = await models.MenuGroup.create({
			_id: new ObjectID(),
			name,
			description
		});

		return group;

	} catch (error) {
		
		throw new ApolloError('Could not create new Group','500');

	}

};

const getAllMenuGroups = async () => {

	try {
		
		return await models.MenuGroup.find({});

	} catch (error) {
		
		throw new ApolloError('Could not create new Group','500');

	}
	
};

module.exports = {
	addNewMenuGroup,
	getAllMenuGroups
};
