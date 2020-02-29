
const { combineResolvers } = require('graphql-resolvers');

const { AuthenticationError, UserInputError } = require('apollo-server-express');

const Authorization = require('./Authorization');

const userTokens = require('../../modules/JWT/userTokens');

const comparePasswords = require('../../modules/bcrypt/comparePasswords');

const resolvers = {
    Query: {
        me: (parent, args, { me }) => {

            return me;

        },
        getUser: combineResolvers(
            Authorization.isAdmin,
            async (parent, args, { crudOperations, me }) => {

                const { id } = me;

                const user = await crudOperations.User.getUserById(id);

                const {
                    _id,
                    username,
                    email,
                    firstname,
                    lastname,
                    gender,
                    dateOfBirth,
                    mainPhoneNumber,
                    secondaryPhoneNumber,
                    country,
                    city,
                    zone,
                    mainAddress,
                    referencePoint,
                    role
                } = user ;

                return {
                    id: _id,
                    username,
                    email,
                    firstname,
                    lastname,
                    gender,
                    dateOfBirth,
                    mainPhoneNumber,
                    secondaryPhoneNumber,
                    country,
                    city,
                    zone,
                    mainAddress,
                    referencePoint,
                    role
                };
            }
        )

    },
    Mutation: {
        signUp: (parent, { input }, { crudOperations }) => {

            const user = crudOperations.User.addNewUser(input);

            const token = userTokens.generateUserToken(user);

            return { token };

        },
        logIn: async (parent, { login, password }, { models }) => {

            const user = await models.User.findByLogin(login);

            if (!user) {

                throw new UserInputError('No User with given credentials');

            }

            const isValid = comparePasswords(password, user.password);

            if(!isValid) {
				throw new AuthenticationError('Invalid Password');
            }
            
            const token = userTokens.generateUserToken(user);

            return { token };

        }
    }




};

module.exports = resolvers;