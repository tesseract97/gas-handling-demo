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
            //IX1
            IX1_flow_sccm = result.IX1_flow_sccm.map(x => parseFloat(x))
            format_IX1_flow_sccm = time.map(function (c, i) {
                return [c, IX1_flow_sccm[i]]
            });
            IX1_flow_set_slpm = result.IX1_flow_set_slpm.map(x => parseFloat(x))
            format_IX1_flow_set_slpm = time.map(function (c, i) {
                return [c, IX1_flow_set_slpm[i]]
            });
            IX1_flow_slpm = result.IX1_flow_slpm.map(x => parseFloat(x))
            format_IX1_flow_slpm = time.map(function (c, i) {
                return [c, IX1_flow_slpm[i]]
            });
            IX1_vol_reset = result.IX1_vol_reset.map(x => parseFloat(x))
            format_IX1_vol_reset = time.map(function (c, i) {
                return [c, IX1_vol_reset[i]]
            });
            IX1_vol_scc = result.IX1_vol_scc.map(x => parseFloat(x))
            format_IX1_vol_scc = time.map(function (c, i) {
                return [c, IX1_vol_scc[i]]
            });
            IX1_vol_scc = result.IX1_vol_scc.map(x => parseFloat(x))
            format_IX1_vol_scc = time.map(function (c, i) {
                return [c, IX1_vol_scc[i]]
            });
            IX1_vol_sl = result.IX1_vol_sl.map(x => parseFloat(x))
            format_IX1_vol_sl = time.map(function (c, i) {
                return [c, IX1_vol_sl[i]]
            })

            var chart5 = Highcharts.chart('IX1_data', {

                    chart: {

                        type: 'line'

                    },


                    title: {

                        text: 'IX1 Data'

                    },

                    xAxis: {
                        minRange: 1,
                        labels: {
                            staggerLines: 2,
                            formatter: function () {
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
                        enabled: true,
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
                        }, {
                            type: 'minute',
                            count: 15,
                            text: '15 min'
                        }, {
                            type: 'all',
                            text: 'All'
                        }]
                    },
                    navigator: {
                        enabled: true
                    },
                    series: [{
                        name: 'IX1_flow_sccm',
                        data: format_IX1_flow_sccm,
                        showInNavigator: true
                    },
                        {
                            name: 'IX1_flow_set_slpm',
                            data: format_IX1_flow_set_slpm,
                            showInNavigator: true
                        },
                        {
                            name: 'IX1_flow_slpm',
                            data: format_IX1_flow_slpm,
                            showInNavigator: true
                        },
                        {
                            name: 'IX1_vol_reset',
                            data: format_IX1_vol_reset,
                            showInNavigator: true
                        },
                        {
                            name: 'IX1_vol_scc',
                            data: format_IX1_vol_scc,
                            showInNavigator: true
                        },
                        {
                            name: 'IX1_vol_sl',
                            data: format_IX1_vol_sl,
                            showInNavigator: true
                        }
                    ]

                }
            )
        })
    })
