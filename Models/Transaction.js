class Transaction {
    constructor(id, date, description, amount){
        this.id = id;
        this.date = date;
        this.description= description;
        this.amount = amount;
    }
}

module.exports = Transaction