import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardView from "./View/DashboardView";
import NavbarCustom from "./Components/NavbarCustom";
import { DashboardProvider } from "./DashboardContext";
import ModalChooseWidget from "./Components/ModalChooseWidget";

function App() {
  return (
    <>
      <NavbarCustom/>
      <Router>
        <DashboardProvider>
        <Routes>
          <Route 
            exact
            path='/'
            element={<DashboardView/>}
            />
          </Routes>
          </DashboardProvider>
        </Router>

        
      </>
  );
}

export default App;
