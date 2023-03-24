import React, { useState } from 'react';
import Gallery from './Gallery';
import PhotoOfDay from './PhotoOfDay';

const Home = () => {
    const [media, setMedia] = useState([]);
    return (
        <div>
            <PhotoOfDay setMedia={setMedia} ></PhotoOfDay>
            <Gallery media={media} setMedia={setMedia} ></Gallery>
        </div>
    );
};

export default Home;