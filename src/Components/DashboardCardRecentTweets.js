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
    function timeSince(date) {
        var dateUse = new Date(date)

        var seconds = Math.floor((new Date() - dateUse) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
      }
            
    return(
        <>
        {
            widgetTweets_data.length===0 ? <DashboardCardLoading/> :
        
        <div className="scrollWrapper p-2 pt-3">
        {widgetTweets_data.map((singleItem,index)=>(
            <div className="recentTweetWrapper" key={index}>
                <a target='_blank' href={`https://twitter.com/${singleItem.username}/status/${singleItem.tweet_id}`}>
                <div className="d-flex justify-content-between">
                    <div className="leftSide d-flex justify-content-start">
                        <div className="">
                                <img className='tweeterAvatar'src={`https://unavatar.io/twitter/${singleItem.username}`}  alt={`@${singleItem.username} profile pic`}/>
                        </div>
                        <div style={{paddingLeft:'0.5rem'}}>
                            <p className="m-0 twitterUsername">@{singleItem.username}</p>
                            <p className="m-0 twitterTime">{timeSince(singleItem.time)}</p>
                        </div>

                        
                    </div>

                    <div className="rightSide">
                        <div className="twitterScore d-flex justify-content-center align-items-center" style={{backgroundColor:sentimentColor(singleItem.sentiment)}}>{parseInt(singleItem.sentiment)}</div>
                        
                    </div>

                </div>
                <p className="pt-2 pb-3 m-0 tweetMessage">{singleItem.tweet}</p>
                </a>
            </div>
        ))}
        </div>
        }
        </>
    )
}