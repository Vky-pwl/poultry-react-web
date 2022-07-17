import React from 'react';
import './about.styles.scss';

const About = () => (
    <section className='section-about'>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Will be the NEXT BIG UPGRADE you are looking for.
            </h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                {/* <h3 className="heading-tertiary u-margin-bottom-small">OUR VISION</h3>
                <p className="paragraph">
                    Curiousant's solution will be the upgrade every customer look for.
                </p> */}
                <p className="paragraph">
                    Curiousant India Private Limited is a technology oriented company that helps other enterprises to reinvent their businesses for the new digital age.
                    At Curiousant ,we have strong risk-taking, and focus on customer relationships.
                    We help customers to do business better by providing technological solutions, process-driven approach and by providing various technical services to improve their business model.
                    We believe in customer relationship.Team Curiousant is a team of dedicated team of enthusiastic and experienced professionals and technology entrepreneurs,who believe in changing the world by giving technology oriented solutions to real world problems.
                </p>
                {/* <h3 className="heading-tertiary u-margin-bottom-small">OUR MISSION</h3>
                <p className="paragraph">
                    To provide the best solutions to real world problems
                    and to help people to grow their business.
                </p> */}
                <h3 className="heading-tertiary u-margin-bottom-small">VALUES</h3>
                <p className="paragraph">
                    INNOVATION. TEAMWORK. QUALITY. EXCELLENCE
                </p>
            </div>
            <div className="col-1-of-2">
                <div className="about-bg">

                    <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                        alt="about-section-bg"
                        className="about-bg__photo"
                        src="assets/img/undraw_segment_analysis_bdn4.svg" />
                </div>
            </div>
        </div>


    </section>
)

export default About;