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
                //BPTpsi
                BPT001_psig = result.BPT001_psig.map(x => parseFloat(x))
                format_BPT001_psig = time.map(function (c, i) {
                    return [c, BPT001_psig[i]]
                });
                BPT002_psig = result.BPT002_psig.map(x => parseFloat(x))
                format_BPT002_psig = time.map(function (c, i) {
                    return [c, BPT002_psig[i]]
                });
                BPT003_psig = result.BPT003_psig.map(x => parseFloat(x))
                format_BPT003_psig = time.map(function (c, i) {
                    return [c, BPT003_psig[i]]
                });


                //BPTV
                BPT001_V = result.BPT001_V.map(x => parseFloat(x))
                format_BPT001_V = time.map(function (c, i) {
                    return [c, BPT001_V[i]]
                });
                BPT002_V = result.BPT002_V.map(x => parseFloat(x))
                format_BPT002_V = time.map(function (c, i) {
                    return [c, BPT002_V[i]]
                });
                BPT003_V = result.BPT003_V.map(x => parseFloat(x))
                format_BPT003_V = time.map(function (c, i) {
                    return [c, BPT003_V[i]]
                });


                //BPT PSI
                var chart3 = Highcharts.chart('BPT_psi_data', {

                        chart: {

                            type: 'line'

                        },


                        title: {

                            text: 'BPT Data (PSIG)'

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
                            name: 'BPT001_psig',
                            data: format_BPT001_psig,
                            showInNavigator: true
                        },
                            {
                                name: 'BPT002_psig',
                                data: format_BPT002_psig,
                                showInNavigator: true
                            },
                            {
                                name: 'BPT003_psig',
                                data: format_BPT003_psig,
                                showInNavigator: true
                            }
                        ]

                    }
                )
                //BPT V
                var chart4 = Highcharts.chart('BPT_V_data', {

                        chart: {

                            type: 'line'

                        },


                        title: {

                            text: 'BPT Data (V)'

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
                            name: 'BPT001_V',
                            data: format_BPT001_V,
                            showInNavigator: true
                        },
                            {
                                name: 'BPT002_V',
                                data: format_BPT002_V,
                                showInNavigator: true
                            },
                            {
                                name: 'BPT003_V',
                                data: format_BPT003_V,
                                showInNavigator: true
                            }
                        ]

                    }
                )
            }
        )
    })
