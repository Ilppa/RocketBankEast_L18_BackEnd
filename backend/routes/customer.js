var express = require('express');
var router = express.Router();
const model = require('../models/customer_model.js');

router.get('/:id?',
    function(request, response) {
    if (request.params.id) {
        model.getById(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
        });
    } else {
        model.getAll(function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
        });
    }
});

router.post('/', 
    function(request, response) {
        model.add(request.body, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult); 
            }
        });
    });
    
router.delete('/:id', 
    function(request, response) {
    model.delete(request.params.id, function(err, dbResult) {
    if (err) {
        response.json(err);
    } else {
        response.json(dbResult);
    }
    });
});
    
    
router.put('/:id', 
    function(request, response) {
    model.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
        response.json(err);
    } else {
        response.json(dbResult);
    }
    });
});

module.exports = router;