import React, { useEffect } from "react";
import { useState } from "react";
import lockin from "../media/audio/lock in.mp3"
import video1 from "../media/videos/zone 2.flp - FL Studio 21 2024-10-30 14-35-25.mp4"
import redd from "../media/audio/Red.wav"
import video2 from "../media/videos/1104.mp4"
import TrackInfo from "./trackinfo";

const Tracklist = () =>{

    const tracks = [
        {
            id:0,
            name:"Lock in",
            music: lockin ,
            video: video1,
            description: "unfortunately the audio cut out at 8:50, but i thought id show you a live example regardless, since a great way to learn is to watch. I can tell you the buttons and give tutorials but nothing beats a live example or doing it yourself in my opinion."   
        },
        {
            id:1,
            name:"Red",
            music: redd ,
            video: video2,
            description: "I had to lower the quality to keep it a certain size."
        }
    ]

    //const [values, setValues] = useState()
    const [selectedTrack, setSelectedTrack] = useState(tracks[0])

    useEffect(() => {

    }, [selectedTrack])

    const selectTrack = (e) =>{
        const currentTrack = e.target.value
        tracks.forEach((track) => track.name === currentTrack ? setSelectedTrack(track) : null )
    }

    return (
        <div>
            <h1>
                select a track:
            </h1>
            <label for="tracks">Choose a track:</label>
            <select name="tracks" id="tracks" onChange={selectTrack} >
                {tracks.map((track) => (
                    <option key={track.id} value={track.name} >
                        {track.name}
                    </option>
                ))}
            </select>
            <TrackInfo selectedTrack={selectedTrack} />
        </div>
    )
}

export default Tracklist