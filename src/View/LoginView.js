import { Button } from "bootstrap";
import { useState } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import ModalSuccessRegister from "../Components/ModalSuccessRegister";

export default function LoginView(){


const {login,setAuth,setUser} = useAuth()
const history =useNavigate()
    
  const registerLanding=window.location.pathname.length>6
  console.log(registerLanding)
  const [registerModal,setRegisterModal]=useState(window.location.pathname.length>6)
  const [email, setEmail] = useState(window.location.pathname.substring(7));
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


  async function handleSubmit(event) {
    event.preventDefault();
    const loginResult = await login({email:email,password:password})
    if (loginResult){
        setAuth(true)
        setUser(loginResult)
        history('/dashboard')
    }else{
        console.log('cannot enter')
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
          <div className="px-5" style={{minWidth:'500px'}}>
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
              <FormGroup controlId="password" className="pt-3">
                Password
                <FormControl
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <div className="mt-1" style={{textAlign:'right',fontSize:'0.8rem'}}>
              <span className="text-muted"><Link to="forgetpass">Forget Password?</Link></span>
              </div>
              <button className="btn btn-primary w-100 mt-3" block disabled={!validateForm()} type="submit">
                Login
              </button>
            </form>
             <div className="mt-2 text-center">
                <span className="text-muted">Don't have an account? <Link to="/register" className="text-primary">Register now</Link>!</span>
             </div>
            
          </div>
        </div>
      </div>
      <ModalSuccessRegister show={registerModal} email ={email} onHide={()=>setRegisterModal(false)}/>
    </div>
    )
}