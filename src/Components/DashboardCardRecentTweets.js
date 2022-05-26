import { useState } from "react"
import { useDashboard } from "../DashboardContext"

export default function DashboardCardRecentTweets(){

    const {getRecentTweet}=useDashboard()
    const [recentTweets,setRecentTweets]=useState(getRecentTweet)

    const colors = ['#00AA55', '#009FD4', '#B381B3', '#939393', '#E3BC00', '#D47500', '#DC2A2A'];

    function randomColor(){
        return colors[Math.floor(Math.random()*7)]
    }

    function sentimentColor(score){
        if (score>=80) return '#0E8D5A'
        if (score<80 && score >=60 ) return '#71AA3C'
        if (score<60 && score >=40) return '#D1C51F'
        if (score<40 && score >=20) return '#DC8444'
        else return '#E35B5B'
    }

    return(
        <>
        <div className="scrollWrapper p-2 pt-3">
        {recentTweets.map((singleItem,index)=>(
            <div className="recentTweetWrapper">
                <a target='_blank' href={`https://twitter.com/${singleItem.twitterHandle}/status/${singleItem.id}`}>
                <div className="d-flex justify-content-between">
                    <div className="leftSide d-flex justify-content-start">
                        <div className="">
                            {/* <div className="twitterUserPic d-flex justify-content-center align-items-center" style={{backgroundColor:randomColor()}}>{singleItem.twitterHandle[0].toUpperCase()}</div> */}
                                <img className='tweeterAvatar'src={`https://unavatar.io/twitter/${singleItem.twitterHandle}`} />
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
        </>
    )
}