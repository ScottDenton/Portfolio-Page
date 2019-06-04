import React from 'react'
import Helmet from 'react-helmet'
import ReactContactForm from 'react-mail-form';

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/EB-thumbnail.png'
import thumb02 from '../assets/images/thumbs/CS-thumbnail.png'

// Exercise buddy full size photos/screenshots
import full01 from '../assets/images/fulls/eb-mobile.png'
import full02 from '../assets/images/fulls/eb-full.png'
import full03 from '../assets/images/fulls/eb-workout.png'

//CodeStream full size photos/screenshots
import full04 from '../assets/images/fulls/cs-main.png'
import full05 from '../assets/images/fulls/cs-full.png'
import full06 from '../assets/images/fulls/cs-streams.png'

const EXERCICSE_BUDDY_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Exercise Buddy', description: 'A mobile responsive fitness tracking web app focused on increasing users performance.', siteLink: 'https://exercise-buddy.herokuapp.com/'},
    { id: '2', src: full02},
    { id: '3', src: full03}
];

const CODESTREAM_IMAGES = [
    { id: '4', src: full04, thumbnail: thumb02, caption: 'CodeStream', description: 'A Web app to showcase and promote top science and technology live streams and archived videos', siteLink: 'https://code-stream.herokuapp.com/'},
    { id: '2', src: full05},
    { id: '3', src: full06}
];

class HomeIndex extends React.Component {
    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Scott Denton"
        const siteDescription = "Scott Denton - Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">
                    <section id="one">
                        <header className="major">
                            <h2>Scott Denton - Software Developer</h2>
                        </header>
                        <p>
                          Former Police Officer turned full stack web developer. In addition to proficiency in Ruby on Rails, JavaScript and React/Redux, I bring strong interpersonal, public speaking and communication skills, experience managing teams and extensive knowledge in breaking down problems into their component parts.</p>
                        <ul className="actions">
                            <li><a href="#about_me" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="recent_work">
                        <h2>Recent Work</h2>

                        <Gallery images={EXERCICSE_BUDDY_IMAGES.map(({ id, src, thumbnail, caption, description, siteLink }) => ({
                            src,
                            thumbnail,
                            caption: <a href={siteLink} target='blank'> {caption} </a>,
                            description,
                        }))} />

                      <Gallery images={CODESTREAM_IMAGES.map(({ id, src, thumbnail, caption, description, siteLink }) => ({
                            src,
                            thumbnail,
                            caption: <a href={siteLink} target='blank'> {caption} </a>,
                            description,
                        }))} />
                    </section>

                    <section id='about_me'>
                      <h2> About Me </h2>
                      <p>
                        Prior to moving to Seattle in January 2018 I worked the previous 6 years as a Police officer in Western Australia. I found I enjoyed the work but after 6 years of working night shifts and missing out on holidays and special occasions I realized that I never really had a passion for the job and was only continuing to do it because I was unsure what I really wanted to do. This all changed shortly after moving to Seattle.
                      </p>

                      <p>
                        After moving to Seattle, for the first time in many years, I found myself with a large amount of free time and was able explore new hobbies and interests. I decided that I wanted to learn something new, possibly a different language. Thats when my wife suggested that I might be interested in learning to code. What initially started off as a couple of hours here and there completing online courses very soon turned into a full-time hobby.  It wasn't long after that I realized that I didn't want it to be just another hobby and that I wanted to pursue it as a career.
                      </p>
                      <p>
                        Over the next few months I spent as much time as I could teaching myself the fundamentals of web development (HTML, CSS, JavaScript and Ruby), before enrolling in Flatiron Schools Software Engineering course. The program allowed me to greatly improve my skills with extensive course work primarily focused on Ruby on Rails, JavaScript and React.
                      </p>
                      <p>
                        My past studies include a Bachelors Degree with a double major in Economics and Finance from Curtin University of technology. I also have a number of  qualifications from my time as a Police Officer including a diploma in Public Safety.
                      </p>

                      <p>
                        I am currently looking for a Software Engineering role that will both challenge me and enable me to continue to learn and improve on my growing skillset as a full stack developer. Although my current personal projects are focused on using Rails and React, I am willing and excited to learn any technologies required.
                      </p>
                    </section>

                    <section id="contact">
                        <h2>Get In Touch</h2>
                        <p>If you have any questions or want to talk about my work or experiences, my contact details are below.</p>
                        <div className="row">
                          <div className="4u 12u$(small)">
                            <ul className="labeled-icons">
                              <li>
                                  <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                  206-398-9439
                              </li>
                              <li>
                                  <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                  <a href="mailto:scott.denton.sde@gmail.com">scott.denton.sde@gmail.com</a>
                              </li>
                            </ul>
                            <ul className='icons'>
                                <li><a href="https://www.linkedin.com/in/scott-denton-063152178/" target = 'blank' className="icon fa-linkedin"><span className="label">Twitter</span></a></li>
                                <li><a href="https://github.com/scottdenton" target = 'blank' className="icon fa-github"><span className="label">Github</span></a></li>
                            </ul>
                          </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex
