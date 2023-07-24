import React from 'react';
import "./TopCollageCard.css"

const TopCollageCard = ({ topsClg }) => {

    let {collageImage,collageName,ranking,researchHistory}=topsClg


    return (
        <div>
            <div className="mainCard">

                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={collageImage} alt="Shoes" /></div>
                    <div className="card-body">
                        <h2 className="card-title">{collageName}</h2>
                        <h2 className="card-title">ranking:{ranking}</h2>
                        <h2 className="card-title">researchHistory :{researchHistory}</h2>


                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopCollageCard;