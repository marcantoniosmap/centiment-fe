import { useDashboard } from "../DashboardContext"
import DashboardCardLoading from "./DashboardCardLoading"

export default function DashboardCardTrendingCoin(){

    const {widget3_data}= useDashboard()

    const detailsPosition=[
        {
            pos:2,
            height:'75px',
            backgroundColor:'#D1C51F',
        },
        {
            pos:1,
            height:'100px',
            backgroundColor:'#0E8D5A',
        },
        {
            pos:3,
            height:'60px',
            coinName:'binance',
            backgroundColor:'#E35B5B',
        },
    ]
    return(
        <>
        {
            !widget3_data ?  <DashboardCardLoading/> : 
        
        <div className="w-100 h-100 pt-4">
            <div className="d-flex h-100 justify-content-center">
                <div className="row w-100 align-items-end">
                    {
                        widget3_data && detailsPosition.map((singleitem,index)=>(
                            <div className="col-4 px-0" key={index}>
                                <div className="floatingText d-flex justify-content-center text-center">
                                    <div className="pb-2">
                                        <img className="mb-2"src={`../img/icon/${widget3_data[singleitem.pos-1].coinName}.png`} alt={widget3_data[singleitem.pos-1].coinName}/>
                                        <p className="mb-0  trendingcoinTopText">{widget3_data[singleitem.pos-1].percentage} higher than usual</p>
                                        <p className="trendingcoinBottomText mb-1">{widget3_data[singleitem.pos-1].numoftweets} tweets today</p>
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
}
        </>
    )
}