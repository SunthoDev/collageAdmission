import React, { useEffect, useState } from 'react';
import "./Collage.css"

const Collage = () => {

    let [collage,setCollage]=useState([])

    // useEffect=(()=>{
    //     fetch("Collage.json")
    //     .then(res=> res.json())
    //     .then(collageData => console.log(collageData))
    // },[])

    // console.log(collage)


    return (
        <div>
            <div className="title sm:w-1/2 mx-auto">
                <h2>Top Collage</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dicta fuga hic soluta excepturi exercitationem.</p>
            </div>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam! Aliquam debitis praesentium quo excepturi eum itaque nesciunt voluptates nam, facere exercitationem necessitatibus consequuntur. Veritatis explicabo ipsam, maxime facilis corporis autem rem! A dolores sit odit, ad sunt assumenda qui ducimus neque fuga non quisquam recusandae molestias veniam provident, nihil modi vero nulla placeat officiis. Debitis vel nostrum, impedit non a mollitia id dicta, voluptas quibusdam, iste nesciunt dolore quisquam ipsam. Provident, laborum sequi ipsa sapiente quis quam ut vel ullam magni sit, dicta obcaecati repellat quae numquam dolor perspiciatis neque earum laboriosam. Optio voluptate facilis voluptatem quod saepe debitis corrupti itaque necessitatibus quisquam minima, et quaerat. Ipsa laboriosam delectus veniam! Perferendis deserunt, nisi dolore dolores hic voluptas voluptatum voluptatem labore exercitationem nesciunt consectetur nulla blanditiis eligendi laboriosam ex odit, quidem quia assumenda harum. Rerum, provident! Necessitatibus iusto similique ipsum sunt voluptas pariatur quod doloribus assumenda possimus ullam? Magni commodi esse soluta eum fuga officiis aliquid illo molestiae, eaque dolore similique quaerat minima quasi, illum distinctio autem maxime? Id labore, non quod aut quas iure officia neque voluptates recusandae laboriosam dicta temporibus facere veritatis vero omnis. Natus, ad, reprehenderit numquam, veniam suscipit inventore non error porro alias nihil facilis quia.</p>

        </div>
    );
};

export default Collage;