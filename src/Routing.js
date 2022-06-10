import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Navigate
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardView from "./View/DashboardView";
import NavbarCustom from "./Components/NavbarCustom";
import { DashboardProvider } from "./DashboardContext";
import ModalChooseWidget from "./Components/ModalChooseWidget";
import {useAuth} from "./AuthContext"
import LoginView from "./View/LoginView";
import RegisterView from "./View/RegisterView";
import HomeView from "./View/HomeView";
import Footer from "./Components/Footer";
import AboutUsView from "./View/AboutUsView";

export default function Routing() {
  return (
    <>
      {/* <NavbarCustom/> */}
          <DashboardProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route 
            exact
            path='/dashboard'
            element={<Navigate to="/dashboard/bitcoin"/>}
            />
            <Route 
            exact
            path='/dashboard/:coin'
            element={<><NavbarCustom/><DashboardView/><Footer/></>}
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
            element={<><NavbarCustom/><HomeView/><Footer/></>}
          />
            <Route
            exact
            path='/aboutus'
            element={<><NavbarCustom/><AboutUsView/><Footer/></>}
          />
          
          </Routes>
            
        </Router>
          </DashboardProvider>
          

        
      </>
  );
}
