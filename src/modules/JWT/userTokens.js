const jwt = require('jsonwebtoken');

const Config = require('../../config/config');

const Options = { // **** OPTIONS FOR GENERATED TOKENS	
	algorithm: 'HS256',
	expiresIn: Config.user.Token_Expiration_Time_In_Seconds * 1
};


const secretOrKey = Config.user.Token_Secret_String;


const generateUserToken = async user => {

	const { _id } = user;

	const payload = {
		id: _id
	};	

	const token = await jwt.sign(payload, secretOrKey, Options);

	return token;

};

const verifyUserToken = token => {
		
		const payload = jwt.verify(token, secretOrKey, Options);

		if(payload) {
			
			const { id } = payload;

			return {
                id
            };
		}

		return null;
	
};


module.exports = { 
	generateUserToken,
	verifyUserToken
}

