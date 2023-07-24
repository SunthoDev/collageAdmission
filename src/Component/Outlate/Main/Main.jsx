import React from 'react';
import Banner from '../../HomeAllSections/Banner/Banner';
import Collage from '../../HomeAllSections/Collages/Collage';

const Main = () => {
    return (
        <div>
            <Banner></Banner>

            <div className=" sm:px-20">
                <Collage></Collage>
            </div>
        </div>
    );
};

export default Main;