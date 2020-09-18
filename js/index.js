requirejs.config({
    base_url: "js",
    paths: {
        "pouchdb": "../node_modules/pouchdb/dist/pouchdb",
        "pouchdbA": "../node_modules/pouchdb-authentication/dist/pouchdb.authentication",
        "slow": "./lib/slow_control"
    }
});

requirejs(['slow'],
function(slow){

    console.log("hey")
    let data = {}
    promise = slow.process()
    data = promise.then(result => {
        console.log(result);
        timestamp = result.timestamp
        time = timestamp.map(x=>{
            stepOne = x.replace(' ', 'T');
            stepTwo = stepOne + "Z"
            final = new Date(stepTwo).getTime()
            return final
        })
        console.log("time", time)
        console.log(timestamp)

        min_temp = result.Min_Temp.map(x=>parseFloat(x))
        format_min_temp = time.map(function(c, i) { return [ c, min_temp[i] ] });
        max_temp = result.Max_Temp.map(x=>parseFloat(x))
        format_max_temp = time.map(function(c, i) { return [ c, max_temp[i] ] });
        mean_temp = result.Max_Temp.map(x=>parseFloat(x))
        format_mean_temp = time.map(function(c, i) { return [ c, mean_temp[i] ] });
        console.log(format_min_temp)


        var chart = Highcharts.chart('container', {

                chart: {

                    type: 'line'

                },


                title: {

                    text: 'West Island Climate Data'

                },

                xAxis: {
                    minRange: 1,
                    labels:{
                        staggerLines:2,
                        formatter: function() {
                            return Highcharts.dateFormat('%d %b %y', this.value);
                        }
                    },
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        month: '%e. %b',
                        year: '%b'
                    },
                    title: {
                        text: 'Date'
                    }
                },
                yaxis: {
                    title: {
                        text: "Values"
                    }
                },
            rangeSelector: {
                enabled:true
             },
            navigator: {
                    enabled:true
            },
            series: [{
                name: 'Minimum Temperature',
                data: format_min_temp,
                showInNavigator: true
            },
                {
                    name: 'Maximum Temperature',
                    data: format_max_temp,
                    showInNavigator: true
                },
                {
                    name: 'Mean Temperature',
                    data: format_mean_temp,
                    showInNavigator: true
                }
            ]

            }
        )
    }
)
})
