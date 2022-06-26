import { Alert} from "react-bootstrap";
import { useState } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import ModalSuccessRegister from "../Components/ModalSuccessRegister";

export default function LoginView(){


const {login,sendEmailResetPass} = useAuth()
const history =useNavigate()
    
  const registerLanding=window.location.pathname.length>6
  const [registerModal,setRegisterModal]=useState(window.location.pathname.length>6)
  const [email, setEmail] = useState(window.location.pathname.substring(7));
  const [password, setPassword] = useState("");
  const [forgetPasswordPage,setForgetPasswordPage]=useState(false)
  const [emailVerification,setEMailVerification]=useState('')
  const [showError,setShowError]=useState(false)
  const [errorVariant,setErrorVariant]=useState('danger')

  const [errorMessage, setErrorMessage] = useState();
  const [permanentDisabled,setPermanentDisabled]=useState(false)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


  async function handleSubmit(event) {
    event.preventDefault();

      try{
      const loginResult = await login({email:email,password:password})
      if (loginResult.data==='ok'){
        history('/home')
    } 

      }catch(e){
          setErrorMessage('danger')
          setErrorMessage('Failed to Authenticate!')
          setShowError(true)
      }
      
    
  }

  async function handlePasswordSubmit(event){
    event.preventDefault()
    setPermanentDisabled(true)
    try{
      const loginResult = await sendEmailResetPass({email:emailVerification})
      if (loginResult.status==='ok'){
        setErrorVariant('success')
        setErrorMessage('Check your mail inbox and spam!')
        setShowError(true)
        // history('/home')
    } 
    else{
      setErrorVariant('danger')
          setErrorMessage('Email is not recognized!')
          setShowError(true)
    }

      }catch(e){
          setErrorVariant('danger')
          setErrorMessage('Email is not recognized!')
          setShowError(true)

      }
    

  }

    return(
        <div className="container-fluid" style={{height:'100vh'}}>
      <div className="row h-100">
        <div className="col-lg-6 p-0 overflow-none d-lg-block d-none" 
                style={{backgroundImage:`url(/img/loginImage.jpg)`,
                        backgroundRepeat:'no-repeat',
                        // backgroundAttachment:'fixed',
                        backgroundPosition:'cover',
                        backgroundSize:'cover'
                        }}>
        </div>
        <div className=" col-lg-6 d-flex justify-content-center align-items-center">
          <div className="px-3" >
            <h1 className="text-center">
              <img src="/img/CentimentLogo.png" style={{ maxWidth: "200px" }} />
            </h1>
            <Alert variant={errorVariant} show={showError} onClose={()=>setShowError(false)} dismissible>
                  {errorMessage}
               </Alert>
           {
            !forgetPasswordPage ? 
            <>
            <form onSubmit={handleSubmit}>
              <FormGroup controlId="email">
                E-mail
                <FormControl
                  autoFocus
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password" className="pt-3">
                Password
                <FormControl
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>

              <div className="mt-1" style={{textAlign:'right',fontSize:'0.8rem'}}>
              <span className="text-muted" onClick={()=>setForgetPasswordPage(true)}>Forget Password?</span>
              </div>
              <button className="btn btn-primary w-100 mt-3" block="true" disabled={!validateForm()} type="submit">
                Login
              </button>
            </form>
             <div className="mt-2 text-center">
                <span className="text-muted">Don't have an account? <Link to="/register" className="text-primary">Register now</Link>!</span>
             </div>
             </> :
             <>
              <h3 className="font-weight-bold text-center mb-1">Forget Password</h3>
              <p className="opacity-75">We'll send you email verification to renew your password!</p>
              <form onSubmit={handlePasswordSubmit}>
              <FormGroup controlId="email">
                E-mail
                <FormControl
                  autoFocus
                  type="text"
                  value={emailVerification}
                  onChange={(e) => setEMailVerification(e.target.value)}
                />
              </FormGroup>
            
              <div className="mt-1" style={{textAlign:'right',fontSize:'0.8rem'}}>
              <button className="btn btn-primary w-100 mt-3" block="true" disabled={emailVerification.length<6 || permanentDisabled} type="submit">
                Send Email
              </button>
              </div>
            </form>
             <div className="mt-2 text-center">
             <span className="text-muted">Want to get back to Login? <span className="text-primary " onClick={()=>setForgetPasswordPage(false)}>Click here</span>!</span>
          </div>
          </>

           }
            
            
          </div>
        </div>
      </div>
      <ModalSuccessRegister show={registerModal} email ={email} onHide={()=>setRegisterModal(false)}/>
    </div>
    )
}