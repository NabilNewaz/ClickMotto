import axios from 'axios';
import React from 'react';
import './css/Types.css';
import { apiKey } from '../../Config/Config';

const Types = ({ setMedia, setType }) => {

    const handleSubmit = e => {
        e.preventDefault();
        if (e.target.value !== 'Recommended') {
            axios.get(`https://api.pexels.com/v1/search?query=${e.target.value}&per_page=16&page=1`, {
                headers: {
                    Authorization: apiKey,
                },
            })
                .then(res => {
                    setMedia(res.data.photos);
                    console.log(res.data.photos)
                })
                .catch(err => console.log(err));
        }
        else {
            axios.get(`https://api.pexels.com/v1/curated?per_page=12`, {
                headers: {
                    Authorization: apiKey,
                },
            })
                .then(res => {
                    setMedia(res.data.photos);
                    console.log(res.data.photos)
                })
                .catch(err => console.log(err));
        }
    };

    const handleTypes = e => {
        if (e !== 'All' && e !== 'photos') {
            axios.get(`https://api.pexels.com/videos/search?query=${e}&per_page=12`, {
                headers: {
                    Authorization: apiKey,
                },
            })
                .then(res => {
                    setType('video')
                    setMedia(res.data.videos);
                    console.log(res.data.videos)
                })
                .catch(err => console.log(err));
        }
        else {
            axios.get(`https://api.pexels.com/v1/curated?per_page=12`, {
                headers: {
                    Authorization: apiKey,
                },
            })
                .then(res => {
                    setType('photo')
                    setMedia(res.data.photos);
                    console.log(res.data.photos)
                })
                .catch(err => console.log(err));
        }

    };

    return (
        <div className='types-container'>
            <div className='types'>
                <div onClick={() => handleTypes('All')} className='type'>
                    <p>All</p>
                </div>
                <div onClick={() => handleTypes('photos')} className='type'>
                    <p>Photos</p>
                </div>
                <div onClick={() => handleTypes('videos')} className='type'>
                    <p>Videos</p>
                </div>
                <div onClick={() => handleTypes('Freebies')} className='type'>
                    <p>Freebies</p>
                </div>
                <div onClick={() => handleTypes('360')} className='type'>
                    <p>360</p>
                </div>
            </div>
            <div>
                <form onChange={handleSubmit}>
                    <select className='filter-select' name="languages" id="lang">
                        <option defaultValue="Recommended">Recommended</option>
                        <option value="Most Recent">Most Recent</option>
                        <option value="Most Viewed">Most Viewed</option>
                        <option value="Most Downloaded">Most Downloaded</option>
                        <option value="Most Downloaded">Most Downloaded</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default Types;