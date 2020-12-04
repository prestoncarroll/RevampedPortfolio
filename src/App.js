import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Route from "./Components/Route";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <Route path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </React.Fragment>
  );
};

export default App;
