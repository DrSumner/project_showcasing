import React from "react";
import lockin from "../media/audio/lock in.mp3"
import video1 from "../media/videos/zone 2.flp - FL Studio 21 2024-10-30 14-35-25.mp4"


const Track1 = () => {
    return (
        <div className="track1page">
            <div className="tracks">
                <div className="track1">
            Here is the finished track "Lock in":
            <audio controls>
            <source src={lockin}/>
            Your browser does not support the audio element
            </audio>
            <h1>
                Here is the video of Latrell creating this track live:
            </h1>
            <video className="videos" controls>
                <source src={video1}/>
                Your browser does not support the video element
               

            </video>
            <h4>unfortunately the audio cut out at 8:50, but i thought id show you a live example regardless, since a great way to learn is to watch. <br></br> 
            I can tell you the buttons and give tutorials but nothing beats a live example or doing it yourself in my opinion. 
            </h4>
                </div>
            </div>

        </div>

    );
};

export default Track1;