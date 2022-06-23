import { Modal} from "react-bootstrap";
import widgetLibrary from "../widgetLibrary";


export default function ModalCoinInfo({show,onHide,chartId}) {

  const setup = widgetLibrary[chartId]
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
            Coin Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 d-lg-flex d-none align-items-center">
              <div>
                <img className="img-fluid" src={`../img/previewWidget/${setup.id}.png`}/>
                <h5 className="font-weight-bold pt-1 text-center">{setup.title}</h5>

              </div>
            </div>
            <div className="col-lg-6">
              {setup.completeExplanation}

            </div>
          </div>
        </Modal.Body>

      </Modal>
    );
  }