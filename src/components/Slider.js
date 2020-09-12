import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


export default function DiscreteSlider(props) {
   
    function valuetext(value) {
        
        return(value);
      }
     
     function getValue(value) {
       return(props.sendData(value))
     } 

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Rating
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={getValue}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />

    </div>
  );
}