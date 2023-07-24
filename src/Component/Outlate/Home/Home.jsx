import React from 'react';
import "./Home.css"
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {

    let location = useLocation()
    let loginReg=location.pathname

    return (
        <div>
            
            {/* {
                loginReg === "login" || loginReg === "register" ? <Header></Header> : ""
            } */}


            <Header></Header> 
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Home;