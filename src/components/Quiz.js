import React, {useEffect, useState} from 'react';
import { FaThumbsUp, FaThumbsDown, FaRandom } from 'react-icons/fa';
import DiscreteSlider from './Slider';
import Result from './Result';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Quiz() {



    let [pageNum, setPageNum] = useState("");
    let [thisMovie, setThisMovie] = useState("");
    let [moviePoster, setMoviePoster] = useState("");
    let [sliderValue, setSliderValue] = useState("");

    let myQuery = `https://api.themoviedb.org/3/movie/popular?api_key=6f483d8afd56f030d7d97f6492987784&language=en-US&page=${pageNum}`;
  
    let randPage = Math.floor(Math.random() * 100) + 1; 
    let randMovie = Math.floor(Math.random() * 19); 
  
    async function getInfo() {
     setPageNum(randPage); 
     let response = await fetch(myQuery);
     let data = await response.json();
      console.log(data.results);
     let thisMovie = data.results[randMovie];
      console.log(thisMovie);
      setThisMovie(thisMovie);  
      setMoviePoster("https://image.tmdb.org/t/p/w300" + thisMovie.poster_path);
    }
  
    useEffect(() => {
       getInfo()
    }, []) 

    function getData(val){
        // do not forget to bind getData in constructor
        console.log(val);
        setSliderValue(val);
    }

    function getSliderVal() {
        console.log(sliderValue)
    }


    return(
       <div>
           <img src={moviePoster}></img>
           <p>{thisMovie.title}</p>
            
            <div className="vote-wrap">
   {/*             <FaThumbsUp className="thumb t-up" />
                <FaThumbsDown className="thumb t-down" /> */}
                <DiscreteSlider sendData={getData} />
                <FaRandom
            onClick={getInfo}
            className="reroll thumb"
            />
            <button
              onClick={getSliderVal} 
             >Send</button>
            
             <Link to={{
                 pathname:'/result',
                 resultProps: {
                     slider: sliderValue,
                     voteAverage: thisMovie.vote_average
                 }
             }}>Find Out</Link>
            </div>
        </div>
    );
}

export default Quiz;