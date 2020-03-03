
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
            Authorization.isAuthenticated,
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
                    region,
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
                    region,
                    city,
                    zone,
                    mainAddress,
                    referencePoint,
                    role
                };
            }
        ),
        getIfUserExists: async (parent, { username, email }, { models }) => {

            const user = await models.User.findOne({ username });

            let un = true;

            if(!user) {
                un = false;
            }

            const user2 = await models.User.findOne({ email });

            let em = true;

            if(!user2) {
                em = false;
            }

            return {
                username: un,
                email: em
            };

        }

    },
    Mutation: {
        signUp: async (parent, { input }, { crudOperations }) => {

            
            const user = await crudOperations.User.addNewUser(input);

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