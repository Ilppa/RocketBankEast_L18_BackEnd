const db = require("../database")


const model={
    getAll: function(callback) {
        return db.query('SELECT * FROM transactions', callback)
    },
    getById: function(id, callback) {
        return db.query('SELECT * FROM transactions WHERE idtransactions=?', [id], callback);
    },
    add: function(transactions, callback) {
        return db.query(`INSERT INTO transactions (date, event_type, customer_idcustomer, 
            debit_account_iddebit_account, debit_account_customer_idcustomer, credit_account_idcredit_account,
             credit_account_customer_idcustomer) VALUES(?, ?, ?, ?, ?, ?, ?)`, 
             [transactions.date, transactions.event_type, transactions.customer_idcustomer, 
                transactions.debit_account_iddebit_account, transactions.debit_account_customer_idcustomer, 
                transactions.credit_account_idcredit_account,
                transactions.credit_account_customer_idcustomer], callback);
    },
    delete: function(id, callback) {
        return db.query('DELETE FROM transactions WHERE idtransactions=?', [id], callback);
    },
    update: function(id, transactions, callback) {
        return db.query(`UPDATE transactions SET date=?, event_type=?, customer_idcustomer=?, 
            debit_account_iddebit_account=?, debit_account_customer_idcustomer=?,
            credit_account_idcredit_account=?, credit_account_customer_idcustomer=? WHERE idtransactions=?`,
        [transactions.date, transactions.event_type, transactions.customer_idcustomer, 
            transactions.debit_account_iddebit_account, transactions.debit_account_customer_idcustomer, 
            transactions.credit_account_idcredit_account, transactions.credit_account_customer_idcustomer, 
            id], callback)
    }
}

module.exports = model