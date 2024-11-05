import React, { useEffect, useState } from "react";
import Tracklist from "./tracklist";
import Home from "./home";
import Info from "./info";

const Landing = () => {

    const [page, setPage] = useState('home')

    useEffect(()=> {

    }, [page])

    const onClick = (e) => {
        setPage(e.target.name)
    }

    return (
        <div className="landingpage">
            <div className="options">
                <button className="button" name='home' onClick={onClick} >
                Home
                </button>
                <button className="button" name='tracks' onClick={onClick} >
                Tracks
                </button>
                <button className="button" name='info' onClick={onClick} >
                Info
                </button>
            </div>
            {page === 'home' && <Home/>}
            {page === 'tracks' && <Tracklist/>}
            {page === 'info' && <Info/>}
           

        </div>

    );
};

export default Landing;


