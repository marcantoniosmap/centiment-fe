import { useState } from "react";
import { Modal,Button} from "react-bootstrap";
import { useDashboard } from "../DashboardContext";
import widgetLibrary from "../widgetLibrary";

export default function ModalChooseWidget(props) {

    const [selectedChoice,setSelectedChoice]=useState(null)
    const {submitAddWidget}=useDashboard()

    function handleSubmit(selectedChoice){
      setSelectedChoice(null)
      submitAddWidget(selectedChoice)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight:600}}>
            Choose Widget
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#EBEDF3'}}>
          <div className="w-100 row m-0">
              {
                  [1,2,3,4,5,6].map((singleNum,index)=>(
                      <div key={singleNum} onClick={()=>setSelectedChoice(singleNum)} className="col-lg-4 mb-3">
                        {/* <div className="widgetImageModal"></div> */}
                        <img className={`img-fluid ${selectedChoice===singleNum ? 'widgetModalActivePic':''}`} src={`./img/previewWidget/widget-${singleNum}.png`}/>
                        <p className={`widgetTextModal ${selectedChoice===singleNum ? 'widgetModalActive':''}`}>{widgetLibrary[`widget-${singleNum}`].title}</p>
                      </div>

                  ))
              }
              
          <div className="w-100 pt-3 d-flex justify-content-end">
            <Button className={`${!selectedChoice ? 'disabled':''}`} onClick={()=>handleSubmit(selectedChoice)}>SELECT WIDGET</Button>
            
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    );
  }