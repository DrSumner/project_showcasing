import React, { useEffect } from "react";


const TrackInfo = (props) => {
    const {selectedTrack} = props

    return (
        <div className="trackinfopage">
            <div className="track">
                <div className="trackinfo">
            Here is the finished track "{selectedTrack.name}":
            <audio controls key={selectedTrack.music} >
            <source src={selectedTrack.music}/>
            Your browser does not support the audio element
            </audio>
            <h1>
                Here is the video of Latrell creating this track live:
            </h1>
            <video className="videos" controls key={selectedTrack.video} >
                <source src={selectedTrack.video}/>
                Your browser does not support the video element
               

            </video>
            <h4>{selectedTrack.description} 
            </h4>
                </div>
            </div>

        </div>

    );
};

export default TrackInfo;