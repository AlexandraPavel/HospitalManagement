const db = require('../db/connection')

module.exports = class User {
    constructor(id, role, name, phone, address, department, room) {
        this.id = id;
        this.role = role;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.department = department;
        this.room = room;
    }
}