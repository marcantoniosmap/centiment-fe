import DashboardCardEmpty from "./DashboardCardEmpty"
import DashboardCardFearAndGreed from "./DashboardCardFearAndGreed"
import DashboardCardHeader from "./DashboardCardHeader"
import DashboardCardSentimentComparison from "./DashboardCardSentimentComparison"
import DashboardCardSentimentTest from "./DashboardCardSentimentTest"
import DashboardCardTrendingCoin from "./DashboardCardTrendingCoin"
import DashboardCardTTVolume from "./DashboardCardTTvolume"
import DashboardCardTweetVolumeSentiment from "./DashboardCardTweetVolumeSentiment"
import widgetLibrary from "../widgetLibrary"
import { useEffect, useState } from "react"

export default function DashboardCardWidget({singleItem,index}){

    const [refreshTrigger,setRefreshTrigger]=useState(0)

    function refreshTriggerfunc(){
        // console.log(Math.random()))
        setRefreshTrigger(Math.random())
    }
    console.log(refreshTrigger)

    useEffect(()=>{
        console.log('diluar')
    },[refreshTrigger])

    function renderSwitch(param,loc,rt){
        switch(param){
            case 'widget-1':
                return <DashboardCardTweetVolumeSentiment refreshTrigger={refreshTrigger} data={[]} loc={loc}/>
            case 'widget-2':
                return <DashboardCardSentimentTest refreshTrigger={rt} loc={loc}/>
            case 'widget-3':
                return <DashboardCardTrendingCoin refreshTrigger={rt} loc={loc}/>
            case 'widget-4':
                return <DashboardCardTTVolume refreshTrigger={rt} loc={loc}/>
            case 'widget-5':
                return <DashboardCardSentimentComparison refreshTrigger={rt} loc={loc}/>
            case 'widget-6':
                return <DashboardCardFearAndGreed refreshTrigger={rt} loc={loc}/>
            case 'none':
                return <DashboardCardEmpty loc={loc}/>
            default:
                return <></>
        }
    }
    return(
        <div className="dashboardCard d-flex flex-column">
             {singleItem.id!=='none' && 
                <DashboardCardHeader 
                    loc={index} 
                    chartId={singleItem.id} 
                    chartTitle={widgetLibrary[singleItem.id].title}
                    setRefreshTrigger={refreshTriggerfunc}
                    
                    />}
            {renderSwitch(singleItem.id,index,refreshTrigger)}

        </div>
    )

}

