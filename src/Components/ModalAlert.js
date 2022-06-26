import { cssNumber } from "jquery";
import { useEffect, useRef, useState } from "react";
import { Alert, Form, InputGroup, Modal, Table, useAccordionButton} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { useAuth } from "../AuthContext";
import fakeCoinInfoData from "../fakeCoinInfoData";


export default function ModalAlert({show,onHide}) {

  const domain = 'https://rsvp.marcantonioapp.com'

  const {user,isAuthenticated}= useAuth()
  const [coinSelected,setCoinSelected]=useState('Bitcoin')
  const [level,setLevel]=useState('')
  const [changes,setChanges]=useState('Higher')
  const [number,setNumber]=useState(10)
  const [message,setMessage]=useState("")
  const [autoMessage,setAutoMessage]=useState(false)
  const [showAlert,setShowAlert]=useState(false)
  const [alertInfo,setAlertInfo]=useState(['',''])
  const [alertList,setAlertList]=useState([])

  function clickEvent(e){
    e.preventDefault();
    sliderRef.current.slickGoTo(1)
    setShowAlert(false)
  }

  async function deleteAlert(e,id){
    e.preventDefault();
    const requestOptions={
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
    try{
      const response = await fetch(`${domain}/alert/delete/${id}`,requestOptions);
      if (response.ok){
        const data = await response.json();
        setAlertInfo(['success','Your Alert has been deleted!'])
        var myArray = alertList.filter(function( obj ) {
          return obj._id !== id;
      })
      setAlertList(myArray)
      } else{
        setAlertInfo(['danger','Failed to delete widget '])
      }
    }catch(err){
      setAlertInfo(['danger','Error in making new alert'])
    }
    console.log()
    setShowAlert(true)

  }
  
  const sliderRef = useRef();
  const setting ={
    infinite: false,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    speed:500,
    adaptiveHeight: false,
    draggable:false
}

function setMessageFunction(){
  if (autoMessage===false){
    setMessage(`CENTIMENT ALERT! ${coinSelected}'s ${level} level is ${changes} than ${level==='Price'? '$':''}${number}!`)
    setAutoMessage(true)
  }else {
    setMessage('')
    setAutoMessage(false)
  }
  
}

useEffect(()=>{
  if (isAuthenticated){ 
    getAlertList()
  }
},[])

async function getAlertList(){
  try{
    const response = await fetch(`${domain}/alert/get/${user.id}`)
    const data = await response.json()
    setAlertList(data.data)
  }catch(e){
    setAlertInfo(['danger','Error in retrieving alert list'])
    setShowAlert(true)
  }
}

async function createAlert(e){
  e.preventDefault();
  const requestOptions={
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user:user.id, coin: coinSelected, level: level,changes:changes, number:number,message:message }),
  }
  try{
    const response = await fetch(`${domain}/alert/add`,requestOptions);
    if (response.ok){
      const data = await response.json();
      setAlertInfo(['primary','New Alert Has been successfully added!'])
      const newItem = alertList.concat(data.data)
      setAlertList(newItem)
    } else{
      setAlertInfo(['danger','Error in making new alert'])
    }
  }catch(err){
    setAlertInfo(['danger','Error in making new alert'])
  }
  emptyAll()
  setShowAlert(true)
  sliderRef.current.slickGoTo(0)
} 

function emptyAll(){
  setCoinSelected('Bitcoin')
  setLevel('')
  setChanges('Higher')
  setNumber(10)
  setMessage('')
  setAutoMessage(false)
}

function setCancel(e){
  e.preventDefault();
  sliderRef.current.slickGoTo(0)
  emptyAll()
}

  const headingList=['Level','Changes','Number','Action']

  const coin = ['Bitcoin','Ethereum','Binance','Cardano','Ripple','Solana','Dogecoin']
    return (
      <Modal
        show={show}
        onHide={()=>onHide()}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight:600}}>
            Alert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Alert variant={alertInfo[0]} show={showAlert} onClose={() => setShowAlert(false)} dismissible>
          {alertInfo[1]}
        </Alert>

          <Slider ref={sliderRef} {...setting}>
            <div className="px-3 h-100">
              {
                alertList.length===0 ?
                <div className="d-flex justify-content-center">
                  <div className="pb-3">
                  <img src="../img/emptystate.svg" className="img-fluid " style={{maxHeight:'300px'}} alt="empty state"/>
                  <h5 className="text-center font-weight-bold text-primary">There is no active alert! </h5>
                  </div>
                </div>
                :
                <div>
                  <h5 className="font-weight-bold text-primary mb-1">Active Alert List</h5>
                  <p>You can only have 3 active alerts!</p>
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th className="ps-3">Coin</th>
                        {
                            headingList.map((singleItem,index)=>(
                              <th className="" style={{textAlign:'right'}}key={index}>{singleItem}</th>
                            ))
                        }
                      </tr>
                    </thead>

                    <tbody>
                      {
                        alertList.map((singleItem,index)=>(
                          <tr key={index} >
                            <td className="py-4 px-2">
                              <div className="d-flex align-items-center">
                                  <img className="pe-3" height={30} src={`../img/icon/${singleItem.coin}.png`}/>
                                  <span className="pe-1 infoNumbersHome ">{singleItem.coin}</span>
                                  <span className="infoTicker m-0">{fakeCoinInfoData[singleItem.coin].ticker}</span>
                                </div>                    
                            </td>

                            <td className="py-0" style={{textAlign:'right'}}>
                            <div className="py-4">
                              <span className="">{singleItem.level}
                              </span>
                            </div>
                          </td>

                          <td className="py-0" style={{textAlign:'right'}}>
                            <div className="py-4">
                              <span className="">{singleItem.changes} than
                              </span>
                            </div>
                          </td>

                          <td className="py-0" style={{textAlign:'right'}}>
                            <div className="py-4">
                              <span className="">{singleItem.level==='Price' && '$'}{singleItem.number}{singleItem.level==='Price' && '.00'}
                              </span>
                            </div>
                          </td>

                          <td className="py-0" style={{textAlign:'right'}}>
                            <div className="py-4 d-flex justify-content-end">
                              <span className="" style={{cursor:'pointer'}} onClick={(e)=>deleteAlert(e,singleItem._id)}>
                                <img className="" height={25} src="../img/icon/trash.svg" alt="trash icon"/>
                              </span>
                            </div>
                          </td>

                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                </div>
              }
              <div className="d-flex justify-content-end h-100 align-items-end">

              <button className="btn btn-light mx-3 px-4 font-weight-bold" onClick={()=>onHide()}>Close</button>
              <button className="btn btn-primary" disabled={alertList.length>=3} onClick={(e)=>clickEvent(e)}>Add New Alert</button>
              </div>
            </div>

            <div className="px-2">
            <h5>Create New Alert</h5>
              <Form className="pt-4">
                <Form.Group className="mb-3 row">
                  <div className="col-lg-3">
                    <Form.Label className="my-auto">Select Coin</Form.Label>

                  </div>
                  <div className="col-lg-9">
                      <Form.Select value={coinSelected} onChange={(e)=>setCoinSelected(e.target.value)}>
                        {
                          coin.map((singleItem)=>(
                            <option key={singleItem} value={singleItem}>{singleItem}</option>
                            ))
                        }
                      </Form.Select>

                  </div>
                </Form.Group>
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  <Form.Check
                    inline
                    checked={level==='Price'}
                    onChange={()=>setLevel("Price")}
                    className='mx-5'
                    label="Price Level"
                    name="group1"
                    type={'radio'}
                    id={`inline-1`}
                  />
                  <Form.Check
                    inline
                    checked={level==='Sentiment'}
                    onChange={()=>setLevel("Sentiment")}
                    className='mx-5'
                    label="Sentiment Level"
                    name="group1"
                    type={'radio'}
                    id={`inline-2`}
                  />
                  </div>
               
                  <Form.Group className="mb-3 row">
                        <div className="col-lg-3">
                          <Form.Label className="my-auto">Changes</Form.Label>

                        </div>
                        <div className="col-lg-9 row pe-0">
                          <div className="col-6">
                          <Form.Select>
                             
                            <option key="Higher">Higher Than</option>
                            <option key="Lower">Lower Than</option>

                            </Form.Select>
                          </div>
                          <div className="col-6 pe-0">
                              <InputGroup className="mb-3">
                                {
                                  level==='Price' &&
                                  <InputGroup.Text>$</InputGroup.Text>
                                }
                              <Form.Control aria-label="Amount (to the nearest dollar)" value={number} onChange={(e)=>setNumber(e.target.value)} />
                              {
                                  level==='Price' &&
                                  <InputGroup.Text>.00</InputGroup.Text>
                                }
                            </InputGroup>
                          </div>
                           

                        </div>
                      </Form.Group>

                      <Form.Group className="mb-3 row">
                  <div className="col-lg-3">
                    <Form.Label className="my-auto">Message</Form.Label>

                  </div>
                  <div className="col-lg-9">
                    <Form.Control as="textarea" placeholder="Put Message here, or create automatically" rows={3} value={message} onChange={(e)=>setMessage(e.target.value)} />
                  <Form.Check 
                      className="pt-1"
                      type="switch"
                      id="custom-switch"
                      checked={autoMessage}
                      onChange={setMessageFunction}
                      label="Auto Message"
                    />
                  </div>
                </Form.Group>
                

                  <div className="d-flex justify-content-end py-2 align-items-end">
                        <button className="btn btn-light mx-3" onClick={(e)=>setCancel(e)}>Cancel</button>
                        <button className="btn btn-primary" onClick={(e)=>createAlert(e)}>Create Alert</button>
                    </div> 
              </Form>
            </div>

          </Slider>
         
        </Modal.Body>

      </Modal>
    );
  }