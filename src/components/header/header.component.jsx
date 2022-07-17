import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/poultry-logo.svg'
//import { auth } from 'firebase';

const Header = ({ currentUser }) => (
    <header className='header'>
        {/* <div className='header__logo-box'>
            <img src='' alt='poultry-logo' className='header__logo' />
        </div> */}
        <div className='header__text-box'>
            <h1 className="heading-primary">
                <span className="heading-primary--main">PAVALECO</span>
                <span className="heading-primary--sub"></span>
            </h1>
        </div>
        <div className='row header__img-box'>
            <div className='col-1-of-4 header__moveInLeft' >
                <img className='header__img' src='assets/img/undraw_browsing_urt9.svg' />
            </div>
            <div className='col-1-of-4 header__moveInLeft' >
                <img className='header__img' src='assets/img/undraw_master_plan_95wa.svg' />
            </div>
            <div className='col-1-of-4 header__moveInRight'>
                <img className='header__img' src='assets/img/undraw_tabs_jf82.svg' />
            </div>
            <div className='col-1-of-4 header__moveInRight'>
                <img className='header__img' src='assets/img/undraw_heatmap_uyye.svg' />
            </div>
        </div>
    </header>

)

export default Header;