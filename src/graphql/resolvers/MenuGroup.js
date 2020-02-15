const { ApolloError } = require('apollo-server-express');


const resolvers = {
	Query: {
		getAllMenuGroups: (_, args, { crudOperations }) => {

			return crudOperations.MenuGroup.getAllMenuGroups();

		}
	},
	Mutation: {
		addNewMenuGroup: async (_, { input }, { crudOperations }) => {

			const { name, description } = input;

			
			try {
				

				const newGroup = await crudOperations.MenuGroup.addNewMenuGroup(name, description);
			
				return {
					code: '200',
					success: true,
					message: 'new Group added successfully',
					group: newGroup
				};


			} catch (error) {
				
				return {
					code: error.code,
					success: false,
					message: error.message,
					group: null
				};

			}

		}
	}

};


module.exports = resolvers;