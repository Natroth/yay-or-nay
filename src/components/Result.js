import React, {useEffect, useState} from 'react';
import { render } from '@testing-library/react';
import Quiz from './Quiz';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import ProgressBar from './ProgressBar'; 



var Result = (props) => {


    console.log(props.location.resultProps);
    let myProps = props.location.resultProps;



        if(typeof myProps === 'undefined') {
            return <Redirect to='/quiz' />
        }


     let rating = myProps.slider;
     let voteAverage = Math.round(myProps.voteAverage);

    return(
        <div>
            <p>{rating}</p>
            <p>{voteAverage}</p>
            <ProgressBar width={100} percent={voteAverage/10} rating={rating} />
        </div>
    )
}

export default Result;