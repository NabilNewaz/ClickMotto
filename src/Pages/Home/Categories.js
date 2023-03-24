import React from 'react';
import workspace from './images/workspaceimg.png';
import summer from './images/summer.png';
import city from './images/city.png';
import food from './images/food.png';
import gravity from './images/Gravity.png';
import './css/Categories.css'

const Categories = () => {
    return (
        <div>
            <div class="categories-cart">
                <div>
                    <div className='category-img'>
                        <img src={workspace} alt="" />
                    </div>
                    <div className='category-text'>
                        <p>Workspace</p>
                    </div>
                </div>
                <div>
                    <div className='category-img'>
                        <img src={summer} alt="" />
                    </div>
                    <div className='category-text'>
                        <p>Summer</p>
                    </div>
                </div>
                <div>
                    <div className='category-img'>
                        <img src={city} alt="" />
                    </div>
                    <div className='category-text'>
                        <p>City</p>
                    </div>
                </div>
                <div>
                    <div className='category-img'>
                        <img src={food} alt="" />
                    </div>
                    <div className='category-text'>
                        <p>Food</p>
                    </div>
                </div>
                <div>
                    <div className='category-img'>
                        <img src={gravity} alt="" />
                    </div>
                    <div className='category-text'>
                        <p>Gravity</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;