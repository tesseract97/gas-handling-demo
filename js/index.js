requirejs.config({
    base_url: "js",
    paths: {
        "pouchdb": "../node_modules/pouchdb/dist/pouchdb",
        "pouchdbA": "../node_modules/pouchdb-authentication/dist/pouchdb.authentication",
        "luxon": "../node_modules/luxon/build/amd/luxon",
        "slow": "./lib/slow_control"
    }
});

requirejs(['slow'],
function(slow){

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
        //console.log("time", time)
        //console.log(timestamp)

        //list = Object.keys(result)
        //console.log(list)

        //OMG PSI
        OMG001_psig = result.OMG001_psig.map(x=>parseFloat(x))
        format_OMG001_psig = time.map(function(c, i) { return [ c, OMG001_psig[i] ] });
        OMG002_psig = result.OMG002_psig.map(x=>parseFloat(x))
        format_OMG002_psig = time.map(function(c, i) { return [ c, OMG002_psig[i] ] });
        OMG003_psig = result.OMG003_psig.map(x=>parseFloat(x))
        format_OMG003_psig = time.map(function(c, i) { return [ c, OMG003_psig[i] ] });
        OMG004_psig = result.OMG004_psig.map(x=>parseFloat(x))
        format_OMG004_psig = time.map(function(c, i) { return [ c, OMG004_psig[i] ] });
        OMG005_psig = result.OMG005_psig.map(x=>parseFloat(x))
        format_OMG005_psig = time.map(function(c, i) { return [ c, OMG005_psig[i] ] });

        //OMGV
        OMG001_V = result.OMG001_V.map(x=>parseFloat(x))
        format_OMG001_V = time.map(function(c, i) { return [ c, OMG001_V[i] ] });
        OMG002_V = result.OMG002_V.map(x=>parseFloat(x))
        format_OMG002_V = time.map(function(c, i) { return [ c, OMG002_V[i] ] });
        OMG003_V = result.OMG003_V.map(x=>parseFloat(x))
        format_OMG003_V = time.map(function(c, i) { return [ c, OMG003_V[i] ] });
        OMG004_V = result.OMG004_V.map(x=>parseFloat(x))
        format_OMG004_V = time.map(function(c, i) { return [ c, OMG004_V[i] ] });
        OMG005_V = result.OMG005_V.map(x=>parseFloat(x))
        format_OMG005_V = time.map(function(c, i) { return [ c, OMG005_V[i] ] });

        //BPTpsi
        BPT001_psig = result.BPT001_psig.map(x=>parseFloat(x))
        format_BPT001_psig = time.map(function(c, i) { return [ c, BPT001_psig[i] ] });
        BPT002_psig = result.BPT002_psig.map(x=>parseFloat(x))
        format_BPT002_psig = time.map(function(c, i) { return [ c, BPT002_psig[i] ] });
        BPT003_psig = result.BPT003_psig.map(x=>parseFloat(x))
        format_BPT003_psig = time.map(function(c, i) { return [ c, BPT003_psig[i] ] });


        //BPTV
        BPT001_V = result.BPT001_V.map(x=>parseFloat(x))
        format_BPT001_V = time.map(function(c, i) { return [ c, BPT001_V[i] ] });
        BPT002_V = result.BPT002_V.map(x=>parseFloat(x))
        format_BPT002_V = time.map(function(c, i) { return [ c, BPT002_V[i] ] });
        BPT003_V = result.BPT003_V.map(x=>parseFloat(x))
        format_BPT003_V = time.map(function(c, i) { return [ c, BPT003_V[i] ] });

        //IX1
        IX1_flow_sccm = result.IX1_flow_sccm.map(x=>parseFloat(x))
        format_IX1_flow_sccm = time.map(function(c, i) { return [ c, IX1_flow_sccm[i] ] });
        IX1_flow_set_slpm = result.IX1_flow_set_slpm.map(x=>parseFloat(x))
        format_IX1_flow_set_slpm = time.map(function(c, i) { return [ c, IX1_flow_set_slpm[i] ] });
        IX1_flow_slpm = result.IX1_flow_slpm.map(x=>parseFloat(x))
        format_IX1_flow_slpm = time.map(function(c, i) { return [ c, IX1_flow_slpm[i] ] });
        IX1_vol_reset = result.IX1_vol_reset.map(x=>parseFloat(x))
        format_IX1_vol_reset = time.map(function(c, i) { return [ c, IX1_vol_reset[i] ] });
        IX1_vol_scc = result.IX1_vol_scc.map(x=>parseFloat(x))
        format_IX1_vol_scc = time.map(function(c, i) { return [ c, IX1_vol_scc[i] ] });
        IX1_vol_scc = result.IX1_vol_scc.map(x=>parseFloat(x))
        format_IX1_vol_scc = time.map(function(c, i) { return [ c, IX1_vol_scc[i] ] });
        IX1_vol_sl = result.IX1_vol_sl.map(x=>parseFloat(x))
        format_IX1_vol_sl = time.map(function(c, i) { return [ c, IX1_vol_sl[i] ] });

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



        var chart1 = Highcharts.chart('OMG_V_data', {

                chart: {

                    type: 'line'

                },


                title: {

                    text: 'OMG Data (V)'

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
                    name: 'BPT001_psig',
                    data: format_BPT001_psig,
                    showInNavigator: true
                },
                    {
                        name: 'BPT002_psig',
                        data: format_OMG002_psig,
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

                    text: 'OMG Data (V)'

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

        //IX1
        var chart5 = Highcharts.chart('IX1_data', {

                chart: {

                    type: 'line'

                },


                title: {

                    text: 'IX1 Data'

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
