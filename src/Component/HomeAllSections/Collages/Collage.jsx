import React, { useEffect, useState } from 'react';
import "./Collage.css"
import TopCollageCard from '../TopCollageCard/TopCollageCard';

const Collage = () => {

    let [top, setTop] = useState([])

    useEffect(() => {
        fetch("TopCollage.json")
            .then(res => res.json())
            .then(data => setTop(data))
    }, [])




    return (
        <div>
            <div className="title sm:w-1/2 mx-auto">
                <h2>Top Collage</h2>
                <p>This bangladesh top university</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-4">

                {
                    top.map(tops => <TopCollageCard topsClg={tops}></TopCollageCard>)
                }
            </div>


        </div>
    );
};

export default Collage;