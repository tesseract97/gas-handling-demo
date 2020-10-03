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
            //OMG PSI
            OMG001_psig = result.OMG001_psig.map(x => parseFloat(x))
            format_OMG001_psig = time.map(function (c, i) {
                return [c, OMG001_psig[i]]
            });
            OMG002_psig = result.OMG002_psig.map(x => parseFloat(x))
            format_OMG002_psig = time.map(function (c, i) {
                return [c, OMG002_psig[i]]
            });
            OMG003_psig = result.OMG003_psig.map(x => parseFloat(x))
            format_OMG003_psig = time.map(function (c, i) {
                return [c, OMG003_psig[i]]
            });
            OMG004_psig = result.OMG004_psig.map(x => parseFloat(x))
            format_OMG004_psig = time.map(function (c, i) {
                return [c, OMG004_psig[i]]
            });
            OMG005_psig = result.OMG005_psig.map(x => parseFloat(x))
            format_OMG005_psig = time.map(function (c, i) {
                return [c, OMG005_psig[i]]
            });

            //OMGV
            OMG001_V = result.OMG001_V.map(x => parseFloat(x))
            format_OMG001_V = time.map(function (c, i) {
                return [c, OMG001_V[i]]
            });
            OMG002_V = result.OMG002_V.map(x => parseFloat(x))
            format_OMG002_V = time.map(function (c, i) {
                return [c, OMG002_V[i]]
            });
            OMG003_V = result.OMG003_V.map(x => parseFloat(x))
            format_OMG003_V = time.map(function (c, i) {
                return [c, OMG003_V[i]]
            });
            OMG004_V = result.OMG004_V.map(x => parseFloat(x))
            format_OMG004_V = time.map(function (c, i) {
                return [c, OMG004_V[i]]
            });
            OMG005_V = result.OMG005_V.map(x => parseFloat(x))
            format_OMG005_V = time.map(function (c, i) {
                return [c, OMG005_V[i]]
            });

            var chart1 = Highcharts.chart('OMG_V_data', {

                    chart: {

                        type: 'line'

                    },


                    title: {

                        text: 'OMG Data (V)'

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
                        name: 'OMG001_V',
                        data: format_OMG001_V,
                        showInNavigator: true
                    },
                        {
                            name: 'OMG002_V',
                            data: format_OMG002_V,
                            showInNavigator: true
                        },
                        {
                            name: 'OMG003_V',
                            data: format_OMG003_V,
                            showInNavigator: true
                        },
                        {
                            name: 'OMG004_V',
                            data: format_OMG004_V,
                            showInNavigator: true
                        },
                        {
                            name: 'OMG005_V',
                            data: format_OMG005_V,
                            showInNavigator: true
                        }
                    ]

                }
            )

            //OMG psig
            var chart2 = Highcharts.chart('OMG_psig_data', {

                    chart: {

                        type: 'line'

                    },


                    title: {

                        text: 'OMG Data (PSIG)'

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
                        name: 'OMG001_psig',
                        data: format_OMG001_psig,
                        showInNavigator: true
                    },
                        {
                            name: 'OMG002_psig',
                            data: format_OMG002_psig,
                            showInNavigator: true
                        },
                        {
                            name: 'OMG003_psig',
                            data: format_OMG003_psig,
                            showInNavigator: true
                        },
                        {
                            name: 'OMG004_psig',
                            data: format_OMG004_psig,
                            showInNavigator: true
                        },
                        {
                            name: 'OMG005_psig',
                            data: format_OMG005_psig,
                            showInNavigator: true
                        }
                    ]

                }
            )
        })
    })
