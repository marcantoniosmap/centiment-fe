import { useState } from "react"
import { useDashboard } from "../DashboardContext"

export default function DashboardCardSentimentComparison(){

    const {getWidgetData}= useDashboard()

    const [data,setData]= useState(getWidgetData('widget-5'))
    return(
        <div className="h-100 d-flex justify-content-between flex-column pb-2 pt-3">
           {data.map((singleItem,index)=>(
               <div className="row w-100">
                   <div className="sentimentComparisonTicker col-lg-2">{singleItem.ticker}</div>
                   <div className="col-lg-10 p-0">
                       <div className="sentimentComparisonBackground"><div className="sentimentComparisonItem" style={{width:singleItem.percentage+'%'}}>-</div></div>
                   </div>
               </div>
           ))}
            
        </div>
    )
}