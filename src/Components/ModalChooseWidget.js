import { useState } from "react";
import { Modal,Button} from "react-bootstrap";
import { useDashboard } from "../DashboardContext";
import widgetLibrary from "../widgetLibrary";

export default function ModalChooseWidget(props) {

    const [selectedChoice,setSelectedChoice]=useState(null)
    const {submitAddWidget}=useDashboard()

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose Widget
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 row m-0">
              {
                  [1,2,3,4,5,6].map((singleNum,index)=>(
                      <div  key={singleNum} onClick={()=>setSelectedChoice(singleNum)} className="col-lg-4 mb-3">
                        <div className="widgetImageModal"></div>
                        <p className={`widgetTextModal ${selectedChoice===singleNum ? 'widgetModalActive':''}`}>{widgetLibrary[`widget-${singleNum}`].title}</p>
                      </div>

                  ))
              }
              
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className={`${!selectedChoice ? 'disabled':''}`} onClick={()=>submitAddWidget(selectedChoice)}>Add This Widget</Button>
        </Modal.Footer>
      </Modal>
    );
  }