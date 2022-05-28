import React, {useContext, useState, useEffect} from "react"
import presetWidget from "./userWidgtet"
import fakeCoinInfoData from "./fakeCoinInfoData"
const DashboardContext = React.createContext()

export function useDashboard(){
    return useContext(DashboardContext)
}

export function DashboardProvider({children}){


    const dataTT = [{ twitter_volume: 0, trade_volume:2,  time: 1642425322 }, { twitter_volume: 8, trade_volume:3, time: 1642511722 }, { twitter_volume: 10,trade_volume:2, time: 1642598122 }, { twitter_volume: 20, trade_volume:24, time: 1642684522 }, { twitter_volume: 3, trade_volume:9, time: 1642770922 }, { twitter_volume: 43,trade_volume:54,  time: 1642857322 }, { twitter_volume: 41, trade_volume:51, time: 1642943722 }, { twitter_volume: 43,trade_volume:40, time: 1643030122 }, { twitter_volume: 56,trade_volume:50, time: 1643116522 }, { twitter_volume: 46, trade_volume:44, time: 1643202922 }];
    const dataVolumeSentiment  = [{ value: 1, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922, color: '#E35B5B' }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722, color: '#E35B5B' }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922, color: '#E35B5B' }];
    const dataCoinSentimentComparison=[
        {
            ticker:'BTC',
            percentage:20
        },
        {
            ticker:'ETH',
            percentage:70
        },
        {
            ticker:'BNB',
            percentage:30
        },
        {
            ticker:'XRP',
            percentage:80
        },
        {
            ticker:'ADA',
            percentage:50
        },
        {
            ticker:'LUNA',
            percentage:30
        },
        {
            ticker:'SOL',
            percentage:40
        },
    ]

const widget3Data=[
        {
            coinName:'Bitcoin',
            percentage:'30%',
            numoftweets:10043
    
    },{
        coinName:'Ethereum',
        percentage:'20%',
        numoftweets:2421
    },{
        coinName:'Binance',
        percentage:'20%',
        numoftweets:583
    }
]

    const recentTweetData=[
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
        },
        {
            id:"1503375427494100999",
            twitterHandle:'generationalbtc',
            time :'2022/04/21',
            tweetContentText:'#Bitcoin is being drained from exchanges ',
            score :20,
        }
    ]


    // const [isIndo,setIsIndo] =useState(true)
    const [widgetSetup,setWidgetSetup]=useState(presetWidget)
    const [chooseWidgetModal,setChooseWidgetModal]=useState(false)
    const [selectedLocation,setSelectedLocation]=useState(null)
    const [activeWidget,setActiveWidget]=useState([])
    const [activeCoin,setActiveCoin]=useState('Bitcoin')
    const [activeCoinInfo,setActiveCoinInfo]=useState(fakeCoinInfoData[activeCoin])

    function refreshData(userID,location){
        return 0
    }
    function submitAddWidget(selectedChoice){
        if (typeof selectedChoice === 'number' && isFinite(selectedChoice)){
            var tempArray = widgetSetup;
            tempArray[selectedLocation].id= "widget-"+selectedChoice
            setWidgetSetup(tempArray)
            updateActiveWidget()
            setModal(false,null)
        }else return
            
    }
    useEffect(()=>{
        updateActiveWidget()
    },[])

    function updateActiveWidget(){
        var tempArray=widgetSetup.map(a=>a.id)
        setActiveWidget(tempArray)

    }

    function setModal(command,location){
        setSelectedLocation(location)
        setChooseWidgetModal(command)
    }
    function deleteWidget(location){
        // console.log(widgetSetup)
        var tempArray = widgetSetup;
        tempArray[location].id= "none"
        setWidgetSetup(tempArray)
        updateActiveWidget()
        setModal(false,null)
    }

    function getRecentTweet(){
        return recentTweetData
    }

    // var getDaysArray = function(start, end) {
    //     for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
    //         arr.push(new Date(dt).toISOString().slice(0,10));
    //     }
    //     return arr;
    // };
    
    function getTimeArray(period){
        var daysBackward=0
        if (period==='weekly') daysBackward=6
        if (period==='monthly') daysBackward=30

        var d= new Date()
        d.setDate(d.getDate()-daysBackward)
        for(var arr=[],dt=new Date(d); dt<=new Date(); dt.setDate(dt.getDate()+1)){
            arr.push(new Date(dt).toISOString().slice(0,10));
        }
        return arr
        // getDaysArray(new Date(d), new Date())
    }

    function getWidget1(period){
        const timeArray=getTimeArray(period)
        var finalArray=[]
        timeArray.map((daily,index)=>(
            finalArray.push({
                time:daily,
                value: Math.floor(Math.random()*100)
            })
        ))
        return finalArray
    }

    // console.log(getWidget1('weekly'))

    function getWidgetData(widgetType){
        switch(widgetType){
            case 'widget-1':
                return getWidget1('weekly')
            case 'widget-2':
                return []
            case 'widget-3':
                return widget3Data
            case 'widget-4':
                return dataTT
            case 'widget-5':
                return dataCoinSentimentComparison
            case 'widget-6':
                return 0
            default:
                return <></>
        }


    }
    function setWidgetData(){

    }
    function getCurrentCoin(){
        return activeCoin
    }
    function setCurrentCoin(choice){
        setActiveCoin(choice)
        setActiveCoinInfo(fakeCoinInfoData[choice])

    }
    function getCoinDetail(){
        const currentCoin=activeCoin
        // console.log(activeCoin)
        // return fakeCoinInfoData[currentCoin]
        setActiveCoinInfo(fakeCoinInfoData[currentCoin])
    }
    function sentimentTest(param){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(Math.floor(Math.random()*100));
            },1000);
        }) 
    }

   
    const value ={
        widgetSetup,
        chooseWidgetModal,
        activeWidget,
        setModal,
        submitAddWidget,
        deleteWidget,
        getWidgetData,
        getRecentTweet,
        getCurrentCoin,
        setCurrentCoin,
        getCoinDetail,
        activeCoinInfo,
        sentimentTest,
    }

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )

}