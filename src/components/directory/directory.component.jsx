import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'exams',
                    imageUrl: 'assets/img/undraw_exams_g4ow.svg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'results',
                    imageUrl: 'assets/img/undraw_hiring_cyhs.svg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'mapping',
                    imageUrl: 'assets/img/undraw_customer_survey_f9ur.svg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'analysis',
                    imageUrl: 'assets/img/undraw_business_plan_5i9d.svg',
                    id: 4,
                    linkUrl: 'shop/womens',
                }

            ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, title, imageUrl, size }) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)

                }

            </div>
        );
    }
}

export default Directory;