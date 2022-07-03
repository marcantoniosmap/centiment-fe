import { Table, useAccordionButton } from "react-bootstrap";
import { useNavigate } from "react-router";
import TopArrow from "./TopArrow";
import fakeCoinInfoData from "../fakeCoinInfoData"
import { useEffect, useState } from "react";
import DashboardCardLoading from "./DashboardCardLoading";
export default function HomeCoinTable(){
    
    const history = useNavigate()
    const headingList=['Last Price','Volume','Sentiment Score','Daily Tweet Volume']
    const iterationSpec = ['price','volume','sentiment','tweetCount']
    const fakeCoin=['Bitcoin','Ethereum','Binance','Cardano','Ripple','Solana','Dogecoin']
    const domain='https://api-centiment.marcantonioapp.com'
    const [tableData,setTableData]=useState([])
    function handleClick(param){
      console.log('helo')
        history(`/dashboard/${param}`)
    }

    const coinTickerLibrary={
      'BTC':'Bitcoin' ,
      'ETH':'Ethereum',
      'BNB':'Binance' ,
      'XRP':'Ripple'  ,
      'ADA':'Cardano' ,
      'SOL':'Solana'  ,
      'DOGE':'Dogecoin',
  }

    async function initialFetch(){
      try{
        const f = await fetch(`${domain}/all-coin-information`)
        const data = await f.json()
        data.payload.map((singleItem,index)=>{
          data.payload[index].coinName=coinTickerLibrary[singleItem.ticker]
        })
        setTableData(data.payload)

      }catch{

      }
    }


    useEffect(()=>{
      initialFetch()
    },[])
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
                tableData.length===0 ? <DashboardCardLoading/> :
                tableData.map((singleItem,index)=>(
                  <tr key={index} style={{cursor:'pointer'}} onClick={()=>handleClick(singleItem.coinName)}>
                
                    <td className="py-4 px-2">
                        <div className="d-flex align-items-center">
                          <img className="pe-3" height={30} src={`../img/icon/${singleItem.coinName}.png`}/>
                            <span className="pe-1 infoNumbersHome ">{singleItem.coinName}</span>
                            <span className="infoTicker m-0">{singleItem.ticker}</span>
                      </div>                    
                    </td>

                    <td className="py-0" >
                      <div className="py-4 d-flex justify-content-end">
                      <span className="infoNumbersHome">{singleItem.coin_price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                      </span>
                      <span className={`d-none d-lg-block px-2 indicatorHome ${singleItem.coin_price_percentage>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={singleItem.coin_price_percentage>0}/> {Math.abs(singleItem.coin_price_percentage)}%</span>
                      </div>
                    </td>

                    <td className="py-0">
                      <div className="py-4 d-flex justify-content-end">
                        <span className="infoNumbersHome">{singleItem.coin_volume.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                              maximumFractionDigits:0

                            })}
                        </span>
                        <span className={`d-none d-lg-block px-2 indicatorHome ${singleItem.coin_volume_percentage>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={singleItem.coin_volume_percentage>0}/> {Math.abs(singleItem.coin_volume_percentage)}%</span>
                      </div>
                    </td>

                    <td className="py-0">
                      <div className="py-4 d-flex justify-content-end">
                        <span className="infoNumbersHome">{singleItem.tweet_sentiment}
                        </span>
                        <span className={`d-none d-lg-block px-2 indicatorHome ${singleItem.tweet_sentiment_percentage>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={singleItem.tweet_sentiment_percentage>0}/> {Math.abs(singleItem.tweet_sentiment_percentage)}%</span>
                        </div>
                    </td>

                    <td className="py-0">
                      <div className="py-4 d-flex justify-content-end">
                        <span className="infoNumbersHome">{singleItem.tweet_count.toLocaleString('en-US')}
                        </span>
                        <span className={`d-none d-lg-block px-2 indicatorHome ${singleItem.tweet_count_percentage>0? 'textGreen': 'textRed'}`}><TopArrow isGreen={singleItem.tweet_count_percentage}/> {Math.abs(singleItem.tweet_count_percentage)}%</span>
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