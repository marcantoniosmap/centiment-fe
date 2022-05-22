import { useState } from "react"

export default function DashboardCardTrendingCoin(){


    const [detailsPosition,setDetailsPositioin]=useState([
        {
            pos:2,
            height:'100px',
            coinName:'bitcoin',
            backgroundColor:'#D1C51F',
            coin_logo:'',
            percentage:'20%',
            numoftweets:2083
        },
        {
            pos:1,
            height:'125px',
            coinName:'ethereum',
            backgroundColor:'#0E8D5A',
            coin_logo:'',
            percentage:'20%',
            numoftweets:2083
        },
        {
            pos:3,
            height:'75px',
            coinName:'binance',
            backgroundColor:'#E35B5B',
            coin_logo:'',
            percentage:'20%',
            numoftweets:2083
        },
    ])
    console.log(detailsPosition)
    return(
        <div className="w-100 pt-4">
            <div className="d-flex h-100 justify-content-center">
                <div className="row w-100 align-items-end">
                    {
                        detailsPosition.map((singleitem,index)=>(
                            <div className="col-4 px-0">
                                <div className="floatingText d-flex justify-content-center text-center">
                                    <div>
                                        <img className="mb-2"src={`./img/icon/${singleitem.coinName}.png`}/>
                                        <p className="mb-0  trendingcoinTopText">{singleitem.percentage} higher than usual</p>
                                        <p className="trendingcoinBottomText mb-1">{singleitem.numoftweets} tweets today</p>
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