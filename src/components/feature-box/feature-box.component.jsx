import React from 'react';
import './feature-box.styles.scss';

const FeatureBox = ({ title, key, text }) => (
    <div className="feature-box" key={key}>
        <img height='105' width='105'
            alt="feature-box__icon"
            className="feature-box__icon"
            src="assets/img/undraw_windows_q9m0.svg" />
        <h3 className="heading-tertiary u-margin-bottom-small title">{title}</h3>
        <p className="feature-box__text">
            {text}
        </p>
    </div>
)

export default FeatureBox;