import React, {useEffect, useState} from 'react';
import './App.css';
import { verify } from 'crypto';
import { get } from 'https';
import Background from './components/Background';
import Quiz from './components/Quiz';
import Welcome from './components/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './media/logo_trans.png';
import Result from './components/Result';
import Footer from './components/Footer';




function App() {


  return (
    <Router> 
    <div className="App">
      
      <div className="bg">
       <Background /> 
       <Link to="/">  <img src={logo} className="myLogo" /> </Link>
      {/*  <h1 className="title">Yay Or Nay</h1>  */}

        <div className="intro-wrap">

        <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/quiz" component={Quiz} /> 
        <Route path="/result" component={Result} exact /> 

        </Switch>     

        </div>
      </div>
      <Footer />  
    </div>
    </Router>
  );
}

export default App;
