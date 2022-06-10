import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./AuthContext";
import Routing from "./Routing";

function App() {
  return (
    <>
      <AuthProvider>
      <Routing/>
      </AuthProvider>
        
      </>
  );
}

export default App;
