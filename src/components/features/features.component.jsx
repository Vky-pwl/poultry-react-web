import React from 'react';
import './features.styles.scss';
import FeatureBox from '../../components/feature-box/feature-box.component';

class Features extends React.Component {
    constructor() {
        super();

        this.state = {
            features: [
                {
                    title: 'antomation',
                    imageUrl: 'assets/img/antomation.jpg',
                    id: 3,
                    linkUrl: 'product/antomation',
                    text: 'Antomation is the next level streamlining of the workflow which subsequently affects the workforce with improved efficiency'
                },
                {
                    title: 'antrance',
                    imageUrl: 'assets/img/antrance-b.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'product/antrance',
                    text: 'An online E-learing application for the curious students to test their knowledge by evaluating them using huge number of test data sets from various exams.'
                },
                {
                    title: 'antronics',
                    imageUrl: 'assets/img/antronics.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'product/antronics',
                    text: 'IoT driven solutions to updgrade and tranform the existing system with new standards. Helps to make effective decision by processing real time data'
                }
            ]
        }
    }
    render() {
        return (
            <section className="section-features">

                <div className="row">

                    {
                        this.state.features.map(({ id, title, imageUrl, size, text }) => {
                            return (<div className="col-1-of-3">
                                <FeatureBox key={id} title={title} imageUrl={imageUrl} size={size} text={text} />
                            </div>)
                        })

                    }
                </div>
            </section>
        );
    }
}

export default Features;