const db = require('../db/connection')

module.exports = class Account {
    constructor(id, username, password, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}