const User = {
    _email: "tan@netflix.com",
    _password: "12345abc",

    // _propertyName shows that a private property is defined
    // the moment getters and setters are defined, there is no significance of _ anymore 

    get email() {
        return this._email
    },
    set email(value) {
        this._email = value
    },

    get password() {
        return this._password
    },
    set password(value) {
        this._password = value
    }
}

const usr1 = Object.create(User)
console.log(usr1.email)
console.log(usr1._email)
console.log(usr1.password)
console.log(usr1._password)

// email, _email, password, _password are all same properties.




