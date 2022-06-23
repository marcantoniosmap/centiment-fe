import React, {useContext, useState, useEffect} from "react"
import fakeCoinInfoData from "./fakeCoinInfoData"
import { useAuth } from "./AuthContext"
import priceChartData from "./priceChartData"

const DashboardContext = React.createContext()

export function useDashboard(){
    return useContext(DashboardContext)
}

export function DashboardProvider({children}){

    const dataTT = [{ twitter_volume: 0, trade_volume:2,  time: 1642425322 }, { twitter_volume: 8, trade_volume:3, time: 1642511722 }, { twitter_volume: 10,trade_volume:2, time: 1642598122 }, { twitter_volume: 20, trade_volume:24, time: 1642684522 }, { twitter_volume: 3, trade_volume:9, time: 1642770922 }, { twitter_volume: 43,trade_volume:54,  time: 1642857322 }, { twitter_volume: 41, trade_volume:51, time: 1642943722 }, { twitter_volume: 43,trade_volume:40, time: 1643030122 }, { twitter_volume: 56,trade_volume:50, time: 1643116522 }, { twitter_volume: 46, trade_volume:44, time: 1643202922 }];
    const dataVolumeSentiment  = [{ value: 1, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922, color: '#E35B5B' }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722, color: '#E35B5B' }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922, color: '#E35B5B' }];

    const widgetDoesNotUpdateOnChangeCoin=['widget-2','widget-3','widget-5']




    // const [isIndo,setIsIndo] =useState(true)
    const [widgetSetup,setWidgetSetup]=useState([])
    const [chooseWidgetModal,setChooseWidgetModal]=useState(false)
    const [selectedLocation,setSelectedLocation]=useState(null)
    const [activeWidget,setActiveWidget]=useState([])
    const [activeCoin,setActiveCoin]=useState()

    const [widget1_data,setWidget1_data]=useState(dataVolumeSentiment)
    const [widget3_data,setWidget3_data]=useState([])
    const [widget4_data,setWidget4_data]=useState([])
    const [widget5_data,setWidget5_data]=useState([])
    const [widget6_data,setWidget6_data]=useState([])
    const [widgetPrice_data,setWIdgetPrice_data]=useState([])
    const [widgetCoinInfo_data,setWidgetCoinInfo_data]=useState({})
    const [widgetTweets_data,setWidgetTweets_data]=useState([])
    const [readyTorender,setReadyToRender]=useState(false)

    const {getUser,user,isAuthenticated} = useAuth()


    const domain = 'https://rsvp.marcantonioapp.com'
    const currentCoin = window.location.pathname.split('/')[2]


    useEffect(()=>{
        setActiveCoin(currentCoin)
        getWidgetSetup(currentCoin)
        updateActiveWidget()
        return () => {
            setActiveCoin('')
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
            console.log('Not Authenticated')
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

    async function refreshWidget(widgetType,coin){
        try{
            const fetchAPI= await fetch(`${domain}/getwidget/${widgetType}/${coin}`)
            const fetchResult = await fetchAPI.json();
            console.log(fetchResult)
            if (fetchResult){
                switch(widgetType){
                    case 'priceChart':
                        setWIdgetPrice_data(fetchResult)
                        break
                    case 'coinInfo':
                        setWidgetCoinInfo_data(fetchResult)
                        break
                    case 'recentTweets':
                        setWidgetTweets_data(fetchResult)
                        break
                    case 'widget-1':
                        setWidget1_data(fetchResult)
                        break
                    case 'widget-3':
                        setWidget3_data(fetchResult)
                        break
                    case 'widget-4':
                        setWidget4_data(fetchResult)
                        break
                    case 'widget-5':
                        setWidget5_data(fetchResult)
                        break
                    case 'widget-6':
                        setWidget6_data(fetchResult)
                        break
                    default:
                        return <></>
                }
            }
        }catch(err){
            console.log(err)
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
        getCurrentCoin,
        setCurrentCoin,
        // activeCoinInfo,
        sentimentTest,
        setActiveCoin,
        // setActiveCoinInfo,

        widget1_data,
        widget3_data,
        widget4_data,
        widget5_data,
        widget6_data,
        widgetPrice_data,
        widgetCoinInfo_data,
        widgetTweets_data,
        refreshWidget,
        readyTorender
    }

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )

}