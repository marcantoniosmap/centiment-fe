import { useState } from "react"
import { useDashboard } from "../DashboardContext"
import DashboardCardLoading from "./DashboardCardLoading";

export default function DashboardCardRecentTweets(){

    const {widgetTweets_data}=useDashboard()


    function sentimentColor(score){
        if (score>=80) return '#0E8D5A'
        if (score<80 && score >=60 ) return '#71AA3C'
        if (score<60 && score >=40) return '#D1C51F'
        if (score<40 && score >=20) return '#DC8444'
        else return '#E35B5B'
    }
            
    return(
        <>
        {
            widgetTweets_data.length===0 ? <DashboardCardLoading/> :
        
        <div className="scrollWrapper p-2 pt-3">
        {widgetTweets_data.map((singleItem,index)=>(
            <div className="recentTweetWrapper" key={index}>
                <a target='_blank' href={`https://twitter.com/${singleItem.twitterHandle}/status/${singleItem.id}`}>
                <div className="d-flex justify-content-between">
                    <div className="leftSide d-flex justify-content-start">
                        <div className="">
                            {/* <div className="twitterUserPic d-flex justify-content-center align-items-center" style={{backgroundColor:randomColor()}}>{singleItem.twitterHandle[0].toUpperCase()}</div> */}
                                <img className='tweeterAvatar'src={`https://unavatar.io/twitter/${singleItem.twitterHandle}`}  alt={`@${singleItem.twitterHandle} profile pic`}/>
                        </div>
                        <div style={{paddingLeft:'0.5rem'}}>
                            <p className="m-0 twitterUsername">@{singleItem.twitterHandle}</p>
                            <p className="m-0 twitterTime">{singleItem.time}</p>
                        </div>

                        
                    </div>

                    <div className="rightSide">
                        <div className="twitterScore d-flex justify-content-center align-items-center" style={{backgroundColor:sentimentColor(singleItem.score)}}>{singleItem.score}</div>
                        
                    </div>

                </div>
                <p className="pt-2 pb-3 m-0 tweetMessage">{singleItem.tweetContentText}</p>
                </a>
            </div>
        ))}
        </div>
        }
        </>
    )
}