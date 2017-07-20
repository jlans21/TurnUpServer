/*
 * VARIABLES
 */
var drinks = require('../controller/drinks.js'),
    path = require('path');

/*
 * ROUTES
 */
module.exports = function(app){
    
    app.post('/newitem', (req, res) => {
        drinks.createItem(req, res);
    });
    app.get('/drinks', (req, res) => {
        drinks.index(req, res);
    });
    app.post('/delete', (req, res) => {
        drinks.deleteItem(req, res);
    });
    app.post('/update/:id', (req, res)=> {
        drinks.updateItem(req, res);
    });

    /*
    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"));
    });
    */
}