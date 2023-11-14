

const resolvers = {
    Query: {
        getCart: async (parent, { userId }, { crudOperations }) => {

            const cartArray = await crudOperations.Cart.getCart(userId);
            
            if (cartArray.length === 0) return [];

            
            const newCart = cartArray.map(line => {

                const {
                    _id,
                    menuItem,
                    quantity,
                    price,
                    tax,
                    itemTotal
                } = line;
                
               const {
                   _id:_id2,
                   name,
                   image
               } = menuItem[0];


                return {
                    id: _id,
                    menuItem: {
                        id: _id2,
                        name,
                        image
                    },
                    quantity,
                    price,
                    tax,
                    itemTotal
                };

            });

            
            return newCart;
           

        },
        getCartTotals: async (parent, { userId }, { crudOperations }) => {

            const totals = await crudOperations.Cart.getCartTotals(userId);
            
            
            if (totals.length === 0) {

                return {
                    count: 0,
                    subtotal: 0,
                    tax: 0,
                    total: 0
                };

            }

            return totals[0];


        }
    },
    Mutation: {
        addCartLine: async (parent, { input }, { crudOperations }) => {

            const {
                userId,
                itemId,
                quantity,  
                comments,
            } = input;

            try {
                
                const cartLine = await crudOperations.Cart.addCartLine(userId,itemId,quantity, comments);

                const {
                    _id,
                    user,
                    menuItem,
                    quantity: quantity2, // PORQUE EN EL BLOQUE DE ARRIBA HAY UNA VARIABLE quantity
                    price,
                    tax,
                    comments: comments2
                } = cartLine;

                return {
                    code: '200',
                    success: true,
                    message: 'Cart Line Added successfully!',
                    cartLine: {
                        id: _id,
                        user,
                        menuItem,
                        quantity: quantity2,
                        price,
                        tax,
                        comments: comments2
                    }
                };


            } catch (error) {

                if (!error.code) {
                    error.code = '500';
                }
                
                return {
                    code: error.code,
                    success: false,
                    message: error.message,
                    cartLine: null
                };

            }
            

        },
        deleteCartLine: async (parent, { lineId }, { crudOperations }) => {

            try {
                
                await crudOperations.Cart.deleteCartLine(lineId);

                return {
                    code: '200',
                    success: true,
                    message: 'Line Deleted Successfully'
                };


            } catch (error) {
                
                if (!error.code) {

                    error.code = '500';
                }


                return {
                    code: error.code,
                    success: false,
                    message: error.message
                };               

            }


        },
        updateCartLine: async (parent, { lineId, quantity }, { crudOperations }) => {

            try {
                
                const cartLine = await crudOperations.Cart.updateCartLine(lineId, quantity);

                const {
                    _id,
                    user,
                    menuItem,
                    quantity: quantity2, // PORQUE EN EL BLOQUE DE ARRIBA HAY UNA VARIABLE quantity
                    price,
                    tax,
                    comments: comments2
                } = cartLine;


                return {
                    code: '200',
                    success: true,
                    message: 'Line Updated Successfully',
                    cartLine: {
                        id: _id,
                        user,
                        menuItem,
                        quantity: quantity2,
                        price,
                        tax,
                        comments: comments2
                    }
                };


            } catch (error) {
                
                if (!error.code) {

                    error.code = '500';
                }

                return {
                    code: error.code,
                    success: false,
                    message: error.message,
                    cartLine: null
                };               

            }


        },
        deleteCart: async (parent, { userId }, { crudOperations }) => {

            try {
                
                await crudOperations.Cart.deleteCart(userId);

                return {
                    code: '200',
                    success: true,
                    message: 'Cart Deleted Successfully'
                };


            } catch (error) {
                
                if (!error.code) {

                    error.code = '500';
                }


                return {
                    code: error.code,
                    success: false,
                    message: error.message
                };               

            }

        },
        addManyExtrasToCart: async (parent, { cartLineId, extrasIdArray }, { crudOperations }) => {

            try {
                
                await crudOperations.Cart.addManyExtrasToCart(cartLineId, extrasIdArray);

                return {
                    code: '200',
                    success: true,
                    message: 'Sucess!!'
                };

            } catch (error) {
                
                if (!error.code) {
                    error.code = '500';
                }

                return {
                    code: error.code,
                    success: false,
                    message: error.message
                };


            }
            

        },
        removeManyExtrasFromCart: async (parent, { cartLineId, extrasIdArray }, { crudOperations }) => {

            try {
                
                await crudOperations.Cart.removeManyExtrasFromCart(cartLineId, extrasIdArray);

                return {
                    code: '200',
                    success: true,
                    message: 'Sucess!!'
                };

            } catch (error) {
                
                if (!error.code) {
                    error.code = '500';
                }

                return {
                    code: error.code,
                    success: false,
                    message: error.message
                };


            }
            

        },
        removeAllExtrasFromCart: async (parent, { cartLineId }, { crudOperations }) => {

            try {
                
                await crudOperations.Cart.removeAllExtrasFromCart(cartLineId);

                return {
                    code: '200',
                    success: true,
                    message: 'Success!'
                };


            } catch (error) {
                
                if (!error.code) {
                    error.code = '500';
                }

                return {
                    code: error.code,
                    success: false,
                    message: error.message
                };

            }


        },
        updateCommentsToCart: async (parent, { cartLineId, comments }, { crudOperations }) => {

            try {
                
                const cartLine = await crudOperations.Cart.updateCommentsToCart(cartLineId, comments);

                const {
                    _id,
                    user,
                    menuItem,
                    quantity,
                    price,
                    tax,
                    comments: comments2
                } = cartLine;


                return {
                    code: '200',
                    success: true,
                    message: 'Line Updated Successfully',
                    cartLine: {
                        id: _id,
                        user,
                        menuItem,
                        quantity,
                        price,
                        tax,
                        comments: comments2
                    }
                };


            } catch (error) {
                
                if (!error.code) {

                    error.code = '500';
                }

                return {
                    code: error.code,
                    success: false,
                    message: error.message,
                    cartLine: null
                }; 

            }


        }

    },
    Cart: {
        price: (cart) => {

            return Number.parseFloat(cart.price); 

        },
        tax: (cart) => {

            return Number.parseFloat(cart.tax); 

        },
        itemTotal: (cart) => {

            return Number.parseFloat(cart.itemTotal); 

        },
    },
    CartTotals: {
        count: (cartTotals) => {

            return Number.parseFloat(cartTotals.count); 

        },
        subtotal: (cartTotals) => {

            return Number.parseFloat(cartTotals.subtotal); 

        },
        tax: (cartTotals) => {

            return Number.parseFloat(cartTotals.tax); 

        },
        total: (cartTotals) => {

            return Number.parseFloat(cartTotals.total); 

        }
    },
    CartLine: {
        price: (cartline) => {

            return Number.parseFloat(cartline.price); 

        },
        tax: (cartline) => {

            return Number.parseFloat(cartline.tax); 

        }
    }

};


module.exports = resolvers;