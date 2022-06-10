import DashboardCardHeader from "../Components/DashboardCardHeader"
import DashboardCardPriceChart from "../Components/DashboardCardPriceChart"
import priceChartData from '../priceChartData'
import { useDashboard } from "../DashboardContext"
import ModalChooseWidget from "../Components/ModalChooseWidget"
import DashboardCardRecentTweets from "../Components/DashboardCardRecentTweets"
import DashboardCardCoinInformation from "../Components/DashboardCardCoinInformation"
import DashboardCard from "../Components/DashboardCard"
import DashboardCardWidget from "../Components/DashboardCardWidget"
// import TweetEmbed from "react-tweet-embed"
export default function DashboardView(props){


    const {widgetSetup,chooseWidgetModal,setModal}=useDashboard()
    // console.log(widgetSetup)

    return(
        <div className="backgroundDefault">
            <div className="container-fluid py-2 px-3 h-100 w-100" style={{overflow:'hidden'}}>
                <div className="row">
                    <div className="col-lg-8 dashboardCardChartTop">
                        <div className="dashboardCard d-flex flex-column">
                            <DashboardCardHeader chartTitle={'Price Chart'} chartId={'priceChart'}/>
                            <div className="dashboardCardChart">
                                <DashboardCardPriceChart data={priceChartData}/>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-lg-4 dashboardCardChartTop">
                        <div className="d-flex justify-content-start flex-column h-100">
                            <div className="col-12 h-50 pb-4">
                                <DashboardCard>
                                    <DashboardCardHeader chartTitle={'Coin Option'} chartId={'coinInfo'}/>
                                    <div className="dashboardCardChart"><DashboardCardCoinInformation/></div>
                                </DashboardCard>
                            </div>
                            <div className="col-12 h-50">
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
                            <div className="col-lg-4" key={index}>
                                <DashboardCardWidget singleItem={singleItem} index={index} />
                            </div>
                        ))
                    }
                  
                </div>

            </div>

            <ModalChooseWidget/>
        </div>
    )
} 