import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import cutt from '../media/cutt.jpg'  
  



function Welcome() {

    return(
        <div className="welcome-wrap">
            <p className="intro-text">
            Do you have a good taste in cinema?<br/>
            Find out now!
            </p>
            <img src={cutt} className="cutt"></img>
            <Link className="lets-begin" to="/quiz">Let's Begin</Link>
        </div>
    );
}

export default Welcome;
