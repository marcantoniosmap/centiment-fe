import React, {useContext, useState, useEffect} from "react"
import fakeCoinInfoData from "./fakeCoinInfoData"
import { useAuth } from "./AuthContext"
import priceChartData from "./priceChartData"

const DashboardContext = React.createContext()

export function useDashboard(){
    return useContext(DashboardContext)
}

export function DashboardProvider({children}){

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
    const widgetDoesNotUpdateOnChangeCoin=['widget-2','widget-3','widget-5']




    // const [isIndo,setIsIndo] =useState(true)
    const [widgetSetup,setWidgetSetup]=useState([])
    const [chooseWidgetModal,setChooseWidgetModal]=useState(false)
    const [selectedLocation,setSelectedLocation]=useState(null)
    const [activeWidget,setActiveWidget]=useState([])
    const [activeCoin,setActiveCoin]=useState()

    const [widget1_data,setWidget1_data]=useState([])
    const [widget3_data,setWidget3_data]=useState([])
    const [widget4_data,setWidget4_data]=useState([])
    const [widget5_data,setWidget5_data]=useState([])
    const [widget6_data,setWidget6_data]=useState([])
    const [widgetPrice_data,setWIdgetPrice_data]=useState([])
    const [widgetCoinInfo_data,setWidgetCoinInfo_data]=useState([])
    const [widgetTweets_data,setWidgetTweets_data]=useState([])
    const [readyTorender,setReadyToRender]=useState(false)

    const {getUser,user,isAuthenticated} = useAuth()


    const domain = 'https://rsvp.marcantonioapp.com'
    const domain_amar = 'https://api-centiment.marcantonioapp.com'
    const currentCoin = window.location.pathname.split('/')[2]


    useEffect(()=>{
        setActiveCoin(window.location.pathname.split('/')[2])
        getWidgetSetup(currentCoin)
        updateActiveWidget()
        setActiveCoin('')
        return () => {  
            setWidgetSetup([])
          };
    },[])

    async function submitAddWidget(selectedChoice){
        if (typeof selectedChoice === 'number' && isFinite(selectedChoice)){
            var tempArray = widgetSetup;
            tempArray[selectedLocation].id= "widget-"+selectedChoice
            try{
                const fetch = await updateWidgetSetup(tempArray)
                setWidgetSetup(tempArray)
                updateActiveWidget()
                refreshWidget(`widget-${selectedChoice}`,activeCoin)
                setModal(false,null)
            }catch(err){
                setModal(false,null)
                return 
            }
        }else return
            
    }

    async function updateWidgetSetup(updatedArray){
        if (!isAuthenticated) {return 0}
        else{
            const requestOptions = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": user.token,
                },
                body: JSON.stringify({widget:updatedArray})
              }

            try{
                const setWidget = await fetch(`${domain}/widget/set/${user.id}`,requestOptions)
                const data =await setWidget.json()
            }catch(err){
                return 0
            }
        }
    }

    ///FETCHING THE WIDGET///
    async function getWidgetSetup(currentCoin){
        if (!isAuthenticated){
            setWidgetSetup([{id:'widget-1'},{id:'none'},{id:'none'}])
            var jumpstartArray=['priceChart','coinInfo','recentTweets']
                    jumpstartArray.map((widget)=>{
                        refreshWidget(widget,currentCoin)
                    })
                    setReadyToRender(true)
        }
        else {
            const requestOptions = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": user.token,
                },
              };
            try{
                const widget = await fetch(`${domain}/widget/get/${user.id}`,requestOptions)
                // const widget = await fetch(`${domain}/widget/get/629e106ca089396becd137a2`,requestOptions)
                const data = await widget.json()
                var tempData=[]
                if (data){
                    setWidgetSetup(data.data.widget)
                    tempData=data.data.widget.map(a=>a.id)
                    
                }else {
                    setWidgetSetup([{id:'none'},{id:'none'},{id:'none'}])
                    tempData=[{id:'none'},{id:'none'},{id:'none'}]
                }
                    setActiveWidget(tempData)
                    var jumpstartArray=['priceChart','coinInfo','recentTweets'].concat(tempData)
                    jumpstartArray.map((widget)=>{
                        refreshWidget(widget,currentCoin)
                    })
                    setReadyToRender(true)
                    return tempData


            }catch (err) {
                setWidgetSetup([{id:'none'},{id:'widget-1'},{id:'none'}])
                var jumpstartArray=['priceChart','coinInfo','recentTweets'].concat(['none','none','none'])
                    jumpstartArray.map((widget)=>{
                        refreshWidget(widget,currentCoin)
                    })
                    setReadyToRender(true)
                // handleLogOut();
                // history("/login");
              }   

            }
        }

    function updateActiveWidget(){
        var tempArray=widgetSetup.map(a=>a.id)
        setActiveWidget(tempArray)

    }

    function setModal(command,location){
        setSelectedLocation(location)
        setChooseWidgetModal(command)
    }
    async function deleteWidget(location){
        var tempArray = widgetSetup;
        tempArray[location].id= "none"
        try{
            const fetch = await updateWidgetSetup(tempArray)
            setWidgetSetup(tempArray)
            updateActiveWidget()
            setModal(false,null)
        }catch(err){
            setModal(false,null)
            return 
        }
    }
    const widgetTypeLibrary={
        'priceChart':'candlestick-relative',
        'coinInfo':'coin-general-information',
        'recentTweets':'recent-tweet',
        'widget-1':'tweet-volume-sentiment',
        'widget-3':'tweet-trending-coins',
        'widget-4':'tweet-trade-correlation',
        'widget-5':'coin-sentiment-comparison',
        'widget-6':'twitter-fear-greed',
    }
    const coinTickerLibrary={
        'Bitcoin':'BTC',
        'Ethereum':'ETH',
        'Binance':'BNB',
        'Ripple':'XRP',
        'Cardano':'ADA',
        'Solana':'SOL',
        'Dogecoin':'DOGE',
    }

    async function refreshWidget(widgetType,coin){
        if (coin==null){ 
            console.log('undf')
            coin='Bitcoin'
        }
        try{
            console.log('coin:',coin)
            const fetchAPI= await fetch(`${domain_amar}/${widgetTypeLibrary[widgetType]}?relative_time=1d&ticker=${coinTickerLibrary[coin]}`)
            const fetchResult = await fetchAPI.json();
            // console.log(fetchResult)
            if (fetchResult){
                switch(widgetType){
                    case 'priceChart':
                        var tempvar=[]
                        fetchResult.payload.map((singleItem)=>{
                            tempvar.push({
                                time:Date.parse(singleItem.time)/1000,
                                open:singleItem.open_price,
                                close:singleItem.close_price,
                                high:singleItem.high_price,
                                low:singleItem.low_price,
                            })
                        })
                        setWIdgetPrice_data(tempvar.slice(1,tempvar.length-1))
                        break
                    case 'coinInfo':
                        setWidgetCoinInfo_data(fetchResult.payload)
                        break
                    case 'recentTweets':
                        setWidgetTweets_data(recentTweetData)
                        break
                    case 'widget-1':
                        var tempvar=[]
                        fetchResult.payload.map((singleItem)=>{
                            tempvar.push({
                                time:Date.parse(singleItem.time)/1000,
                                value:singleItem.tweet_volume,
                                color: singleItem.tweet_sentiment.polarity ==='negative'?'#E35B5B':'#0E8D5A'
                            })
                        })
                        setWidget1_data(tempvar)
                        break
                    case 'widget-3':
                        setWidget3_data(fetchResult.payload)
                        break
                    case 'widget-4':
                        var tempvar=[]
                        fetchResult.payload.map((singleItem)=>{
                            tempvar.push({
                                time:Date.parse(singleItem.time)/1000,
                                tweet_volume_percentage:singleItem.tweet_volume_percentage,
                                trade_volume_percentage:singleItem.trade_volume_percentage
                            })
                        })
                        setWidget4_data(tempvar)
                        break
                    case 'widget-5':
                        const sortedArray=fetchResult.payload.sort((a,b)=>b.tweet_sentiment-a.tweet_sentiment)
                        setWidget5_data(sortedArray)
                        break
                    case 'widget-6':
                        setWidget6_data(fetchResult.payload)
                        break
                    default:
                        return <></>
                }
            }
        }catch(err){
            return 0
        }
    }

    function getCurrentCoin(){
        return activeCoin
    }
    function setCurrentCoin(choice){
        setActiveCoin(choice)
        const jumpstart=['priceChart','coinInfo','recentTweets'].concat(activeWidget)
        jumpstart.map((widget,index)=>{
            if(!widgetDoesNotUpdateOnChangeCoin.includes(widget)){
                refreshWidget(widget,choice) 
            }
    })

    }

    async function sentimentTest(text){
        const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": user.token,
            },
            body: JSON.stringify({text:text})
          }
        try{
            const req = await fetch(`${domain_amar}/twitter-sentiment-test`,requestOptions)
            const reqjson = await req.json()
            return reqjson.payload

        }catch{
            return 0
        }
    }

   
    const value ={
        widgetSetup,
        chooseWidgetModal,
        activeWidget,
        setModal,
        submitAddWidget,
        deleteWidget,
        getCurrentCoin,
        setCurrentCoin,
        sentimentTest,
        setActiveCoin,
        refreshWidget,
        
        widget1_data,
        widget3_data,
        widget4_data,
        widget5_data,
        widget6_data,
        widgetPrice_data,
        widgetCoinInfo_data,
        widgetTweets_data,
        readyTorender
    }

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )

}