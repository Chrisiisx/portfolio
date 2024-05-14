import React from "react";
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Who from "./pages/Who";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router >
      <Routes>
        {/*Landing Page*/}
        <Route exact path='/'
          element={<LandingPage />}
        />

        {/*Portfolio Page*/}
        <Route exact path='/portfolio'
          element={<Portfolio />}
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
