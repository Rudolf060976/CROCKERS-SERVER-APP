const { ApolloError } = require('apollo-server-express');


const resolvers = {
	Query: {
		getMenuItemsByGroup: async (_, args, { models, helperFunctions }) => {

			const { groupId, first, last, after, before } = args;

			const query = {
				group: groupId
			};
			
			const output = await helperFunctions.generateConnection.generateWithQuery(first, last, after, before, models.MenuItem, query);

			return output;

		},
		getMenuItemsShowAtHome: async (_, args, { crudOperations }) => {

			const menuItems = await crudOperations.MenuItem.getMenuItemsShowAtHome();

			return menuItems;

		}
	},
	Mutation: {
		addNewMenuItem: async (_, { input }, { crudOperations }) => {

			try {

				const newItem = await crudOperations.MenuItem.addNewMenuItem(input);

				return {
					code: '200',
					success: true,
					message: 'new Item added successfully',
					item: newItem
				};

			} catch (error) {
				
				return {
					code: error.code,
					success: false,
					message: error.message,
					item: null
				};

			}

		}
	},
	MenuItem: {
		price: menuItem => {
			return Number.parseFloat(menuItem.price);
		}
	}
};


module.exports = resolvers;