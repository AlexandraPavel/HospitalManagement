const db = require('../db/connection')

module.exports = class TreatmentLine {
    constructor(id, line, idDrug, quantity, administration) {
        this.id = id;
        this.line = line;
        this.idDrug = idDrug;
        this.quantity = quantity;
        this.administration = administration;
    }

}