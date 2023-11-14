const models = require('../models');

const { ApolloError } = require('apollo-server-express');

const { ObjectID } = require('mongodb');

const mongoose = require('mongoose');



const addCartLine = async (userId, itemId, qty, comments = '') => {

    try {
        
        const menuItem = await models.MenuItem.findById(itemId);

        const { tax, price } = menuItem;

        return models.Cart.create({

            _id: new ObjectID(),
            user: userId,
            menuItem: itemId,
            quantity: qty,
            price,
            tax,
            comments
        });


    } catch (error) {
        
        throw new ApolloError('Could not create Cart Line: ' + error.message, '500');

    }


};

const deleteCartLine = async (id) => {

    if (!ObjectID.isValid(id)) {

        throw new ApolloError('INVALID ID', '400');

    }

    try {
    
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
				itemTotal: { $multiply: [{ $add: ["$price","$extrasTotal"] },"$quantity"] }
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
				subtotal: { $sum: { $multiply: [{ $add: ["$price","$extrasTotal"] }, "$quantity"] } },
				tax: { $sum: { $divide: [ { $multiply: [{ $add: ["$price","$extrasTotal"] }, "$quantity", "$tax"] }, 100 ] } },
				total: { $sum: { $multiply: [ { $add: ["$price","$extrasTotal"] }, "$quantity", { $add: [ 1, { $divide: [ "$tax", 100 ] } ] } ] } }
			}}
		]);

    } catch (error) {
        
        throw new ApolloError(error.message, '500');

    }

};

const addExtraToCart = async (cartLineId, extraId) => {

    try {
        
        const cartLine = await models.Cart.findById(cartLineId);

        const extrasArray = cartLine.extras;
    
        if (extrasArray.includes(extraId)) {

            throw new ApolloError('Extra Id is already included', '409');
        
        }
        
        cartLine.extras = [...extrasArray, extraId];
    
        const promises = cartLine.extras.map( id => {

            return models.Extra.findById(id);

        });

        const extras = await Promise.all(promises);
        
        const total = extras.reduce((acc, item) => {
                               
            return acc + item.price;
        
        }, 0);
        
        cartLine.extrasTotal = total;
        
        return await cartLine.save();
     
    } catch (error) {
        

        throw new ApolloError(error.message, '500');

    }   

};

const addManyExtrasToCart = async (cartLineId, extrasIdArray) => {

    try {

        const cartLine = await models.Cart.findById(cartLineId);
  
        for (let i = 0; i < extrasIdArray.length; i++) {
    
            const extrasArray = cartLine.extras;
    
           if (!extrasArray.includes(extrasIdArray[i])) {
    
            cartLine.extras = [...extrasArray, extrasIdArray[i]];
            
           }
    
        }

        const promises = cartLine.extras.map( id => {

            return models.Extra.findById(id);

        });

        const extras = await Promise.all(promises);

        console.log('extras:', extras);

        const total = extras.reduce((acc, item) => {

            return acc + Number.parseFloat(item.price); //CUALQUIER CALCULO QUE SE HAGA CON UN CAMPO DECIMAL HAY QUE CONVERTIRLO EN FLOAT AL LEERLO. PERO CUANDO SE ESCRIBE MONGOOSE LO CONVIERTE DE NUEVO A DECIMAL SIN PROBLEMAS.

        }, 0);
       
        cartLine.extrasTotal = total;
    
        return await cartLine.save();
        
    } catch (error) {

        throw new ApolloError(error.message, '500');
        
    }  
  

};

const removeExtraFromCart = async (cartLineId, extraId) => {

    try {

        const cartLine = await models.Cart.findById(cartLineId);

        const extrasArray = cartLine.extras;
    
        if (!extrasArray.includes(extraId)) {

            throw new ApolloError('Extra Id was not included', '404');

        }

        const newExtrasArray = extrasArray.filter(id => {
    
            return id !== extraId;
        
        });
        
        cartLine.extras = newExtrasArray;
        
        const promises = cartLine.extras.map( id => {

            return models.Extra.findById(id);

        });

        const extras = await Promise.all(promises);

        const total = extras.reduce((acc, item) => {

            return acc + item.price;

        }, 0);
       
        cartLine.extrasTotal = total;
    
        return await cartLine.save();
       
        
    } catch (error) {

        throw new ApolloError(error.message, '500');
        
    }   

}


const removeManyExtrasFromCart = async (cartLineId, extrasIdArray) => {

    try {

        const cartLine = await models.Cart.findById(cartLineId);
       

        for (let i = 0; i < extrasIdArray.length; i++) {

            const extrasArray = cartLine.extras;

            if (extrasArray.includes(extrasIdArray[i])) {

                const newExtrasArray = extrasArray.filter(id => {
    
                    return id !== extrasIdArray[i];
            
                });
    
                cartLine.extras = newExtrasArray;               

            }        

        }

        const promises = cartLine.extras.map( id => {

            return models.Extra.findById(id);

        });

        const extras = await Promise.all(promises);

        const total = extras.reduce((acc, item) => {

            return acc + item.price;

        }, 0);
       
        cartLine.extrasTotal = total;
    
        return await cartLine.save();

        
    } catch (error) {

        throw new ApolloError(error.message, '500');
        
    }   

}

const removeAllExtrasFromCart = async (cartLineId) => {


    try {
        
        const cartLine = await models.Cart.findById(cartLineId);

        cartLine.extras = [];

        cartLine.extrasTotal = 0;

        return await cartLine.save();


    } catch (error) {
        

        throw new ApolloError(error.message, '500');

    }


};

const updateCommentsToCart = async (cartLineId, comments) => {

    try {
        
        return await models.Cart.findByIdAndUpdate(cartLineId,{ comments }, { new: true });   

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
    deleteCart,
    addExtraToCart,
    removeExtraFromCart,
    addManyExtrasToCart,
    removeManyExtrasFromCart,
    removeAllExtrasFromCart,
    updateCommentsToCart
};
