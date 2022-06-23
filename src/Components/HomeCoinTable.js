import { Table, useAccordionButton } from "react-bootstrap";
import { useNavigate } from "react-router";
import TopArrow from "./TopArrow";
import fakeCoinInfoData from "../fakeCoinInfoData"
export default function HomeCoinTable(){
    
    const history = useNavigate()
    const headingList=['Last Price','Volume','Sentiment Score','Daily Tweet Volume']
    const iterationSpec = ['price','volume','sentiment','tweetCount']
    const fakeCoin=['Bitcoin','Ethereum','Binance','Cardano','Ripple','Solana','Dogecoin']

    function handleClick(param){
      console.log('helo')
        history(`/dashboard/${param}`)
    }
    return(
       <div className="backgroundDefault py-5">
        <div className="container">
          <h2 className="mb-0" style={{fontWeight:'600'}}>Coin Option</h2>
          <p>Sorted by Market Cap</p>
          <div className="px-4 py-2 " style={{backgroundColor:'white',borderRadius:'14px', filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.288))'}} >
          <Table hover responsive>
            <thead>
              <tr>
              <th className="ps-3">Coin</th>
                {
                  headingList.map((singleItem,index)=>(
                    <th className="pe-3" style={{textAlign:'right'}}key={index}>{singleItem}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                fakeCoin.map((singleItem,index)=>(
                  <tr key={index} style={{cursor:'pointer'}} onClick={()=>handleClick(singleItem)}>
                
                    <td className="py-4 px-2">
                        <div className="d-flex align-items-center">
                          <img className="pe-3" height={30} src={`../img/icon/${singleItem}.png`}/>
                            <span className="pe-1 infoNumbersHome ">{singleItem}</span>
                            <span className="infoTicker m-0">{fakeCoinInfoData[singleItem].ticker}</span>
                      </div>                    
                    </td>

                    <td className="py-0" >
                      <div className="py-4 d-flex justify-content-end">
                      <span className="infoNumbersHome">{fakeCoinInfoData[singleItem].price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                      </span>
                      <span className={`d-none d-lg-block px-2 indicatorHome ${fakeCoinInfoData[singleItem].priceDiff>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={fakeCoinInfoData[singleItem].priceDiff>0}/> {Math.abs(fakeCoinInfoData[singleItem].priceDiff)}%</span>
                      </div>
                    </td>

                    <td className="py-0">
                      <div className="py-4 d-flex justify-content-end">
                        <span className="infoNumbersHome">{fakeCoinInfoData[singleItem].volume.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              maximumFractionDigits:0

                            })}
                        </span>
                        <span className={`d-none d-lg-block px-2 indicatorHome ${fakeCoinInfoData[singleItem].volumeDiff>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={fakeCoinInfoData[singleItem].volumeDiff>0}/> {Math.abs(fakeCoinInfoData[singleItem].volumeDiff)}%</span>
                      </div>
                    </td>

                    <td className="py-0">
                      <div className="py-4 d-flex justify-content-end">
                        <span className="infoNumbersHome">{fakeCoinInfoData[singleItem].sentiment}
                        </span>
                        <span className={`d-none d-lg-block px-2 indicatorHome ${fakeCoinInfoData[singleItem].sentimentDiff>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={fakeCoinInfoData[singleItem].sentimentDiff>0}/> {Math.abs(fakeCoinInfoData[singleItem].sentimentDiff)}%</span>
                        </div>
                    </td>

                    <td className="py-0">
                      <div className="py-4 d-flex justify-content-end">
                        <span className="infoNumbersHome">{fakeCoinInfoData[singleItem].tweetCount.toLocaleString('en-US')}
                        </span>
                        <span className={`d-none d-lg-block px-2 indicatorHome ${fakeCoinInfoData[singleItem].tweetCountDiff>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={fakeCoinInfoData[singleItem].tweetCountDiff>0}/> {Math.abs(fakeCoinInfoData[singleItem].tweetCountDiff)}%</span>
                        </div>
                    </td>
                    {/* {
                    iterationSpec.map((singleItemIt,index)=>(
                      <td className="py-4" key={index}>{fakeCoinInfoData[singleItem][singleItemIt]}</td>
                    ))
                  } */}
                </tr>
                ))
               }
              
            </tbody>
          </Table>
        </div>
        </div>
       </div>
    )
}