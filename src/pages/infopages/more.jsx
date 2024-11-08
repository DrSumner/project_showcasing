import React from "react";


const More = (props) => {
    const {info} = props

    return (
        <div className="qpage">
            <h1>
            Heres a list of music ive worked on is the past.
            </h1>
            <ul>
                <li> <a href="https://hyperbits.com/eq-cheat-sheet/">Eq cheet sheet</a>  </li>
                <li> cut more than you boost, boosting can add many unwanted artifacts so be sure to stay consious when boosting.</li>
                <li> Cut narrow and boost wide, this ideology can help you better narrow down unwanted freqs <br></br> without removing the good stuff.  </li>
                <li>pt2 ^ boosting wide will help prevent adding weird artifacts when boosting. boosting sharp can cause werid freqs to be to dominant.</li>
            </ul>
        </div>

    );
};

export default More;