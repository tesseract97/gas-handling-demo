requirejs.config({
    base_url: "js",
    paths: {
        "pouchdb": "../../node_modules/pouchdb/dist/pouchdb",
        "pouchdbA": "../../node_modules/pouchdb-authentication/dist/pouchdb.authentication",
        "luxon": "../../node_modules/luxon/build/amd/luxon",
        "slow": "./slow_control"
    }
});

requirejs(['slow'],
    function(slow) {

        let data = {}
        promise = slow.process()
        data = promise.then(result => {
            console.log(result);
            timestamp = result.timestamp
            time = timestamp.map(x => {
                stepOne = x.replace(' ', 'T');
                stepTwo = stepOne + "Z"
                final = new Date(stepTwo).getTime()
                return final
            })
            //state data
            V1state = result.V1state.map(x=>parseFloat(x))
            format_V1state = time.map(function(c, i) { return [ c, V1state[i] ] });
            V24state = result.V24state.map(x=>parseFloat(x))
            format_V24state = time.map(function(c, i) { return [ c, V24state[i] ] });
            V2state = result.V2state.map(x=>parseFloat(x))
            format_V2state = time.map(function(c, i) { return [ c, V2state[i] ] });
            V3state = result.V3state.map(x=>parseFloat(x))
            format_V3state = time.map(function(c, i) { return [ c, V3state[i] ] });
            V4state = result.V4state.map(x=>parseFloat(x))
            format_V4state = time.map(function(c, i) { return [ c, V4state[i] ] });
            V5state = result.V5state.map(x=>parseFloat(x))
            format_V5state = time.map(function(c, i) { return [ c, V5state[i] ] });
            V6state = result.V6state.map(x=>parseFloat(x))
            format_V6state = time.map(function(c, i) { return [ c, V6state[i] ] });
            XV4state = result.XV4state.map(x=>parseFloat(x))
            format_XV4state = time.map(function(c, i) { return [ c, XV4state[i] ] });

                //State Data
                var chart6 = Highcharts.chart('state_data', {

                        chart: {

                            type: 'line'

                        },


                        title: {

                            text: 'State Data'

                        },

                        xAxis: {
                            minRange: 1,
                            labels:{
                                staggerLines:2,
                                formatter: function() {
                                    return Highcharts.dateFormat('%M %S', this.value);
                                }
                            },
                            type: 'datetime',
                            dateTimeLabelFormats: {
                                minute: '%M',
                                second: '%S'
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
                            enabled:true,
                            inputPosition: {
                                align: 'left',
                                x: 0,
                                y: 0
                            },
                            inputDateFormat: '%H:%M:%S.%L',
                            buttonPosition: {
                                align: 'right',
                                x: -20,
                                y: 0
                            },
                            buttonSpacing: 20,
                            buttons: [{
                                type: 'second',
                                count: 30,
                                text: '30 sec'
                            }, {
                                type: 'minute',
                                count: 1,
                                text: '1 min'
                            },{
                                type: 'minute',
                                count: 15,
                                text: '15 min'
                            }, {
                                type: 'all',
                                text: 'All'
                            }]
                        },
                        navigator: {
                            enabled:true
                        },
                        series: [{
                            name: 'V1state',
                            data: format_V1state,
                            showInNavigator: true
                        },
                            {
                                name: 'V24state',
                                data: format_V24state,
                                showInNavigator: true
                            },
                            {
                                name: 'V2state',
                                data: format_V2state,
                                showInNavigator: true
                            },
                            {
                                name: 'V3state',
                                data: format_V3state,
                                showInNavigator: true
                            },
                            {
                                name: 'V4state',
                                data: format_V4state,
                                showInNavigator: true
                            },
                            {
                                name: 'V5state',
                                data: format_V5state,
                                showInNavigator: true
                            },
                            {
                                name: 'V6state',
                                data: format_V6state,
                                showInNavigator: true
                            }
                        ]
                    }
                )
            }
        )
    })
