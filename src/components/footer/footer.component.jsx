import React from 'react';
import './footer.styles.scss';


// import { ReactComponent as Logo } from '../../assets/poutry-logo.svg'
//import { auth } from 'firebase';

const Footer = ({ currentUser }) => (
    <footer className='footer'>
        <div className="row">
            <div className="col-1-of-4">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">
                            INDIA
                        </li>
                        <li className="footer__item">
                            Patna,
                        </li>
                        <li className="footer__item">
                            Bhiar, PIN 800001
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">
                            CONTACT
                        </li>
                        <li className="footer__item">

                        </li>
                        <li className="footer__item">
                            +91 999999999
                        </li>
                    </ul>
                </div>
            </div>



            <div className="col-1-of-4">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">

                            <picture className="social_logo">
                                <source srcSet="assets/img/google_icon.svg, assets/img/google_icon.svg"
                                    media="(max-width: 37.5em)" />
                                <img srcSet="assets/img/google_icon.svg, assets/img/google_icon.svg" height="24" width="24" alt="Full logo" src="assets/img/google_icon.svg" />
                            </picture>
                            <a href='https://www.facebook.com' target='_blank'>
                                <picture className="social_logo">
                                    <source srcSet="assets/img/facebook_square_color.svg, assets/img/facebook_square_color.svg"
                                        media="(max-width: 37.5em)" />
                                    <img srcSet="assets/img/facebook_square_color.svg, assets/img/facebook_square_color.svg" height="24" width="24" alt="Full logo" src="assets/img/facebook_square_color.svg" />
                                </picture>
                            </a>
                           
                        </li>

                    </ul>
                </div>
            </div>
            <div className="col-1-of-4">
                <p className="footer__copyright">
                    Copyright @ Polutry India Pvt. Ltd. 2020
                </p>
            </div>


        </div>
    </footer>
)

export default Footer;