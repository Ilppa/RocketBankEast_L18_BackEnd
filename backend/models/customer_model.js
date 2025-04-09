const db = require("../database")

const model = {
    getAll: function(callback) {
        return db.query('select * from customer', callback);
    },
    getById: function(id, callback) {
        return db.query('select * from customer where idcustomer=?', [id], callback);
    },
    add: function(customer, callback) {
        return db.query(
            'insert into customer (first_name, last_name, email, phone) values(?, ?, ?, ?)', 
            [customer.first_name, customer.last_name, customer.email, customer.phone], 
            callback
        );
    },
    delete: function(id, callback) {
        return db.query('delete from customer where idcustomer=?', [id], callback);
    },
    update: function(id, customer, callback) {
        return db.query(
            'update customer set first_name=?, last_name=?, email=?, phone=? where idcustomer=?', 
            [customer.first_name, customer.last_name, customer.email, customer.phone, id], 
            callback
        );
    }
}

module.exports = model;