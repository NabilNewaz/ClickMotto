import axios from 'axios';
import { useEffect, useState } from 'react';
// import Masonry from 'react-masonry-css';
import './css/Gallery.css'
import avater from './images/img_avatar.png';
import download from './images/download.png';

import { apiKey } from '../../Config/Config';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const Gallery = ({ media, setMedia }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            const res = await axios.get(`https://api.pexels.com/v1/curated?per_page=12`, {
                headers: {
                    Authorization: apiKey,
                },
            });
            setMedia(res.data.photos);
        };
        fetchPhotos();
    }, [setMedia]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get(`https://api.pexels.com/v1/Photos/categories`, {
                headers: {
                    Authorization: apiKey,
                },
            });
            setCategories(res);
            // const options = res.data.categories.map((category) => ({
            //     label: category.name,
            //     value: category.id,
            // }));
            // setCategories(options);
        };
        fetchCategories();
    }, []);

    console.log(categories)

    return (
        <div className='gallery'>
            <div>
                <p className='top-categories'>Top categories</p>
                <Categories></Categories>
            </div>
            <div className='gallery-img'>
                {media.map((photo) => (
                    <div className='container'>
                        <img key={photo.id} src={photo.src.large} alt={photo.alt} />
                        <div className="overlay">
                            <div>
                                <img src={avater} className="avatar" alt="Avatar" />
                                <div className="text">{photo.photographer}</div>
                                <Link to={photo.src.original}><img className='download-btn' src={download} alt="download" /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
