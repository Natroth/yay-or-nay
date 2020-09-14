import React from 'react';

var ProgressBar = ({ width, percent, rating }) => {

    const [value, setValue] = React.useState(0);
    const [correct, setCorrect] = React.useState("");

  function ifCorrect() {
    if(rating === percent*10) {
        setCorrect("correct")
    }   
    else if(rating < percent*10) {
        setCorrect("lower")
    }
    else if(rating> percent*10) {
        setCorrect("higher")
    }
  }


    React.useEffect(() => {
      setValue(percent * width);
      ifCorrect();  

    });
  

    return (
      <div>
        <div className="progress-div" style={{ width: `${width}%` }}>
          <div style={{ width: `${value}%` }} className="progress" />
          <div>{correct}</div>
        </div>
      </div>
    );
  };

export default ProgressBar;