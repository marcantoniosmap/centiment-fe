import { useState } from "react";
import { Modal,Button} from "react-bootstrap";
import { useDashboard } from "../DashboardContext";
import widgetLibrary from "../widgetLibrary";

export default function ModalChooseCoin({show,handleCloseModal}) {

  
    const coinOption=['Bitcoin','Ethereum','Binance','Ripple','Cardano','Solana','Dogecoin']

    const [selectedChoice,setSelectedChoice]=useState(null)
    const {getCurrentCoin,setCurrentCoin}=useDashboard()
    const currentCoinContext= getCurrentCoin()

    function handleSubmit(){
      setCurrentCoin(selectedChoice)
      handleClose()
    }
    
    function handleClose(){
      setSelectedChoice(null)
      handleCloseModal()
    }
    function handleSelect(param){
      if (param !== currentCoinContext){
        setSelectedChoice(param)
      }         
    }

    return (
      <Modal
        show={show}
        onHide={()=>handleClose()}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight:600}}>
            Choose Coin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#EBEDF3'}}>
          <div className="w-100 row m-0">
              {
                  coinOption.map((singleCoin,index)=>(
                      <div key={singleCoin} onClick={()=>handleSelect(singleCoin)} className="col-lg-4 mb-3" style={{position:'relative'}}>
                        {/* <div className="widgetImageModal"></div> */}
                        <img className={`${singleCoin===currentCoinContext ? 'disabledModalpicture':''} img-fluid ${selectedChoice===singleCoin ? 'widgetModalActivePic':''}`} src={`./img/coinCard/${singleCoin}.png`} alt={singleCoin}/>
                        <p className={`widgetTextModal ${selectedChoice===singleCoin? 'widgetModalActive':''} ${currentCoinContext===singleCoin && 'text-muted'}`}>{singleCoin}</p>
                        {
                          currentCoinContext===singleCoin&&
                          <div className="hoverSelectedText">SELECTED</div>
                        }
                      </div>

                  ))
              }
              
          <div className="w-100 pt-3 d-flex justify-content-end">
            <Button className={`${!selectedChoice ? 'disabled':''}`} onClick={()=>handleSubmit()}>SELECT COIN</Button>
            
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    );
  }