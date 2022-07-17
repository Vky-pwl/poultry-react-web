import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'></div>
        <div className='content'>
            {/* <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <span className='subTitle'>

            </span> */}

            <span class="eyebrow purple firm-leadership">Firm Leadership</span>
            <div class="main-content">
                {/* <h3>Statement From Morgan Stanley’s Black Managing Directors</h3>
                <span class="date">Jun 5, 2020</span>
                <p>We grieve with our colleagues, friends and families, and believe that we have the power to create long-lasting social, educational and economic change.</p> */}

            </div>

        </div>
    </div>
)

export default withRouter(MenuItem);