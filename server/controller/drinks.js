// var DrinkSchema = new mongoose.Schema({
//     name: String,
//     ingredients: [String],
//     instructions: String,
//     image: String
// },{timestamps: true});

/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var Drink = mongoose.model('Drink');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    index: function(req, res){
        Drink.find({})
        .then(data => {
            console.log('success in quotes.js/findItems()');
            res.json(data);
        })
        .catch(err => {
            console.log('error in quotes.js/findItems()');
            res.json(err);
        })
    },

    createItem: function(req, res){
        console.log("CREATE ITEM")
        var item = new Drink(req.body);
        console.log(item)
        item.save(item)
        .then(data => {
             console.log('success in quotes.js/createItem()');
             res.json(data);
        })
        .catch(err => {
            console.log('error in quotes.js/createItem()');
            res.json(err);
        })
    },

    deleteItem: (req, res) => {
        console.log("deleteitem(): item is:",req.body);
         Drink.deleteOne(req.body)
         .then(data => {
             console.log('success in items.js/deleteItem()');
             res.json(data);
         })
         .catch(err => {
             console.log('error in items.js/deleteItem()');
             res.json(err);
        })
    },

    updateItem: (req, res) => {
        console.log("updateItem(): item id is:", req.params.id);
        console.log("drink content is:", req.body);

        Drink.update({_id: req.params.id}, req.body)
        .then(data => {
            console.log("drink found:", data)
            if (data) {
                console.log('drink updated');
                Drink.findOne({_id: req.params.id})
                .then(drink => {
                    console.log('passing back drink');
                    console.log("drink:",drink);
                    res.json(drink);
                })
                .catch(error => {
                    console.log('error passing back drink');
                })
            } else {
                console.log('drink not updated');
                res.json(data);
            }
        })
        .catch(error => {
            console.log("error updating drink")
        })

    }
}