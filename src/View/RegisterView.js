import { Alert } from "react-bootstrap";
import { useState } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function RegisterView(){

const {register} = useAuth()
const history =useNavigate()
    
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch,setPasswordMatch]=useState(0)
  const [errorMessage, setErrorMessage] = useState(false);
  const [alertShow,setAlertShow]=useState(false)

  function validateForm() {
    return firstName.length > 2 && email.length > 6 && password.length > 6 && (password===confirmPassword);
  }


  async function handleSubmit(event) {
    event.preventDefault();
    
    try{
      const RegisterResult = await register({email:email,name:firstName+' '+lastName,password:password })
    if (RegisterResult.status==='ok'){
        history(`/login/${email}`)
    }
    else{
      setErrorMessage(RegisterResult.msg)
      setAlertShow(true)
    }
  }catch(e){
      console.log('here')
      setErrorMessage('Failed to Make an Account')
    }
  }

  function checkPassword(e){
    setPassword(e)
    if (confirmPassword==="") setPasswordMatch(0)
    else if (confirmPassword&& e ===confirmPassword) setPasswordMatch(1)
    else setPasswordMatch(2)
  }

  function checkCPassword(e){
    setConfirmPassword(e)
    if (e===password && password) setPasswordMatch(1)
    else setPasswordMatch(2)
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
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
        
          <div className="px-3" >
          <Alert variant='danger'show={alertShow} onClose={()=>setAlertShow(false)} dismissible>
          {errorMessage}
        </Alert>
            <h1 className="text-center">
              <img src="/img/CentimentLogo.png" style={{ maxWidth: "200px" }} />
            </h1>
           
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
              <div className="row">
                <div className="col-lg-6">
                <FormGroup controlId="firstName" className="pt-3">
                First Name
                <FormControl
                  autoFocus
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormGroup>
                </div>
                <div className="col-lg-6 ps-lg-0">
                <FormGroup controlId="lastName" className="pt-3">
                Last Name
                <FormControl
                  autoFocus
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormGroup>
                </div>
              </div>

              <FormGroup controlId="password" className="pt-3">
                Password
                <FormControl
                  value={password}
                  onChange={(e) => checkPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <FormGroup controlId="passwordConfirm" className="pt-2">
                Confirm Password
                <FormControl
                  value={confirmPassword}
                  onChange={(e) => checkCPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <div className="pt-1">
                <span className={passwordMatch===0 ? 'd-none': passwordMatch===1 ? 'text-green' : 'text-red'} >{passwordMatch===1 ?'Password matches':'Password does not match'}</span>

              </div>
              <div className="mt-1" style={{textAlign:'right',fontSize:'0.8rem'}}>
              </div>
              <button className="btn btn-primary w-100 mt-3" disabled={!validateForm()} type="submit">
                Register
              </button>
            </form>
             <div className="mt-2 text-center">
                <span className="text-muted">Already have account? <Link to="/login" className="text-primary">Login now</Link>!</span>
             </div>
            
          </div>
        </div>
      </div>
      <div></div>
    </div>
    )
}