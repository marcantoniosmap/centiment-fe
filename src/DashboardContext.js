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
            ticker:'SOL',
            percentage:30
        },
        {
            ticker:'DOGE',
            percentage:40
        },
    ]

    const widgetDoesNotUpdateOnChangeCoin=['widget-2','widget-3','widget-5']

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

    const W6data=[
        {
          time: 'Now',
          score: 40,
          text : 'Fear'
        },
        {
          time: 'Yesterday',
          score: 24,
          text: 'Extreme Fear'
        },
        {
          time: 'Last Week',
          score: 75,
          text : 'Greed'
        },
        {
          time: 'Last Month',
          score: 81,
          text : 'Extreme Greed'
        },
  ]

    // const [isIndo,setIsIndo] =useState(true)
    const [widgetSetup,setWidgetSetup]=useState(presetWidget)
    const [chooseWidgetModal,setChooseWidgetModal]=useState(false)
    const [selectedLocation,setSelectedLocation]=useState(null)
    const [activeWidget,setActiveWidget]=useState([])
    const [activeCoin,setActiveCoin]=useState('Bitcoin')
    const [activeCoinInfo,setActiveCoinInfo]=useState(fakeCoinInfoData[activeCoin])

    const [widget1_data,setWidget1_data]=useState(dataVolumeSentiment)
    const [widget2_data,setWidget2_data]=useState([])
    const [widget3_data,setWidget3_data]=useState(widget3Data)
    const [widget4_data,setWidget4_data]=useState(dataTT)
    const [widget5_data,setWidget5_data]=useState(dataCoinSentimentComparison)
    const [widget6_data,setWidget6_data]=useState(W6data)
    const [widgetPrice_data,setWIdgetPrice_data]=useState([])
    const [widgetCoinInfo_data,setWidgetCoinInfo_data]=useState([])
    const [widgetTweets_data,setWidgetTweets_data]=useState([])


    const arrayOfWidget=[widget1_data,widget3_data,widget4_data,widget5_data,widget6_data,widgetPrice_data,widgetCoinInfo_data,widgetTweets_data]

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

    function sentimentGrouping(score){
        if (score>=80) return 'Extreme Greed'
        if (score<80 && score >=60 ) return 'Greed'
        if (score<60 && score >=40) return 'Neutral'
        if (score<40 && score >=20) return 'Fear'
        else return 'Extreme Fear'
    }
    
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

    function getWidget3(period){
        
        return [
            {
                coinName:'Bitcoin',
                percentage:'30%',
                numoftweets:Math.floor(Math.random()*2000)
            
            },{
                coinName:'Ethereum',
                percentage:'20%',
                numoftweets:Math.floor(Math.random()*2000)
            },{
                coinName:'Binance',
                percentage:'20%',
                numoftweets:Math.floor(Math.random()*2000)
            }
        ]
    }
    function getWidget6(){
        var arr=['Now','Yesterday','Last Week','Last Month']
        var arrReturn=[]
        arr.map((singleItem)=>{
            var tempNum=Math.floor(Math.random()*100)
            arrReturn.push({
                time:singleItem,
                score: tempNum,
                text:sentimentGrouping(tempNum)
            })
        })
        return arrReturn
    }

    function getWidget5(period){
        var temp=[]
        dataCoinSentimentComparison.map((singleItem)=>{
            temp.push({
                ticker:singleItem.ticker,
                percentage:Math.floor(Math.random()*90)+10
            })
        })
        return temp
    }

    function refreshWidget(widgetType){
        switch(widgetType){
            case 'widget-1':
                return setWidget1_data(getWidget1('weekly'))
            case 'widget-2':
                return []
            case 'widget-3':
                return setWidget3_data(getWidget3('weekly'))
            case 'widget-4':
                return dataTT
            case 'widget-5':
                return setWidget5_data(getWidget5('weekly'))
            case 'widget-6':
                return setWidget6_data(getWidget6())
            default:
                return <></>
        }
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

    function setWidgetData(widgetType){
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

    function getCurrentCoin(){
        return activeCoin
    }
    function setCurrentCoin(choice){
        setActiveCoin(choice)
        setActiveCoinInfo(fakeCoinInfoData[choice])
        activeWidget.map((widget,index)=>{
            if(!widgetDoesNotUpdateOnChangeCoin.includes(widget)){
                refreshWidget(widget) 
            }
    })

    }
    function getCoinDetail(){
        const currentCoin=activeCoin
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
        setWidgetData,
        getCoinDetail,
        activeCoinInfo,
        sentimentTest,

        widget1_data,
        widget2_data,
        widget3_data,
        widget4_data,
        widget5_data,
        widget6_data,
        widgetPrice_data,
        widgetCoinInfo_data,
        widgetTweets_data,
        refreshWidget
    }

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )

}