define(function (require,exports, module) {
    var PouchDB = require('../node_modules/pouchdb')
    PouchDB.plugin(require('../node_modules/pouchdb-authentication'));


    function logInToDatabase() {
        var db = new PouchDB('http://admin:x3n0ntpc@127.0.0.1:5984/west_island_climate_data', {skip_setup: true})
        return db.logIn('admin', 'x3n0ntpc').then(async function (admin) {
            let docArray = await returnDocsInRange(db)
            let [x, y] = separateByField(docArray)
            db.logOut()
            return [x,y]
        }).then((result) => {return result}).catch(err => console.log(err))
    }

    async function returnDocsInRange(db){
        try {
         var result = await db.allDocs({
                include_docs: true,
                attachments: true,
                startkey: '1992-01-08 00:00:00',
                endkey: '1992-04-08 00:00:00'
            });
        } catch (err) {
            console.log(err);
        }
        return result.rows
    }

    function separateByField(rows){
        x = []
        y = []
        for (i = 0; len = i < rows.length; i++) {
            x.push(rows[i].doc.timestamp)
            y.push(parseFloat(rows[i].doc.Mean_Temp))
        }
        return [x, y]
    }

    async function processData(){
        let result = await logInToDatabase()
        return result
    }

    module.exports = {
        getData: processData()
    }
});


