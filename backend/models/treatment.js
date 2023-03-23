const db = require('../db/connection')

module.exports = class Treatment {
    constructor(id, idUser, nameUser, idDoctor, nameSickness, date) {
        this.id = id;
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.idDoctor = idDoctor;
        this.nameSickness = nameSickness;
        this.date = date;
    }
    

}