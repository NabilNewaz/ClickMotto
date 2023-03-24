import React, { useEffect, useState } from 'react';
import './css/PhotoOfDay.css';
import axios from 'axios';
import { apiKey } from '../../Config/Config';
import SearchBar from './SearchBar';

const PhotoOfDay = ({ setMedia }) => {
    const [photoData, setPhotoData] = useState([]);
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        const fetchPhoto = async () => {
            const res = await axios.get(`https://api.pexels.com/v1/curated?per_page=1`, {
                headers: {
                    Authorization: apiKey,
                },
            });
            setPhotoData(res.data.photos[0]);
            setPhoto(res.data.photos[0].src.landscape);
        };
        fetchPhoto();
    }, []);

    return (
        <div className='home-container'>
            <div className='banner-image'>
                <img src={photo} alt="banner" />
                <div className='banner-text'>
                    <p>Your local source of high quality images and videos directly from their creators</p>
                </div>
                <SearchBar setMedia={setMedia}></SearchBar>
                <p className='banner-photographer-text'>Photo of the Day <span className='photographer-by-text'>By </span>{photoData.photographer}</p>
            </div>
        </div>
    );
};

export default PhotoOfDay;