import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import { api } from '../assets/api.js';

function LastFM() {
    const [scrobbles, setScrobbles] = useState({});
    const [fetched, setFetched] = useState(false);

    const scrobbleMapper = (array) => {
        return array.map((artist, index) => {
                return <ArtistCard artist={artist} key={index} />
        });
    };

    const getScrobbles = () => {
        api.call.getWeeklyArtistChart()
        .then(data => {
            setScrobbles(data.weeklyartistchart.artist);
            setFetched(true);
    })};

    useEffect(() =>{
        getScrobbles()
    }, [])

    return(
        <>
        {fetched ? scrobbleMapper(scrobbles) : <h1>Loading</h1>}
        </>
    )
};

export default LastFM;