import React, { useEffect, useState } from 'react';
import "./AllCollage.css"
import AllCollageCard from '../AllCollageCard/AllCollageCard';

const AllCollage = () => {

    let [allCollage,setAllCollage]=useState([])

    useEffect(()=>{
        fetch("Collage.json")
        .then(res=> res.json())
        .then(data=> setAllCollage(data))
    },[])

    return (
        <div className='grid sm:grid-cols-3 gap-5  mx-4 sm:mx-20 py-20'>
            
            {
                allCollage.map(collage => <AllCollageCard clgData={collage}></AllCollageCard>)
            }



        </div>
    );
};

export default AllCollage;