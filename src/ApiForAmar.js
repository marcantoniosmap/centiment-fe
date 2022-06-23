//This is API Request shit oke

//REQUEST FOR PRICE CHART DATA:
var PRICECHARTDATA={
    requestUrl :'/get/pricechart/:coinName',
    RequestExample:'/get/pricechart/bitcoin',
    requestBody:'',
    methods: 'GET',
    respond: [
        {
          time: "3/15/2021",
          open: 59037.11,
          high: 60740,
          low: 54517.28,
          close: 55646.61
        },
        {
          time: "3/16/2021",
          open: 55646.61,
          high: 56988,
          low: 53335,
          close: 56954.19
        },
        {
          time: "3/17/2021",
          open: 56953.23,
          high: 59078.79,
          low: 54154.93,
          close: 58959
        },
    ],
    note:'array is sorted from the oldest to the newest if possible'
}

///REQUEST FOR COIN INFORMATION WIDGET
var COININFODATA={
    requestUrl :'/get/coinInfo/:coinName',
    RequestExample:'/get/coinInfo/ethereum',
    requestBody:'',
    methods: 'GET',
    respond: {
        id:'Ethereum',
        ticker:'ETH',
        price:1753.64,
        priceDiff:-1.11,
        volume:18907285519,
        volumeDiff:-2,
        sentiment:47,
        sentimentDiff:-0.8,
        tweetCount:397800,
        tweetCountDiff:-4.5,
    },
    note : 'Diff is a percentage of difference between todays data and previous day '
}

//REQUEST FOR RECENT TWEET WIDGET
var TWEETWIDGETDATA={
    requestUrl :'/get/tweet/:coinName',
    RequestExample:'/get/tweet/binance',
    requestBody:'',
    methods: 'GET',
    respond: [
        {
            id:"1528370668747649024",
            twitterHandle:'marcant79111897',
            time :'2 minutes ago',
            tweetContentText:'$XRP is going nowhere',
            score :65,
        },
        {
            id:"1529032149638209536",
            twitterHandle:'cz_binance',
            time :'2022/04/21',
            tweetContentText:'2 years ago, #BNB price was $16.',
            score :32,
        },
        {
            id:"1508784687774412807",
            twitterHandle:'market_reckr',
            time :'2022/04/21',
            tweetContentText:'#CBDC The biggest Joke I’ve ever seen !! What a ……',
            score :89,
        }
    ],
    note: 'id is the id to the original tweet, score is the sentiment score'
}

//REQUEST FOR WIDGET2 DATA
var WIDGETDATA2={
    requestUrl :'/get/widget2/',
    RequestExample:'/post',
    requestBody:{
        tweetContentText:'Let me test this sentiment AI made by centiment.'
    },
    methods: 'POST',
    respond: {

        tweetContentText:'Let me test this sentiment AI made by centiment.',
        tweetSentimentScore : 78
    },
    note: ''
}

//REQUEST FOR WIDGET3 DATA
var WIDGETDATA2={
    requestUrl :'/get/widget2/',
    RequestExample:'/post',
    requestBody:"",
    methods: 'get',
    respond:  [
        {
            coinName:'Bitcoin',
            percentage:'30%',
            numoftweets:6000
        
        },{
            coinName:'Ethereum',
            percentage:'20%',
            numoftweets:32000
        },{
            coinName:'Binance',
            percentage:'20%',
            numoftweets:Math.floor(Math.random()*2000)
        }
    ],
    note: ''
}

