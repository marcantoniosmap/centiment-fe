import { useEffect } from "react";
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
