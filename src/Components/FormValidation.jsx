
const constraints = {
    fullName: {
        presence: {allowEmpty: false, message: "required"},
        length: {
            minimum: 3,
            message: "is too short"
        },
    },
    username: {
        presence:{allowEmpty: false, message: 'required'},
        length:{
            minimum: 3,
            message: "should be at least 3 characters"
        },
    },
    email: {
        presence: {allowEmpty: false, message: 'required'},
        email:{message: 'is invalid'}

    },
    password: {
        presence: {allowEmpty: false, message: 'required'},
        length:{
            minimum: 5,
            message: "is too short"
        },

    }
}

export default constraints;
