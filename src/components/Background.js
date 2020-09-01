import React, {useEffect} from 'react';
import blue_bg from '../media/blue_bg.mp4'



function Background() {
    const videoSource = blue_bg;

    useEffect(() => {
          var name = document.getElementById('bg_video');
         name.playbackRate = 1;
      }, []) 

    return(
       <div className="bg-container">
            <video id="bg_video" autoPlay="autoplay" loop="loop" muted >
               <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
}

export default Background;