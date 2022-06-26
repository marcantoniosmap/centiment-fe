import { Alert} from "react-bootstrap";
import { useEffect, useState } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function ResetPassView(){


const {resetPass} = useAuth()
const history =useNavigate()
    
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertShow,setAlertShow]=useState(false)
  const [errorMessage, setErrorMessage] = useState(false);


  function validateForm() {
    return password===confirmPassword && password.length!==0 && password.length>6
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const id = window.location.pathname.split('/')[2]
    const validate = window.location.pathname.split('/')[3]
    console.log(id,validate)

      try{
      const loginResult = await resetPass({password:password,user_id:id,validate:validate})
      if (loginResult.status==='ok'){
        setErrorMessage('Sucessfully change your password')
        setAlertShow(true)
        // history('/login')
      }else{
        setErrorMessage('Failed to Reset Password!')
          setAlertShow(true)
      } 
      }catch(e){
          setErrorMessage('Failed to Reset Password!')
          setAlertShow(true)
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
          <Alert variant={errorMessage[0]==='S'?'primary':'danger'}show={alertShow} onClose={()=>setAlertShow(false)} dismissible>
          {errorMessage}
        </Alert>
            <h1 className="text-center">
              <img src="/img/CentimentLogo.png" style={{ maxWidth: "200px" }} />
            </h1>
           
            <form onSubmit={handleSubmit}>
            <FormGroup controlId="password" className="pt-3">
                New Password
                <FormControl
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <FormGroup controlId="passwordConfirm" className="pt-2">
                Confirm New Password
                <FormControl
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
                {errorMessage && <p className="text-red">{errorMessage}</p>}
            
              <button className="btn btn-primary w-100 mt-3" block="true" disabled={!validateForm()} type="submit">
                Reset Password
              </button>
            </form>
             <div className="mt-2 text-center">
                <span className="text-muted">Back to <Link to="/register" className="text-primary">Home   </Link>Page</span>
             </div>
            
          </div>
        </div>
      </div>
    </div>
    )
}