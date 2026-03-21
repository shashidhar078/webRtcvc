
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import Authentication from './pages/Authentication';

function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
           <Route path="/auth" element={<Authentication/>} />
      </Routes>
    </Router>


    </div>
  );
}

export default App;
