import React from 'react';
import "./Footer.css"
import graguationsCap from "../../../assets/gra.png"

const Footer = () => {
    return (
        <div>

            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-[100px] h-[80px]' src={graguationsCap} alt="" />
                    <p>Varsity Admission Ltd.<br />Providing reliable tech since 1993</p>
                </div>
                <div className='footerSections'>
                    <span className="FooterTitle">Services</span>
                    <a className="link link-hover">BSC</a>
                    <a className="link link-hover">CSE</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='footerSections'>
                    <span className="FooterTitle">Varsity</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='footerSections'>
                    <span className="FooterTitle">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;