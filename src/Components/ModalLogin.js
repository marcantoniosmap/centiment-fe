import { useState } from "react";
import { Modal} from "react-bootstrap";
import { useDashboard } from "../DashboardContext";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";


export default function ModalLogin(props) {

    const {loginModal, setLoginModalFunc}=useAuth()


    function handleClose(){
      setLoginModalFunc(false)
    }

    return (
      <Modal
        show={loginModal}
        onHide={()=>handleClose()}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight:600}}>
            You Might Want to Log In First!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
            <div className="col-lg-6 d-lg-block d-none">
                <img className="img-fluid" src="../img/NotAuthorized.png" alt="person pointing up"/>
            </div>
            <div className="col-lg-6" style={{height:'initial'}}>
              <div className=" d-flex align-items-center h-100">
              <div>
              <p>Hm.....It seems that you want to interact with the widget!</p>
              <p>In order to experience the full dashboard, you would need to be authenticated! </p>
              <p>By being authenticated, you would be able to save widget configuration, and create the dashboard you desire!</p>
              <div className="row">
                <div className="col-lg-6 ">
                <button className="btn btn-light w-100"><Link to="/login">Log In</Link></button>

                </div>
                <div className="col-lg-6 ps-0">
              <button className="btn btn-primary w-100"><Link to="/register">Register</Link></button>

                </div>
              </div>

            </div>
            </div>
            </div>
          </div>

          
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    );
  }