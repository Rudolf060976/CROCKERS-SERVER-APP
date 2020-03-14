

const resolvers = {
    Query: {
        getCart: async (parent, { userId }, { crudOperations }) => {

            const cartArray = await crudOperations.Cart.getCart(userId);
                      
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
                quantity
            } = input;

            try {
                
                const cartLine = await crudOperations.Cart.addCartLine(userId, itemId, quantity);

                return {
                    code: '200',
                    success: true,
                    message: 'Cart Line Added successfully!'
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
                
                await crudOperations.Cart.updateCartLine(lineId, quantity);

                return {
                    code: '200',
                    success: true,
                    message: 'Line Updated Successfully'
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
    }

};


module.exports = resolvers;