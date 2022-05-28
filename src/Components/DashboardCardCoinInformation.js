import { useState } from "react"
import { useDashboard } from "../DashboardContext"
import ModalChooseCoin from "./ModalChooseCoin"

export default function DashboardCardCoinInformation(){


    const isNegative=false
    const [modalOpen,setModalOpen]=useState(false)
    const {getCoinDetail, activeCoinInfo}=useDashboard()

    // const [activeCoinInfo,setCurrentCoin]=useState(getCoinDetail())
    // console.log(activeCoinInfo)


    // const {setChangeCoin}=useDashboard()

    return(
        <>
            <div className="px-1">

            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center pt-3">
                    <img className="pe-3" src={`./img/icon/${activeCoinInfo.id}.png`}/>
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

function TopArrow({isGreen}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="13" height="8" viewBox="0 0 13 8">
  <defs>
    <clipPath id="clip-Artboard_16">
      <rect width="13" height="8"/>
    </clipPath>
  </defs>
  <g id="Artboard_16" data-name="Artboard – 16" clipPath="url(#clip-Artboard_16)">
    <rect width="13" height="8" fill="#fff"/>
   { isGreen ?
        <path id="Path_18" data-name="Path 18" d="M1524.306,1310.517l5.18-5.18,5.425,5.18Z" transform="translate(-1523.108 -1303.927)" fill="#0e8d5a"/>:
        <path id="Path_18" data-name="Path 18" d="M1524.306,1310.517l5.18-5.18,5.425,5.18Z" transform="translate(1536.108 1311.927) rotate(-180)" fill="#E35B5B"/>
    }
  </g>
</svg>



    )
}