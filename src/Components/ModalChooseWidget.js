import { useState } from "react";
import { Modal,Button} from "react-bootstrap";
import { isCompositeComponent } from "react-dom/test-utils";
import { useDashboard } from "../DashboardContext";
import widgetLibrary from "../widgetLibrary";

export default function ModalChooseWidget(props) {

    const [selectedChoice,setSelectedChoice]=useState(null)
    const {submitAddWidget,activeWidget,setModal,chooseWidgetModal}=useDashboard()

    function handleSubmit(){
      setSelectedChoice(null)
      submitAddWidget(selectedChoice)
    }
    
    function handleClose(){
      setSelectedChoice(null)
      setModal(false,null)
    }
    function handleSelect(param){
      if (!activeWidget.includes(`widget-${param}`)){
        setSelectedChoice(param)
      }         
    }

    return (
      <Modal
        show={chooseWidgetModal}
        onHide={()=>handleClose()}
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
                      <div key={singleNum} onClick={()=>handleSelect(singleNum)} className="col-lg-4 mb-3">
                        {/* <div className="widgetImageModal"></div> */}
                        <img className={`${activeWidget.includes(`widget-${singleNum}`) ? 'disabledModalpicture':''} img-fluid ${selectedChoice===singleNum ? 'widgetModalActivePic':''}`} src={`./img/previewWidget/widget-${singleNum}.png`} alt={widgetLibrary[`widget-${singleNum}`].title}/>
                        <p className={`widgetTextModal ${selectedChoice===singleNum && !activeWidget.includes(`widget-${singleNum}`) ? 'widgetModalActive':''}`}>{widgetLibrary[`widget-${singleNum}`].title}</p>
                      </div>

                  ))
              }
              
          <div className="w-100 pt-3 d-flex justify-content-end">
            <Button className={`${!selectedChoice ? 'disabled':''}`} onClick={()=>handleSubmit()}>SELECT WIDGET</Button>
            
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    );
  }