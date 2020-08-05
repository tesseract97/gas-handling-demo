define(function (require, exports, module) {
    var slow = require('./slow_control.js')


async function processData(){
    let result = await slow.getData
    return result
}

    module.exports= {
        processData: processData()
    }
});

