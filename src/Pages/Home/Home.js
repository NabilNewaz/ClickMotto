import React from 'react';
import Gallery from './Gallery';
import PhotoOfDay from './PhotoOfDay';

const Home = () => {
    return (
        <div>
            <PhotoOfDay></PhotoOfDay>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;