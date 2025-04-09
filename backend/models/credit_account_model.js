const db = require("../database")

const model={
    getAll: function(callback) {
        return db.query('select * from credit_account', callback);
    },
    getById: function(id, callback) {
        return db.query('select * from credit_account where idcredit_account=?', [id], callback);
    },
    add: function(account, callback) {
        return db.query('insert into credit_account (balance, credit_limit, customer_idcustomer) values(?, ?, ?)', [account.balance, account.credit_limit, account.customer_id], callback);
    },
    delete: function(id, callback) {
        return db.query('delete from credit_account where idcredit_account=?', [id], callback);
    },
    update: function(id, account, callback) {
        return db.query('update credit_account set balance=?, credit_limit = ?, customer_idcustomer = ? where idcredit_account=?', [account.balance, account.credit_limit, account.customer_id, id], callback);
    }
}

module.exports = model