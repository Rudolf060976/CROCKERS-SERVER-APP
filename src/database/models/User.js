const mongoose = require('mongoose');

const types = mongoose.SchemaTypes;

const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({

    _id: types.ObjectId,
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        minlength: 1
    },
    email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		validate: {
			validator: function(v) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
			},
			message: props => `${props.value} is not a valid email!`
		}
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
        minlength: 1
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
        minlength: 1
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male','Female'],
        default: 'Male'
    },
    dateOfBirth: {
       type: Date,
       required: true
    },
    mainPhoneNumber: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
        minlength: 1
    },
    secondaryPhoneNumber: {
        type: String,
        trim: true,
        maxlength: 20,
        minlength: 1
    },
    password: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 8,
		maxlength: 30
    },
    country: {
        type: String,
        required: true,
        trim: true ,
        maxlength: 100 
    },
    city: {
        type: String,
        required: true,
        trim: true,
        maxlength: 300        
    },
    zone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 300        
    },
    mainAddress: {
        type: String,
        trim: true,
        maxlength: 500        
    },
    referencePoint: {
        type: String,
        trim: true,
        maxlength: 500        
    },
    receiveNews: {
        type: Boolean,
        required: true,
        default: false
    },
    role: {
		type: String,
		required: true,
		enum: ['ADMIN','USER'],
		default: 'USER'
	}
});


userSchema.statics.findByLogin = async function(login) {

    let user = await this.findOne({ username: login });

    if (!user) {

        user = await this.findOne({ email: login });

    }

    return user;

};

userSchema.pre('save', function() {

    const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(this.password, salt);

    this.password = hash;    

});


const User = mongoose.model('User', userSchema);

module.exports = User;
