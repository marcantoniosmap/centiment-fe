import { useEffect, useRef, useState } from "react";
import { Alert, Form, InputGroup, Modal, Table, useAccordionButton} from "react-bootstrap";


export default function ModalChangeTimeframe({show,onHide,submitFunc}) {

  const [level,setLevel]=useState('')

  function handleSubmit(e){
    e.preventDefault()
    submitFunc(level)
    setLevel('')
  }
  function submitClose(){
    setLevel('')
    onHide()
  }
    return (
      <Modal
        show={show}
        onHide={()=>submitClose()}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight:600}}>
          Change Timeframe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="px-2">
              <Form className="pt-4">
                
                <div className="mb-3 row">
                  <div className="col-lg-4">
                  <Form.Check
                    inline
                    checked={level==='1d'}
                    onChange={()=>setLevel("1d")}
                    className='mx-5'
                    label="Daily"
                    name="group1"
                    type={'radio'}
                    id={`inline-1`}
                  />
                  </div>
                  <div className="col-lg-4">
                  <Form.Check
                    inline
                    checked={level==='7d'}
                    onChange={()=>setLevel("7d")}
                    className='mx-5'
                    label="Weekly"
                    name="group1"
                    type={'radio'}
                    id={`inline-2`}
                  />
                  </div>
                  <div className="col-lg-4">
                  <Form.Check
                    inline
                    checked={level==='1mo'}
                    onChange={()=>setLevel("1mo")}
                    className='mx-5'
                    label="Monthly"
                    name="group1"
                    type={'radio'}
                    id={`inline-3`}
                  />
                  </div>
                
                  
                 
                  </div>
                  <div className="d-flex justify-content-end py-2 align-items-end">
                        <button className="btn btn-light mx-3" onClick={()=>submitClose()} >Cancel</button>
                        <button className="btn btn-primary" disabled={level.length===0} onClick={(e)=>handleSubmit(e)}>Select Timeframe</button>
                    </div> 
              </Form>
            </div>

         
        </Modal.Body>

      </Modal>
    );
  }