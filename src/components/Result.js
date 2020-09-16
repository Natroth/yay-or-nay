import React, {useEffect, useState} from 'react';
import { render } from '@testing-library/react';
import Quiz from './Quiz';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import ProgressBar from './ProgressBar'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



var Result = (props) => {


    console.log(props.location.resultProps);
    let myProps = props.location.resultProps;



        if(typeof myProps === 'undefined') {
            return <Redirect to='/' />
        }


     let rating = myProps.slider;
     let voteAverage = Math.round(myProps.voteAverage);
     let moviePoster = myProps.moviePoster;
     let correct = "";


        if(rating === voteAverage) {
            correct = `${rating} is Correct!`
        }   
        else if(rating < voteAverage) {
            correct = `${rating} is Too Low!`
        }
        else if(rating > voteAverage) {
            correct = ` ${rating} is Too High!`
        }
      
        window.scrollTo(0, 0)



    return(
        <div>
            <p>{correct}</p>
            <img src={moviePoster}></img>
            <p>Average: {voteAverage}</p>
            <ProgressBar width={100} percent={voteAverage/10} rating={rating} />
            <br />
            <Link className="lets-begin" to="/quiz">Go Again</Link>
        </div>
    )
}

export default Result;