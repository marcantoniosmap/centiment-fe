import { useEffect, useRef, useState } from "react";
import { Alert, FormControl, FormGroup, Modal} from "react-bootstrap";
import Slider from "react-slick";
import { useAuth } from "../AuthContext";


export default function ModalProfile({show,onHide}) {

    const {user,updateProfile,updatePassword}=useAuth()

    const colors = ['#00AA55', '#009FD4', '#B381B3', '#939393', '#E3BC00', '#D47500', '#DC2A2A'];
    const [email,setEmail]=useState(user.email)
    const [name,setName]=useState(user.name)
    const [color,setColor]=useState(user.profileColor)
    const [oldPassword,setOldPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [newPasswordConf,setNewPasswordConf]=useState('')
    const [showMessage,setShowMessage]=useState(false)
    const [alertMessage,setAlertMessage]=useState(['danger',''])
    const [permanentDisable,setPermanentDisable]=useState(false)


    async function handleSubmitProfileChange(e){
      e.preventDefault()
      setShowMessage(false)
      setPermanentDisable(true)

      try{
        const result = await updateProfile({name:name,profileColor:color})
        if (result.status){
          setAlertMessage(['success','You have updated your profile!'])
          setShowMessage(true)
        }
      }catch(e){
        setAlertMessage(['danger','Error in updating data'])
        setShowMessage(true)
      }
      setPermanentDisable(false)

    }

    async function handleSubmitPasswordChange(e){
      e.preventDefault()
      setShowMessage(false)
      setPermanentDisable(true)

      try{
        const result = await updatePassword({oldPassword:oldPassword,newPassword:newPassword})
        if (result.status){
          setAlertMessage(['success','You have changed your password!'])
          setShowMessage(true)
        }
      }catch(e){
        setAlertMessage(['danger','Current password is not right!'])
        setShowMessage(true)
      }
      setPermanentDisable(false)

    }
    useEffect(()=>{
      setEmail(user.email)
      setName(user.name)
      setColor(user.profileColor)
    },[user])
    
    function handleChangeToPassword(){
      setShowMessage(false)
      sliderRef.current.slickGoTo(1)
    }
    function handleChangeToProfile(){
      setShowMessage(false)
      sliderRef.current.slickGoTo(0)
    }

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
  const sliderRef = useRef();



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
            Profile Setting
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            user &&
            <div className="row">
               <div className="col-lg-6 d-lg-block d-none">
                <img className="img-fluid" src="../img/profile.png" alt="person pointing up"/>
            </div>
              <div className="col-lg-6">
              <Alert variant={alertMessage[0]} show={showMessage} onClose={() => setShowMessage(false)} dismissible>
                {alertMessage[1]}
              </Alert>
              <Slider ref={sliderRef} {...setting}>
              <form onSubmit={handleSubmitProfileChange}>

                <p>Profile Color</p>
                <div className="d-flex align-items-center pb-3">

                {
                  colors.map((singleItem,index)=>(
                    <div key={index} 
                        onClick={()=>setColor(singleItem)}
                        className={`mx-1 ${singleItem===color?'border-selected':''}`}
                        style={{width:'35px', height:'35px',backgroundColor:singleItem,borderRadius:'50%'}}>
                    </div>
                  ))
                }
                                </div>

            <FormGroup controlId="email">
              E-mail
              <FormControl
                autoFocus
                disabled
                type="text"
                value={email}
                
              />
              </FormGroup>
          
              <FormGroup controlId="firstName" className="pt-3">
              First Name
              <FormControl
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <div className="mt-1" style={{textAlign:'right',fontSize:'0.8rem'}}>
            <button className="btn btn-primary w-100 mt-3" disabled={permanentDisable|| !name} type="submit">
              Update Data
            </button>
            </div>
            <div className="mt-2 text-center">
             <span className="text-muted" style={{fontSize:'0.9rem', cursor:'pointer'}} onClick={handleChangeToPassword}>Change Password</span>
          </div>

          </form>
          <form onSubmit={handleSubmitPasswordChange}>
              <FormGroup controlId="passwordOld" className="pt-3">
                Current Password
                <FormControl
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <FormGroup controlId="passwordNew" className="pt-3">
                New Password
                <FormControl
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <FormGroup controlId="passwordNewCon" className="pt-3">
                Confirm New Password
                <FormControl
                  value={newPasswordConf}
                  onChange={(e) => setNewPasswordConf(e.target.value)}
                  type="password"
                />
              </FormGroup>

              <div className="mt-1" style={{textAlign:'right',fontSize:'0.8rem'}}>
            <button className="btn btn-primary w-100 mt-3" disabled={permanentDisable|| newPassword!==newPasswordConf || newPassword.length<=6 || oldPassword.length<=6} type="submit">
              Change Password
            </button>
            </div>
            <div className="mt-2 text-center">
             <span className="text-muted" style={{fontSize:'0.9rem', cursor:'pointer'}} onClick={handleChangeToProfile}>Back to Profile</span>
          </div>
          </form>
          </Slider>

              </div>
              
            </div>

          }
  
        </Modal.Body>

      </Modal>
    );
  }