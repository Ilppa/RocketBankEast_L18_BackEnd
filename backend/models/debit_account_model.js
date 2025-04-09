const db = require("../database")

const model={
    getAll: function(callback) {
        return db.query('select * from debit_account', callback);
    },
    getById: function(id, callback) {
        return db.query('select * from debit_account where iddebit_account=?', [id], callback);
    },
    add: function(account, callback) {
        return db.query('insert into debit_account (balance, customer_idcustomer) values(?, ?)', [account.balance, account.customer_id], callback);
    },
    delete: function(id, callback) {
        return db.query('delete from debit_account where iddebit_account=?', [id], callback);
    },
    update: function(id, account, callback) {
        return db.query('update debit_account set balance=?, customer_idcustomer = ? where iddebit_account=?', [account.balance, account.customer_id, id], callback);
    }
}

module.exports = model