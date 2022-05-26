import DashboardCardHeader from "../Components/DashboardCardHeader"
import DashboardCardEmpty from "../Components/DashboardCardEmpty"
import DashboardCardPriceChart from "../Components/DashboardCardPriceChart"
import priceChartData from '../priceChartData'
import widgetLibrary from "../widgetLibrary"
import DashboardCardSentimentTest from "../Components/DashboardCardSentimentTest"
import DashboardCardTrendingCoin from "../Components/DashboardCardTrendingCoin"
import DashboardCardTTVolume from "../Components/DashboardCardTTvolume"
import DashboardCardSentimentComparison from "../Components/DashboardCardSentimentCompare"
import DashboardCardFearAndGreed from "../Components/DashboardCardFearAndGreed"
import DashboardCardTweetVolumeSentiment from "../Components/DashboardCardTweetVolumeSentiment"
import { useDashboard } from "../DashboardContext"
import ModalChooseWidget from "../Components/ModalChooseWidget"
import DashboardCardRecentTweets from "../Components/DashboardCardRecentTweets"
import DashboardCardCoinInformation from "../Components/DashboardCardCoinInformation"
// import TweetEmbed from "react-tweet-embed"
export default function DashboardView(props){


    const {widgetSetup,chooseWidgetModal,setModal}=useDashboard()
    // console.log(chooseWidgetModal)

    function renderSwitch(param,loc){
        switch(param){
            case 'widget-1':
                return <DashboardCardTweetVolumeSentiment data={[]} loc={loc}/>
            case 'widget-2':
                return <DashboardCardSentimentTest loc={loc}/>
            case 'widget-3':
                return <DashboardCardTrendingCoin loc={loc}/>
            case 'widget-4':
                return <DashboardCardTTVolume loc={loc}/>
            case 'widget-5':
                return <DashboardCardSentimentComparison loc={loc}/>
            case 'widget-6':
                return <DashboardCardFearAndGreed loc={loc}/>
            case 'none':
                return <DashboardCardEmpty loc={loc}/>
            default:
                return <></>
        }
    }


    return(
        <div className="backgroundDefault">
            <div className="container-fluid py-2 px-3 h-100 w-100" style={{overflow:'hidden'}}>
                <div className="row">
                    <div className="col-lg-8 dashboardCardChartTop">
                        <div className="dashboardCard d-flex flex-column">
                            <DashboardCardHeader chartTitle={'Price Chart'}/>
                            <div className="dashboardCardChart">
                                <DashboardCardPriceChart data={priceChartData}/>
                            </div>
                        </div>

                    </div>
                    
                    {/* <div className="col-lg-4 dashboardCardChartTop d-flex justify-content-between flex-column align-items-start">
                        <div className="dashboardCard d-flex flex-column">
                            <DashboardCardHeader chartTitle={'Recent Tweets'}/>
                                <div className="dashboardCardChart">
                                </div>
                        </div>
                        <div className="dashboardCard d-flex flex-column">
                            <DashboardCardHeader chartTitle={'Recent Tweets'}/>
                                <div className="dashboardCardChart">
                                </div>
                        </div>
                    </div> */}

                    <div className="col-lg-4 dashboardCardChartTop">
                        <div className="d-flex justify-content-start flex-column h-100">
                            <div className="col-12 h-50 pb-4">
                                <div className="dashboardCard">
                                    <DashboardCardHeader chartTitle={'Coin Option'}/>
                                    <div className="dashboardCardChart"><DashboardCardCoinInformation/></div>
                                </div>
                            </div>
                            <div className="col-12 h-50">
                                <div className="dashboardCard h-100 d-flex flex-column">
                                    <DashboardCardHeader chartTitle={'Recent Tweets'}/>
                                    <div className="dashboardCardChart"><DashboardCardRecentTweets/></div>
                                </div>
                            </div>
                            </div>
                    </div>

                </div>

                <div className="row mt-4">

                    {
                        widgetSetup.map((singleItem,index)=>(
                            <div className="col-lg-4" key={index}>
                                <div className="dashboardCard d-flex flex-column dashboardCardChartWidget">
                                    {singleItem.id!=='none' && <DashboardCardHeader loc={index} chartTitle={widgetLibrary[singleItem.id].title}/>}
                                    {renderSwitch(singleItem.id,index)}
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardEmpty/></div></div> */}
                    {/* <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Tweet Volume and Sentiment'}/><DashboardCardTweetVolumeSentiment data={dataVolumeSentiment}/></div></div>
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Twitter Sentiment Test'}/><DashboardCardSentimentTest/></div></div>
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Trending Coin based on Tweets'}/><DashboardCardTrendingCoin/></div></div> */}
                </div>

                {/* <div className="row mt-4">
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Tweet & Trade Correlation'}/><div className="dashboardCardChart"><DashboardCardTTVolume data={dataTT}/></div></div></div>
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Coin Sentiment Comparison'}/><div className="dashboardCardChart"><DashboardCardSentimentComparison data={dataCoinSentimentComparison}/></div></div></div>
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Twitter Fear and Greed Index'}/><div className="dashboardCardChart"><DashboardCardFearAndGreed data={dataTT}/></div></div></div>
                </div> */}

            </div>

            <ModalChooseWidget/>
        </div>
    )
} 