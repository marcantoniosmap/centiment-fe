import { useState } from "react"
import { useDashboard } from "../DashboardContext"
import ModalChooseCoin from "./ModalChooseCoin"
import TopArrow from "./TopArrow"

export default function DashboardCardCoinInformation(){


    const isNegative=false
    const [modalOpen,setModalOpen]=useState(false)
    const {getCoinDetail, activeCoinInfo}=useDashboard()


    return(
        <>
            <div className="px-1">
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center pt-3">
                    <img className="pe-3" src={`../img/icon/${activeCoinInfo.id}.png`}/>
                    <span className="pe-1  infoCoinName">{activeCoinInfo.id}</span>
                    <span className="infoTicker m-0">{activeCoinInfo.ticker}</span>
                </div>
                <div className="align-items-center d-flex">
                    <button className="mt-3 btn btn-outline-primary btn-sm" onClick={()=>setModalOpen(true)}>Change Coin</button>
                </div>

            </div>
            <div className="row pt-3">
                <div className="col-lg-7 coinInfoBorder">
                    <div className="pb-2">
                        <span className="labelSmall">Price</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="infoNumbers">{activeCoinInfo.price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}</span>
                            <span className={`indicator ${activeCoinInfo.priceDiff>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={activeCoinInfo.priceDiff>0}/> {Math.abs(activeCoinInfo.priceDiff)}%</span>
                        </div>
                    </div>

                    <div className="pb-2">
                        <span className="labelSmall">Daily Volume</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="infoNumbers">{activeCoinInfo.volume.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}</span>
                            <span className={`indicator ${activeCoinInfo.volumeDiff>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={activeCoinInfo.volumeDiff>0}/> {Math.abs(activeCoinInfo.volumeDiff)}%</span>
                        </div>
                    </div>
                    
                    </div>
                <div className="col-lg-5">
                <div className="pb-2">
                        <span className="labelSmall">Sentiment Score</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="infoNumbers">{activeCoinInfo.sentiment}</span>
                            <span className={`indicator ${activeCoinInfo.sentimentDiff>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={activeCoinInfo.sentimentDiff>0}/> {Math.abs(activeCoinInfo.sentimentDiff)}%</span>
                        </div>
                    </div>

                    <div className="pb-2">
                        <span className="labelSmall">Tweet Count</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="infoNumbers">{activeCoinInfo.tweetCount}</span>
                            <span className={`indicator ${activeCoinInfo.tweetCountDiff>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={activeCoinInfo.tweetCountDiff>0}/> {Math.abs(activeCoinInfo.tweetCountDiff)}%</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <ModalChooseCoin 
                show={modalOpen}
                handleCloseModal={()=>setModalOpen(false)}
                />
        </>
    )
}

