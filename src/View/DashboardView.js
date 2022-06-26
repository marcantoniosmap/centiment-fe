import DashboardCardHeader from "../Components/DashboardCardHeader"
import DashboardCardPriceChart from "../Components/DashboardCardPriceChart"
import priceChartData from '../priceChartData'
import { useDashboard } from "../DashboardContext"
import ModalChooseWidget from "../Components/ModalChooseWidget"
import DashboardCardRecentTweets from "../Components/DashboardCardRecentTweets"
import DashboardCardCoinInformation from "../Components/DashboardCardCoinInformation"
import DashboardCard from "../Components/DashboardCard"
import DashboardCardWidget from "../Components/DashboardCardWidget"
import { useEffect, useState } from "react"
import fakeCoinInfoData from "../fakeCoinInfoData"
import ModalLogin from "../Components/ModalLogin"
// import TweetEmbed from "react-tweet-embed"
export default function DashboardView(props){


    const currentCoin = window.location.pathname.split('/')[2]
    const [render,setRender]=useState(false)
    const {widgetSetup,readyTorender}=useDashboard()
    
    useEffect(()=>{
        // setActiveCoin(currentCoin)
        setRender(true)
    },[])


    return(
        <div className="backgroundDefault ">
            {readyTorender &&
            <div className="container-fluid pt-2 pb-4 px-3 h-100 w-100" style={{overflow:'hidden'}}>
                <div className="row">
                    <div className="col-lg-8 mb-lg-0 mb-3 dashboardCardChartTop">
                        <div className="dashboardCard d-flex flex-column">
                            <DashboardCardHeader chartTitle={'Price Chart'} chartId={'priceChart'}/>
                            <div id="dashboardCardPriceChart" className="dashboardCardChart">
                                <DashboardCardPriceChart data={priceChartData}/>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-lg-4 dashboardCardChartTop">
                        <div className="d-flex justify-content-start flex-column h-100">
                            <div className="col-12 height-responsive-50 pb-4">
                                <DashboardCard>
                                    <DashboardCardHeader chartTitle={'Coin Option'} chartId={'coinInfo'}/>
                                    <div className="dashboardCardChart"><DashboardCardCoinInformation/></div>
                                </DashboardCard>
                            </div>
                            <div className="col-12 height-responsive-50">
                                <div className="dashboardCard h-100 d-flex flex-column">
                                    <DashboardCardHeader chartTitle={'Recent Tweets'} chartId={'recentTweets'}/>
                                    <div className="dashboardCardChart"><DashboardCardRecentTweets/></div>
                                </div>
                            </div>
                            </div>
                    </div>

                </div>

                <div className="row mt-4">

                    {
                        widgetSetup && widgetSetup.map((singleItem,index)=>(
                            <div className="col-lg-4 col-12 mb-3 mb-lg-0" key={index}>
                                <DashboardCardWidget singleItem={singleItem} index={index} />
                            </div>
                        ))
                    }
                  
                </div>

            </div>
            }
            <ModalChooseWidget/>
        </div>
    )
} 