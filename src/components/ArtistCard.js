import React, { useState, useEffect } from 'react';
import { api } from '../assets/api';

function ArtistCard(props) {
    const [ info, setInfo ] = useState({});
    const { name, playcount } = props.artist;
    
    const getArtistImage = () => {
        api.call.getArtistInfo(name)
        .then(data => {
            setInfo(data);
        })
    };

    useEffect(() =>{
        getArtistImage(name)
    })
   
    return(
        <div id="artist-card">
        <h3>{name}</h3>
        <h6>{playcount}</h6>
        </div>
    )
}

export default ArtistCard;