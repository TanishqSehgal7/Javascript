class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    // if a getter is defined for any property, a corresponding setter is also needed

    get email() {
        return this._email
    }

    set email(emailVal) {
        this._email = emailVal
    }

    get password() {
        return this._password
    }

    set password(passwordVal) {
        this._password = passwordVal
    }
}

const tanishq = new User("tan@google.com", "123")
console.log(tanishq)
console.log(tanishq.email)
console.log(tanishq.password)

/*
There is a new proposal in ES 2022 for private properties, 
we need to put # before the propertyname in order to make then private 
 */