import React, { useState } from 'react';
import Gallery from './Gallery';
import PhotoOfDay from './PhotoOfDay';

const Home = () => {
    const [media, setMedia] = useState([]);
    const [type, setType] = useState([]);
    return (
        <div>
            <PhotoOfDay setMedia={setMedia} ></PhotoOfDay>
            <Gallery media={media} setMedia={setMedia} type={type} setType={setType} ></Gallery>
        </div>
    );
};

export default Home;