const db = require("../database")

const model={
    getAll: function(callback) {
      return db.query('SELECT * FROM card', callback);
    },
    getById: function(id, callback) {
      return db.query('SELECT * FROM card WHERE idcard = ?', [id], callback);
    },
    add: function(card, callback) {
      const { pin, RFID, customer_idcustomer, debit_account_iddebit, credit_account_idcredit, cardcol } = card;
      return db.query('INSERT INTO card (pin, RFID, customer_idcustomer, debit_account_iddebit, credit_account_idcredit, cardcol) VALUES (?, ?, ?, ?, ?, ?)',
        [pin, RFID, customer_idcustomer, debit_account_iddebit, credit_account_idcredit, cardcol], callback);
    },
    delete: function(id, callback) {
      return db.query('DELETE FROM card WHERE idcard = ?', [id], callback);
    },
    update: function(id, card, callback) {
      const { pin, RFID, customer_idcustomer, debit_account_iddebit, credit_account_idcredit, cardcol } = card;
      return db.query('UPDATE card SET pin = ?, RFID = ?, customer_idcustomer = ?, debit_account_iddebit = ?, credit_account_idcredit = ?, cardcol = ? WHERE idcard = ?',
        [pin, RFID, customer_idcustomer, debit_account_iddebit, credit_account_idcredit, cardcol, id], callback);
    }
};

module.exports = model
