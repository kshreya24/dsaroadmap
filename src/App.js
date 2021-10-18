import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContestPage from "./Components/ContestPage.js/ContestPage";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/navbar";
import ProblemsPage from "./Components/ProblemsPage/ProblemsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Switch>
          <Route path='/contest'>
            <ContestPage />
          </Route>
          <Route path='/probspage'>
            <ProblemsPage />
          </Route>
          <Route path='/abtpage'>
            <AboutPage />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
