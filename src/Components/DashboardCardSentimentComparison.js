import { useState } from "react"
import { useDashboard } from "../DashboardContext"
import DashboardCardLoading from "./DashboardCardLoading"

export default function DashboardCardSentimentComparison(){

    const {widget5_data}= useDashboard()

    
    return(
        <>
        {
            widget5_data.length===0 ? <DashboardCardLoading/>:
        
        <div className="h-100 d-flex justify-content-between flex-column pb-2 pt-3">
           {widget5_data.map((singleItem,index)=>(
               <div className="row w-100" key={index}>
                   <div className="sentimentComparisonTicker col-2">{singleItem.ticker}</div>
                   <div className="col-10 p-0">
                       <div className="sentimentComparisonBackground"><div className="sentimentComparisonItem" style={{width:parseInt(singleItem.tweet_sentiment)+'%'}}>-</div></div>
                   </div>
               </div>
           ))}
            
        </div>
    }
        </>
    )
}