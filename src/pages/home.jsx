import React from "react";
import calypso from "../media/audio/Calypso (guitair)_1.mp3"


const Home = () => {
    

    return (
        <div className="homepage">
            <h1>

            Select a button to get started!
            </h1>
            {/* <h2>
                click "Tracks" to hear some tracks and watch a video of me creating it.
            </h2>
            <h2>
                Or click "Info" to here more music I've worked on and my socials.
            </h2> */}
            {/* <h3 style={{color:'green'}} >
                My old assisnment for researching a culture's music! Mine was "calypso"
            </h3>
            <div style={{color:'green'}} >Heres the track: <audio controls >
            <source src={calypso}/>
            Your browser does not support the audio element
            </audio> </div>
            <div> Here are some demo projects you can download, I made them with all stock FL Studio plugins, so you can check it out!
            <a href="/projects/demos.rar" download>Download Demo Projects</a>

            </div> */}
            <div>
                Here is a link to sync agencies you can look into. <a href="/projects/Sync_Agent_List.pdf" > download</a>
            </div>
        </div>

    );
};

export default Home;