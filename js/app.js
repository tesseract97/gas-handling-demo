var Express = require("express")
var BodyParser = require("body-parser")
var PouchDB = require('../node_modules/pouchdb')
PouchDB.plugin(require('../node_modules/pouchdb-authentication'));

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database = new PouchDB("http://192.168.57.1:4984/example");

app.get("/people", function(req, res) { });

app.get("/people/:id", function(req, res) { });

app.post("/people", function(req, res) { });

app.delete("/people", function(req, res) { });

var server = app.listen(3000, function() {
    database.info().then(function(info) {
        console.log(info);
        console.log("Listening on port %s...", server.address().port);
    });
});
