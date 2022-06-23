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

    function renderSwitch(param,loc){
        switch(param){
            case 'widget-1':
                return <DashboardCardTweetVolumeSentiment data={[]} loc={loc}/>
            case 'widget-2':
                return <DashboardCardSentimentTest  loc={loc}/>
            case 'widget-3':
                return <DashboardCardTrendingCoin  loc={loc}/>
            case 'widget-4':
                return <DashboardCardTTVolume loc={loc}/>
            case 'widget-5':
                return <DashboardCardSentimentComparison loc={loc}/>
            case 'widget-6':
                return <DashboardCardFearAndGreed loc={loc}/>
            case 'none':
                return <DashboardCardEmpty loc={loc}/>
            default:
                return <></>
        }
    }
    return(
        <div className="dashboardCard dashboardCardWidget d-flex flex-column ">
             {singleItem.id!=='none' && 
                <DashboardCardHeader 
                    loc={index} 
                    chartId={singleItem.id} 
                    chartTitle={widgetLibrary[singleItem.id].title}
                    
                    
                    />}
            {renderSwitch(singleItem.id,index)}

        </div>
    )

}

