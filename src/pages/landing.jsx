import React from "react";
import Track1 from "./track1";

const Landing = () => {
    return (
        <div className="landingpage">
            <div className="options">
                <h2 className="option">
                Home
                </h2>
                <h2 className="option">
                Tracks
                </h2>
                <h2 className="option">
                Info
                </h2>
            </div>
           <Track1/>

        </div>

    );
};

export default Landing;


