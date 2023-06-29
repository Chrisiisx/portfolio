import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Who from "./pages/Who";

function App() {
  return (
    <Router >
      <Routes>
        {/*Landing Page*/}
        <Route exact path='/'
          element={<LandingPage />}
        />

        {/*whoami Page*/}
        <Route exact path='/whoami'
          element={<Who />}
        />

      </Routes>
    </Router>
  );
}

export default App;
