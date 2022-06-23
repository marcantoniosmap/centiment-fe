import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
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

export default function Routing() {
  const [alertModal,setAlertModal]=useState(false)

  function setAlertModalFunction(param){
    setAlertModal(param)
  }
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
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
          
          </Routes>

            <ModalAlert show={alertModal} onHide={(()=>setAlertModal(false))}/>
          
            
        </Router>
          

        
      </>
  );
}
