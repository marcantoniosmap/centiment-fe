import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from "./Components/NavbarCustom";

import LoginView from "./View/LoginView";
import RegisterView from "./View/RegisterView";
import HomeView from "./View/HomeView";
import Footer from "./Components/Footer";
import AboutUsView from "./View/AboutUsView";
import DashboardWrapper from "./Components/DashboardWrapper";
import ModalAlert from "./Components/ModalAlert";
import { useState } from "react";
import ResetPassView from "./View/ResetPassView";
import Page404 from "./View/Page404";
import ModalLogin from "./Components/ModalLogin";
import { useAuth } from "./AuthContext";

export default function Routing() {
  const [alertModal,setAlertModal]=useState(false)
  const {isAuthenticated,setLoginModalFunc}=useAuth()

  function setAlertModalFunction(param){
    if (isAuthenticated){
      setAlertModal(param)
    }else{
      setLoginModalFunc(true)
    }
  }
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
          <Route 
            exact
            path='/dashboard'
            element={<Navigate to="/dashboard/Bitcoin"/>}
            />
            <Route 
            exact
            path='/dashboard/:coin'
            element={<><NavbarCustom setAlertModal={setAlertModalFunction}/><DashboardWrapper/><Footer/></>}
            />
          <Route
            exact
            path='/login'
            element={<LoginView/>}
          />
          <Route
            exact
            path='/login/:email'
            element={<LoginView/>}
          />
          <Route
            exact
            path='/register'
            element={<RegisterView/>}
          />

          <Route
            exact
            path='/home'
            element={<><NavbarCustom setAlertModal={setAlertModalFunction}/><HomeView/><Footer/></>}
          />
            <Route
            exact
            path='/aboutus'
            element={<><NavbarCustom setAlertModal={setAlertModalFunction}/><AboutUsView/><Footer/></>}
          />

            <Route
            exact
            path='/resetpass/:id/:validate'
            element={<ResetPassView/>}
          />
          <Route
            exact
            path="/pagenotfound"
            element={<><NavbarCustom setAlertModal={setAlertModalFunction}/><Page404/><Footer/></>}
          />
          <Route
            path="*"
            element={<Navigate to='/pagenotfound' replace/>}
          />
          
          </Routes>

            <ModalAlert show={alertModal} onHide={(()=>setAlertModal(false))}/>
            <ModalLogin/>

          
            
        </Router>
          

        
      </>
  );
}
