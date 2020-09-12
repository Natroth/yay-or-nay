import React, {useEffect, useState} from 'react';
import { render } from '@testing-library/react';
import Quiz from './Quiz';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom'



const Result = (props) => {


    console.log(props.location.resultProps);
    let myProps = props.location.resultProps;



        if(typeof myProps === 'undefined') {
            return <Redirect to='/quiz' />
        }


     let rating = myProps.testvalue;

    return(
        <p>{rating}</p>
    )
}

export default Result;