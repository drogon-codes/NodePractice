
//List product and records and insert new records with image upload
const User = require('../Models/user');
const mongoose = require('mongoose');

module.exports.register = function (req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save(function (err, doc) {
        if (!err) {
            //redirect to list of products
            res.redirect('/login');
        }
        else {
            if (err.name == 'ValidationError') {
                res.render("register", {
                    viewTitle: "Regsiter",
                    user: req.body
                });
            }
            else
                console.log('Error during record registration : ' + err);
        }
    });
}

module.exports.login = function (req, res) {
    Product.find(function (err, docs) {
        if (!err) {
            res.render("showproducts", {
                products: docs
            });
        }
        else {
            console.log('Error in retrieving product list :' + err);
        }
    });
}