import React from 'react';
import workspace from './images/workspaceimg.png';
import summer from './images/summer.png';
import city from './images/city.png';
import food from './images/food.png';
import gravity from './images/Gravity.png';
import './css/Categories.css'
import axios from 'axios';
import { apiKey } from '../../Config/Config';

const Categories = ({ setMedia }) => {
    const handleFilter = query => {
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
        <div>
            <div class="categories-cart">
                <div onClick={() => handleFilter('Workspace')} className='category-container'>
                    <div className='category-img'>
                        <img src={workspace} alt="" />
                    </div>
                    <div className='category-text'>
                        <p className='centered'>Workspace</p>
                    </div>
                </div>
                <div onClick={() => handleFilter('summer')} className='category-container'>
                    <div className='category-img'>
                        <img src={summer} alt="" />
                    </div>
                    <div className='category-text'>
                        <p className='centered'>Summer</p>
                    </div>
                </div>
                <div onClick={() => handleFilter('city')} className='category-container'>
                    <div className='category-img'>
                        <img src={city} alt="" />
                    </div>
                    <div className='category-text'>
                        <p className='centered'>City</p>
                    </div>
                </div>
                <div onClick={() => handleFilter('food')} className='category-container'>
                    <div className='category-img'>
                        <img src={food} alt="" />
                    </div>
                    <div className='category-text'>
                        <p className='centered'>Food</p>
                    </div>
                </div>
                <div onClick={() => handleFilter('Gravity')} className='category-container'>
                    <div className='category-img'>
                        <img src={gravity} alt="" />
                    </div>
                    <div className='category-text'>
                        <p className='centered'>Gravity</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;