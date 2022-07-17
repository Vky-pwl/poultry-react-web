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
                            R54, Malviya Nagar,
                        </li>
                        <li className="footer__item">
                            New Delhi, PIN 110017
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
                            +91 6364420838
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
                            <picture className="social_logo">
                                <source srcSet="assets/img/linkedin_square_color.svg, assets/img/linkedin_square_color.svg"
                                    media="(max-width: 37.5em)" />
                                <img srcSet="assets/img/linkedin_square_color.svg, assets/img/linkedin_square_color.svg" height="24" width="24" alt="Full logo" src="assets/img/linkedin_square_color.svg" />
                            </picture>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="col-1-of-4">
                <p className="footer__copyright">
                    Copyright @ Curious Ant India Pvt. Ltd. 2020
                </p>
            </div>


        </div>
    </footer>
)

export default Footer;