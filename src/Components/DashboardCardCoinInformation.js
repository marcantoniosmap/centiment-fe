import { useDebugValue, useEffect, useState } from "react"
import { useAuth } from "../AuthContext"
import { useDashboard } from "../DashboardContext"
import DashboardCardLoading from "./DashboardCardLoading"
import ModalChooseCoin from "./ModalChooseCoin"
import TopArrow from "./TopArrow"

export default function DashboardCardCoinInformation(){

    const [modalOpen,setModalOpen]=useState(false)
    const {widgetCoinInfo_data}=useDashboard()
    const {setLoginModalFunc,isAuthenticated}= useAuth()

    const ticker_library={
        'ADA':'Cardano',
        'ETH':'Ethereum',
        'SOL':'Solana',
        'BTC':'Bitcoin',
        'BNB':'Binance',
        'XRP':'Ripple',
        'DOGE':'Dogecoin',
    }

    function handleChangeCoin(){
        if (isAuthenticated){
            setModalOpen(true)
        }
        else{
            setLoginModalFunc(true)
        }
    }
    useEffect(()=>{
    },[])



    return(
        <>
        {
            widgetCoinInfo_data.length===0 ?<DashboardCardLoading/>:
        
            <div className="px-1">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center pt-3">
                        <img className="pe-3" src={`../img/icon/${ticker_library[widgetCoinInfo_data.ticker]}.png`}/>
                        <span className="pe-1  infoCoinName">{ticker_library[widgetCoinInfo_data.ticker]}</span>
                        <span className="infoTicker m-0">{widgetCoinInfo_data.ticker}</span>
                    </div>
                    <div className="align-items-center d-flex">
                        <button className="mt-3 btn btn-outline-primary btn-sm" onClick={handleChangeCoin}>Change Coin</button>
                    </div>

                </div>
                <div className="row pt-3">
                    <div className="col-lg-7 col-12 coinInfoBorder">
                        <div className="pb-2">
                            <span className="labelSmall">Price</span>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="infoNumbers">{widgetCoinInfo_data.coin_price.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        })}</span>
                                <span className={`indicator ${widgetCoinInfo_data.coin_price_percentage>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={widgetCoinInfo_data.coin_price_percentage>0}/> {Math.abs(widgetCoinInfo_data.coin_price_percentage)}%</span>
                            </div>
                        </div>

                        <div className="pb-2">
                            <span className="labelSmall">Daily Volume</span>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="infoNumbers">{widgetCoinInfo_data.coin_volume.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        })}</span>
                                <span className={`indicator ${widgetCoinInfo_data.coin_volume_percentage>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={widgetCoinInfo_data.coin_volume_percentage>0}/> {Math.abs(widgetCoinInfo_data.coin_volume_percentage)}%</span>
                            </div>
                        </div>
                        
                        </div>
                    <div className="col-lg-5 col-12">
                    <div className="pb-2">
                            <span className="labelSmall">Sentiment Score</span>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="infoNumbers">{widgetCoinInfo_data.tweet_sentiment}</span>
                                <span className={`indicator ${widgetCoinInfo_data.tweet_sentiment_percentage>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={widgetCoinInfo_data.tweet_sentiment_percentage>0}/> {Math.abs(widgetCoinInfo_data.tweet_sentiment_percentage)}%</span>
                            </div>
                        </div>

                        <div className="pb-2">
                            <span className="labelSmall">Tweet Count</span>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="infoNumbers">{widgetCoinInfo_data.tweet_count}</span>
                                <span className={`indicator ${widgetCoinInfo_data.tweet_count_percentage>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={widgetCoinInfo_data.tweet_count_percentage>0}/> {Math.abs(widgetCoinInfo_data.tweet_count_percentage)}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        }
            <ModalChooseCoin 
                show={modalOpen}
                handleCloseModal={()=>setModalOpen(false)}
                />
        </>
        
    )
}

