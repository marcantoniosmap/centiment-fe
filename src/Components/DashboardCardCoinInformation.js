export default function DashboardCardCoinInformation(){

    const isNegative=false
    return(
        <>
            <div className="px-1">

            
            <div className="d-flex align-items-center pt-3">
                <img className="pe-3" src={`./img/icon/Bitcoin.png`}/>
                <span className="pe-1  infoCoinName">Bitcoin</span>
                <span className="infoTicker m-0">BTC</span>
            </div>
            <div className="row pt-3">
                <div className="col-lg-7 coinInfoBorder">
                    <div className="pb-2">
                        <span className="labelSmall">Price</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="infoNumbers">$47,323.62</span>
                            <span className={`indicator ${isNegative? 'textRed': 'textGreen'}`}><TopArrow isGreen={true}/> 0.51%</span>
                        </div>
                    </div>

                    <div className="pb-2">
                        <span className="labelSmall">Daily Volume</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="infoNumbers">$31,479,323,826</span>
                            <span className={`indicator ${isNegative? 'textRed': 'textGreen'}`}><TopArrow isGreen={true}/> 0.51%</span>
                        </div>
                    </div>
                    
                    </div>
                <div className="col-lg-5">
                <div className="pb-2">
                        <span className="labelSmall">Sentiment Score</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="infoNumbers">42</span>
                            <span className={`indicator ${isNegative? 'textRed': 'textGreen'}`}><TopArrow isGreen={true}/> 0.51%</span>
                        </div>
                    </div>

                    <div className="pb-2">
                        <span className="labelSmall">Tweet Count</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="infoNumbers">300</span>
                            <span className={`indicator ${isNegative? 'textRed': 'textGreen'}`}><TopArrow isGreen={true}/> 0.51%</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
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
  <g id="Artboard_16" data-name="Artboard – 16" clip-path="url(#clip-Artboard_16)">
    <rect width="13" height="8" fill="#fff"/>
   { isGreen ?
        <path id="Path_18" data-name="Path 18" d="M1524.306,1310.517l5.18-5.18,5.425,5.18Z" transform="translate(-1523.108 -1303.927)" fill="#0e8d5a"/>:
        <path id="Path_18" data-name="Path 18" d="M1524.306,1310.517l5.18-5.18,5.425,5.18Z" transform="translate(1536.108 1311.927) rotate(-180)" fill="#E35B5B"/>
    }
  </g>
</svg>



    )
}