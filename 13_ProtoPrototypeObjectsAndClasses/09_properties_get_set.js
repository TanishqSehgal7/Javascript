function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, "password", {
        get: function() {
            return this._password
        },
        set: function(value) {
            this._password = value
        }
    })
}

const user = new User("tan@facebook.com", "12345")
console.log(user.email)
console.log(user.password)
