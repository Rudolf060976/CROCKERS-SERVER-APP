const models = require('../models');

const { ApolloError } = require('apollo-server-express');

const { ObjectID } = require('mongodb');

const mongoose = require('mongoose');



const addCartLine = async (userId, itemId, qty) => {

    try {
        
        const menuItem = await models.MenuItem.findById(itemId);

        const { tax, price } = menuItem;

        return models.Cart.create({

            _id: new ObjectID(),
            user: userId,
            menuItem: itemId,
            quantity: qty,
            price,
            tax
        });


    } catch (error) {
        
        throw new ApolloError('Could not create Cart Line: ' + error.message, '500');

    }


};

const deleteCartLine = async (id) => {

    try {
        
        if (!ObjectID.isValid(id)) {

            throw new ApolloError('INVALID ID', '400');

        }

        return models.Cart.findByIdAndDelete(id);

    } catch (error) {
        
        throw new ApolloError('Could not remove the Item: ' + error.message, '500');

    }

};

const deleteCart = async (userId) => {

    try {
        
        if (!ObjectID.isValid(userId)) {

            throw new ApolloError('INVALID ID', '400');

        }

        return models.Cart.deleteMany({ user: userId });


    } catch (error) {
        
        throw new ApolloError('Could not delete Cart Items: ' + error.message, '500');

    }

};


const updateCartLine = async (id, qty) => {


    try {
        
        if (!ObjectID.isValid(id)) {

            throw new ApolloError('INVALID ID', '400');

        }

        return models.Cart.findByIdAndUpdate(id, { quantity: qty }, { new: true });


    } catch (error) {
        

        throw new ApolloError('Could not update the Item: ' + error.message, '500');

    }

};


const getCart = async (userId) => {

    try {
        
        if (!ObjectID.isValid(userId)) {

            throw new ApolloError('INVALID ID', '400');

        }

        return models.Cart.aggregate([
			{ $match: { user: ObjectID.createFromHexString(userId) } },	
			{ $lookup: {
				from: "menuitems",  // ES EL NOMBRE DE LA COLECCIÓN EL QUE SE COLOCA AQUÍ, QUE ES "items"
				localField: "menuItem",
				foreignField: "_id",				
				as: "menuItem"
			}},						
			{ $project: {
				menuItem: { _id: 1, name: 1, image: 1 },
				createdAt: 1,
				updateAt: 1,
				quantity: 1,
				price: 1,
				tax: 1,
				itemTotal: { $multiply: ["$price","$quantity"] }
			}},			
			{ $sort: { createdAt: 1 } }	 
		]).exec();	

    } catch (error) {
        
        throw new ApolloError(error.message, '500');

    }

};


const getCartTotals = async (userId) => {


    try {
        
        if (!ObjectID.isValid(userId)) {

            throw new ApolloError('INVALID ID', '400');

        }

        return models.Cart.aggregate([
			{ $match: { user: ObjectID.createFromHexString(userId) } },
			{ $group: {
				_id: null,
				count: { $sum: "$quantity" },
				subtotal: { $sum: { $multiply: ["$price", "$quantity"] } },
				tax: { $sum: { $divide: [ { $multiply: ["$price", "$quantity", "$tax"] }, 100 ] } },
				total: { $sum: { $multiply: [ "$price", "$quantity", { $add: [ 1, { $divide: [ "$tax", 100 ] } ] } ] } }
			}}
		]);

    } catch (error) {
        
        throw new ApolloError(error.message, '500');

    }

};


module.exports = {
    addCartLine,
    deleteCartLine,
    updateCartLine,
    getCart,
    getCartTotals,
    deleteCart
};
