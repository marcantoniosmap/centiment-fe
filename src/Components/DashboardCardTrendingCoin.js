import { useState } from "react"
import { useDashboard } from "../DashboardContext"

export default function DashboardCardTrendingCoin(){

    const {getWidgetData}= useDashboard()

    const [data,setData]=useState(getWidgetData('widget-3'))

    const [detailsPosition,setDetailsPositioin]=useState([
        {
            pos:2,
            height:'75px',
            backgroundColor:'#D1C51F',
        },
        {
            pos:1,
            height:'100px',
            coinName:'ethereum',
            backgroundColor:'#0E8D5A',
            percentage:'20%',
            numoftweets:2083
        },
        {
            pos:3,
            height:'60px',
            coinName:'binance',
            backgroundColor:'#E35B5B',
            percentage:'20%',
            numoftweets:2083
        },
    ])
    return(
        <div className="w-100 h-100 pt-4">
            <div className="d-flex h-100 justify-content-center">
                <div className="row w-100 align-items-end">
                    {
                        detailsPosition.map((singleitem,index)=>(
                            <div className="col-4 px-0" key={index}>
                                <div className="floatingText d-flex justify-content-center text-center">
                                    <div className="pb-2">
                                        <img className="mb-2"src={`./img/icon/${data[singleitem.pos-1].coinName}.png`} alt={data[singleitem.pos-1].coinName}/>
                                        <p className="mb-0  trendingcoinTopText">{data[singleitem.pos-1].percentage} higher than usual</p>
                                        <p className="trendingcoinBottomText mb-1">{data[singleitem.pos-1].numoftweets} tweets today</p>
                                    </div>
                                </div>
                                <div className="trendingCoinBox"style={{height:singleitem.height, backgroundColor:singleitem.backgroundColor}}>
                                    <div className="leaderboardText h-100 w-100 d-flex justify-content-center align-items-center">
                                        {singleitem.pos}
                                    </div>
                                </div>
                            </div>                        ))
                    }
                        
                  
                </div>

            </div>
            
        </div>
    )
}