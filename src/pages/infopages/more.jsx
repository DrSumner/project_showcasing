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
            <ul>
                
                <li>
                <iframe 
                title="Songs Touched by Tre"
                allow="autoplay *; encrypted-media *;" frameborder="0" height="450" 
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/playlist/3-songs-touched-by-tr%C3%A9/pl.u-oZyleeaCRMPyN2P"></iframe>
                </li>

                {/* <li>
                <iframe 
                title="Need Myself - $oL"
                allow="autoplay *; encrypted-media *;" frameborder="0" height="150" 
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/album/need-myself/1601205213?i=1601205551">
                </iframe>
                </li>

                <li>
                <iframe 
                title="Again - YBK"
                allow="autoplay *; encrypted-media *;" frameborder="0" height="150" 
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/album/again/1580432272?i=1580432277">
                </iframe>
                </li>

                <li>
                <iframe 
                title="Over Again - IsthatAvo"
                allow="autoplay *; encrypted-media *;" 
                frameborder="0" height="150" 
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/album/over-again/1535774552?i=1535774553">
                </iframe>
                </li>

                <li>
                <iframe 
                title="The Resistance - Drake"
                allow="autoplay *; encrypted-media *;" 
                frameborder="0" 
                height="150" 
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/album/the-resistance/1440762388?i=1440762512">
                </iframe>
                </li> */}
            </ul>
        </div>

    );
};

export default More;