define(["require", "module", "pouchdb", "pouchdbA"], function(require, module) {
    function logInToDatabase() {
        var PouchDB = require('pouchdb')
        PouchDB.plugin(require('pouchdbA'));
        var db = new PouchDB('http://admin:x3n0ntpc@127.0.0.1:5984/hello_world', {skip_setup: true})
        return db.logIn('admin', 'x3n0ntpc').then(async function (admin) {
            let docArray = await returnDocsInRange(db)
            console.log("hi")
            let [keys, vals] = separateIntoDataSets(docArray)
            let dataSet = connectKeysAndVals(keys, vals)
            db.logOut()
            return dataSet
        })
    }

    async function returnDocsInRange(db, start = '1992-01-08 00:00:00', end = '1992-04-08 00:00:00') {
        try {
            var result = await db.allDocs({
                include_docs: true,
                attachments: true,
                startkey: start,
                endkey: end
            });
        } catch (err) {
            console.log(err);
        }
        return result.rows
    }

    function separateIntoDataSets(rows) {
        keys = Object.keys(rows[0].doc)
        keys.shift()
        keys.shift()
        values = []
        for (i = 0; i < rows.length; i++) {
            for (j = 0; j < keys.length; j++) {
                if (i == 0) {
                    values.push([])
                }
                values[j].push(rows[i].doc[keys[j]])
            }
        }
        return [keys, values]
    }

    function connectKeysAndVals(keys, values) {
        dataSet = {}
        for (i = 0; i < keys.length; i++) {
            dataSet[keys[i]] = values [i]
        }
        return dataSet
    }

    async function processData() {
        let result = await logInToDatabase()
        console.log(result)
        return result
    }

    var exportObject = {};

    exportObject.process = function() {
        let result = processData()
        console.log(result)
        return result;
    }
    return exportObject
}
)



