import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Technologies from './Pages/Technologies/Technologies';
import About from './Pages/About/About';
import Nav from './Comps/Nav';
import './Styles/App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/projects" exact component={Projects} /> 
        <Route path="/technologies" exact component={Technologies} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  )}

export default App;