

const resolvers = {
    Query: {
        getExtrasByItem: async (parent, { itemId }, { crudOperations }) => {

            return await crudOperations.Extra.getExtrasByItem(itemId);

        }

    },
    Mutation: {



    },
    Extra: {
        price: (extra) => {

            return Number.parseFloat(extra.price);

        }
    }

};

module.exports = resolvers;