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


const addMenuGroupImage = async (groupId, imageId) => {


	try {
		
		const item = await models.MenuGroup.findById(groupId);

		if(!item) {
			throw new ApolloError('GroupId Not Found','500');
		}

		item.image = imageId;

		const newItem = await item.save();

		return newItem;


	} catch (error) {
		
		throw new ApolloError('Could not add Image to Group', '500');
	}

};


const getMenuGroupById = async groupId => {


	try {
	
		const item = await models.MenuGroup.findById(groupId);

		if(!item) {
			throw new ApolloError('GroupId Not Found');
		}

		return item;


	} catch (error) {
		
		throw new ApolloError('Could not find the Group', '500');

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
	getAllMenuGroups,
	addMenuGroupImage,
	getMenuGroupById
};
