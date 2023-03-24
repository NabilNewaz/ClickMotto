import axios from 'axios';
import React, { useState } from 'react';
import { apiKey } from '../../Config/Config';
import './css/SearchBar.css';
import searchbtn from './images/searchbtn.png';

const SearchBar = ({ setMedia }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=16&page=1`, {
            headers: {
                Authorization: apiKey,
            },
        })
            .then(res => {
                setMedia(res.data.photos);
                console.log(res.data.photos)
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for photos..." onChange={e => setQuery(e.target.value)} />
                <button type="submit"><img src={searchbtn} alt="searchbtn" /></button>
            </form>
        </div>
    );
};

export default SearchBar;