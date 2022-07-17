import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/poultry-logo.svg'
//import { auth } from 'firebase';

const Header = ({ currentUser }) => (
    <header className='header'>
        <div className='header__logo-box'>
            <img src='assets/img/logo.png' alt='poultry-logo' className='header__logo' />
        </div>
        <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="assets/img/video.mp4" type="video/mp4"/>
                        <source src="assets/img/video.webm" type="video/webm"/>
                        Your browser is not supported!
                    </video>
        </div>
        <div className='header__text-box'>
            <h1 className="heading-primary">
                <span className="heading-primary--main">POULTRY</span>
                <span className="heading-primary--sub"></span>
            </h1>
        </div>
        
    </header>

)

export default Header;