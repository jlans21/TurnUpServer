/*
 * ITEM MODEL 
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create schema
var DrinkSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    quantities: [String],
    instructions: String,
    image: String
},{timestamps: true});

//register schema as model
var Drink = mongoose.model('Drink', DrinkSchema);