import { Modal} from "react-bootstrap";


export default function ModalSuccessRegister({show,onHide,email}) {

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
            Welcome To Centiment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-5">
                <img className="img-fluid" src="/img/modalregister.png" alt="person pointing up"/>
            </div>
            <div className="col-lg-7">
              <p>We have never been happier for you to be part of the Centiment family!</p>
              <p>Centiment is a web application that integrate market sentiment formed in the Twitter to the existing price chart used in technical analysis. It manufacture a continuous data pipeline present it as a modern graph and charts through widgets.</p>
              <p>You have registered with the email : <b>{email}</b></p>
              <button className="btn btn-primary w-100" onClick={()=>onHide()}>Let's Start Your Centiment Journey</button>

            </div>
          </div>
        </Modal.Body>

      </Modal>
    );
  }