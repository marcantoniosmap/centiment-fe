import DashboardCardHeader from "../Components/DashboardCardHeader"
import DashboardCardEmpty from "../Components/DashboardCardEmpty"
import DashboardCardPriceChart from "../Components/DashboardCardPriceChart"
import priceChartData from '../priceChartData'
import DashboardCardSentimentTest from "../Components/DashboardCardSentimentTest"
import DashboardCardTrendingCoin from "../Components/DashboardCardTrendingCoin"
import DashboardCardTTVolume from "../Components/DashboardCardTTvolume"
import DashboardCardSentimentComparison from "../Components/DashboardCardSentimentCompare"
import DashboardCardFearAndGreed from "../Components/DashboardCardFearAndGreed"
import TweetEmbed from "react-tweet-embed"
export default function DashboardView(props){

    const dataTT = [{ twitter_volume: 0, trade_volume:2,  time: 1642425322 }, { twitter_volume: 8, trade_volume:3, time: 1642511722 }, { twitter_volume: 10,trade_volume:2, time: 1642598122 }, { twitter_volume: 20, trade_volume:24, time: 1642684522 }, { twitter_volume: 3, trade_volume:9, time: 1642770922 }, { twitter_volume: 43,trade_volume:54,  time: 1642857322 }, { twitter_volume: 41, trade_volume:51, time: 1642943722 }, { twitter_volume: 43,trade_volume:40, time: 1643030122 }, { twitter_volume: 56,trade_volume:50, time: 1643116522 }, { twitter_volume: 46, trade_volume:44, time: 1643202922 }];
    const dataCoinSentimentComparison=[
        {
            ticker:'BTC',
            percentage:20
        },
        {
            ticker:'ETH',
            percentage:70
        },
        {
            ticker:'BNB',
            percentage:30
        },
        {
            ticker:'XRP',
            percentage:80
        },
        {
            ticker:'ADA',
            percentage:50
        },
        {
            ticker:'LUNA',
            percentage:30
        },
        {
            ticker:'SOL',
            percentage:40
        },
    ]
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
                    
                    <div className="col-lg-4 dashboardCardChartTop">
                        <div className="dashboardCard d-flex flex-column">
                            <DashboardCardHeader chartTitle={'Recent Tweets'}/>
                                <div className="dashboardCardChart">
                                    <TweetEmbed id="1528007230884179970" placeholder="loading"/>
                                </div>

                        </div>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardEmpty/></div></div>
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Twitter Sentiment Test'}/><DashboardCardSentimentTest/></div></div>
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Trending Coin based on Tweets'}/><DashboardCardTrendingCoin/></div></div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Tweet and Trending Volume'}/><div className="dashboardCardChart"><DashboardCardTTVolume data={dataTT}/></div></div></div>
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Coin Sentiment Comparison'}/><div className="dashboardCardChart"><DashboardCardSentimentComparison data={dataCoinSentimentComparison}/></div></div></div>
                    <div className="col-lg-4"><div className="dashboardCard d-flex flex-column dashboardCardChartWidget"><DashboardCardHeader chartTitle={'Twitter Fear and Greed Index'}/><div className="dashboardCardChart"><DashboardCardFearAndGreed data={dataTT}/></div></div></div>
                </div>

            </div>
        </div>
    )
} 