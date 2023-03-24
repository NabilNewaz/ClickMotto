import axios from 'axios';
import { useEffect, useState } from 'react';
// import Masonry from 'react-masonry-css';
import './css/Gallery.css'

import { apiKey } from '../../Config/Config';

const Gallery = () => {
    const [media, setMedia] = useState([]);

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
    }, []);

    console.log(media)

    return (
        <div className='gallery'>
            <p className='top-categories'>Top categories</p>
            <div className='gallery-img'>
                {media.map((photo) => (
                    <img key={photo.id} src={photo.src.large} alt={photo.alt} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
