import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardView from "./View/DashboardView";
import Navbar from "./Components/Navbar";

function App(props) {
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route 
            exact
            path='/'
            element={<DashboardView/>}
            />
          </Routes>
        </Router>
      </>
  );
}

export default App;
