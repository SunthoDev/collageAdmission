import React from 'react';
import Banner from '../../HomeAllSections/Banner/Banner';
import Collage from '../../HomeAllSections/Collages/Collage';
import GallerySection from '../../HomeAllSections/GallerySection/GallerySection';

const Main = () => {
    return (
        <div>
            <Banner></Banner>

            <div className=" sm:px-20">
                <Collage></Collage>
                <GallerySection></GallerySection>
            </div>
        </div>
    );
};

export default Main;