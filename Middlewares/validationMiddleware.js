const { body, checkSchema, validationResult } = require('express-validator');

const registerValidationRules = () => {
    return checkSchema({
        'user.firstName': {
            isString: {
                errorMessage: 'You must enter a firstname'
            },
        },
        'user.lastName': {
            isString: {
                errorMessage: 'You must enter last name'
            },
        },
        'user.email': {
            isEmail: {
                errorMessage: 'you must enter a valid email'
            },
        },
        'user.phoneNumber': {
            custom: {
                options: (value) => {
                    return /(\+237|237)?\s?(6|2)(2|3|[5-9])[0-9]{7}/.test(value);
                },
            
            }
        },
        'user.password': {
            isLength: {
                errorMessage: 'Password should be at least 7 chars long',
                options: { min: 7 },
            },
        },
    })
}


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next()
}

module.exports = {
    registerValidationRules,
    validate,
}
