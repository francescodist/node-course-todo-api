const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    tokens: [{
        access: {
            type: String,
            required: String
        },
        token: {
            type: String,
            required: String
        }
    }]
});

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString()}, 'abc123').toString();

    user.tokens = [...user.tokens, {access, token}];

    console.log(user);

    return user.save().then(() => {
        return token;
    }).then(token => token, err => console.log(err));
};

UserSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

let User = mongoose.model('User', UserSchema);

module.exports = {User};