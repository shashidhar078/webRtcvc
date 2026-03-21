
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import Authentication from './pages/Authentication';
import {AuthProvider} from "./contexts/AuthContext.jsx";

function App() {
  return (
    <div className="App">
      
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
           <Route path="/auth" element={<Authentication/>} />
      </Routes>
      </AuthProvider>
    </Router>


    </div>
  );
}

export default App;
