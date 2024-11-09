import React from "react";


const More = (props) => {
    const {info} = props

    return (
        <div className="qpage">
            <h1>
            Heres a list of over 100 songs ive worked on is the past.
            </h1>
            <h3 
            style={{color:'red'}}
            >**Warning not every song is clean**</h3>
            
                <iframe 
                title="Songs Touched by Tre"
                allow="autoplay *; encrypted-media *;" frameborder="0" height="450" 
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/playlist/3-songs-touched-by-tr%C3%A9/pl.u-oZyleeaCRMPyN2P">
                </iframe>

        </div>

    );
};

export default More;