define(["require", "module", "pouchdb", "pouchdbA", "luxon"], function(require, module) {
    function logInToDatabase() {
        var PouchDB = require('pouchdb')
        PouchDB.plugin(require('pouchdbA'));
        var db = new PouchDB('http://admin:x3n0ntpc@127.0.0.1:5984/xe_gas_handling', {skip_setup: true})
        return db.logIn('admin', 'x3n0ntpc').then(async function (admin) {
            let docArray = await returnDocsInRange(db, "half hour")
            let [keys, vals] = separateIntoDataSets(docArray)
            let dataSet = connectKeysAndVals(keys, vals)
            db.logOut()
            return dataSet
        })
    }

    async function returnDocsInRange(db, range="week") {
        try {
            var { DateTime } = require("luxon")
            var enddate = DateTime.local().setZone('America/New_York').toISODate()
            var endtime = DateTime.local().setZone('America/New_York').toISOTime().slice(0,8)
            var end = enddate + " " + endtime

            var startdate = DateTime.local().setZone('America/New_York').minus({days: 7}).toISODate()
            var starttime = DateTime.local().setZone('America/New_York').toISOTime().slice(0,8)
            var start = startdate + " " + starttime

            if (range == "week") {
                startdate = DateTime.local().setZone('America/New_York').minus({days: 7}).toISODate()
                starttime = DateTime.local().setZone('America/New_York').toISOTime().slice(0, 8)
                start = startdate + " " + starttime
            }
            if (range == "day") {
                startdate = DateTime.local().setZone('America/New_York').minus({days: 1}).toISODate()
                starttime = DateTime.local().setZone('America/New_York').toISOTime().slice(0, 8)
                start = startdate + " " + starttime
            }
            if (range == "hour") {
                startdate = DateTime.local().setZone('America/New_York').toISODate()
                starttime = DateTime.local().setZone('America/New_York').minus({hours: 1}).toISOTime().slice(0, 8)
                start = startdate + " " + starttime
            }
            if (range == "fortnight") {
                startdate = DateTime.local().setZone('America/New_York').minus({days: 14}).toISODate()
                starttime = DateTime.local().setZone('America/New_York').toISOTime().slice(0, 8)
                start = startdate + " " + starttime
            }
            if (range == "minute") {
                startdate = DateTime.local().setZone('America/New_York').toISODate()
                starttime = DateTime.local().setZone('America/New_York').minus({minutes: 1}).toISOTime().slice(0, 8)
                start = startdate + " " + starttime
            }
            if(range == "half hour"){
                startdate = DateTime.local().setZone('America/New_York').toISODate()
                starttime = DateTime.local().setZone('America/New_York').minus({minutes: 30}).toISOTime().slice(0, 8)
                start = startdate + " " + starttime
            }
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
        console.log(rows)
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



