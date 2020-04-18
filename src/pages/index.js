import React from 'react'
import Helmet from 'react-helmet'

import Resume from '../components/Scott-Denton-Resume.pdf'

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
                          Full stack Ruby on Rails developer with professional experience across the complete development life cycle of the worlds largest hospitality job board. In addition to proficiency in Ruby on Rails, JavaScript/Jquery and experience in React/Redux, I bring strong interpersonal, public speaking and communication skills, experience managing teams and extensive knowledge in breaking down problems into their component parts.</p>
                        <ul className="actions">
                            <li><a href="#about_me" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="recent_work">
                      <h2>Recent Work</h2>
                        <h3>Custom Career Sites </h3>
                        <p> Whilst working at <a href="#hospitality-online">Hospitality Online</a> I was responsible for designing, building and maintaining custom career sites. These are fully managed sites designed to offer a seamless transition from a clients own website to our custom built career site, giving the user the feeling that they never left the clients original site. These sites were all built with Ruby on Rails, with some being built from the ground up with custom CSS and Javascript/Jquery, whilst others used a combination of custom CSS and JavaScript and the clients existing stylesheets and scripts. </p>

                        <p> During my time at Hospitality Online, I contributed to the buildling and maintenance of over 20 career sites. This included making updates and building new features at client requests, bug fixes and general code maintenance. Below are some examples of sites that I have developed and currently maintain.  </p>
                        <ul class="cjb-examples">
                          <li>
                            <a href="https://careers.thehotelgroup.com/" target="blank">The Hotel Group</a>
                          </li>
                          <li>
                            <a href="https://careers.ingrouphospitality.com/" target="blank">Ingroup Hospitality</a>
                          </li>
                          <li>
                            <a href="https://careers.pacificpalmsresort.com/" target="blank">Pacific Palms Resort</a>
                          </li>
                          <li>
                            <a href="https://careers.scottsdaleplaza.com/" target="blank">The Scottsdale Plaza Resort</a>
                          </li>
                        </ul>

                        <h3>Projects</h3>

                        <Gallery images={EXERCICSE_BUDDY_IMAGES.map(({ id, src, thumbnail, caption, siteLink }) => ({
                            src,
                            thumbnail,
                            caption: <a href={siteLink} target='blank'> {caption} </a>,
                        }))} />
                        <p> A mobile responsive fitness tracking web app focused on increasing users performance.
                          <ul>
                            <li>
                              Developed Rails API backend with endpoints for users, workouts and individual exercises.
                            </li>
                            <li>
                              Utilized WGER API to pull and parse approved exercise data.
                            </li>
                            <li>
                              Built user interface with React and custom CSS.
                            </li>
                            <li>
                              Implemented React Router for state management and site navigation.
                            </li>
                            <li>
                              Utilized BCrypt and local storage for user authentication.
                            </li>
                          </ul>
                          <a href="https://vimeo.com/334182434" target="_blank">Video Demo</a>
                        </p>
                      <hr/>

                      <Gallery images={CODESTREAM_IMAGES.map(({ id, src, thumbnail, caption, siteLink }) => ({
                            src,
                            thumbnail,
                            caption: <a href={siteLink} target='blank'> {caption} </a>
                        }))} />
                        <p> A web app to showcase and promote top science and technology live streams and archived videos.
                          <ul>
                            <li>
                              Implemented Rails API backend with endpoints for users, live streams, videos and favorites.
                            </li>
                            <li>
                              Employed Twitch API to pull up to date Live Stream data.
                            </li>
                            <li>
                              Designed user interface with React, Bootstrap and custom CSS.
                            </li>
                            <li>
                              Utilized Heroku for deployment of both front and back ends.
                            </li>
                          </ul>
                        </p>
                    </section>

                    <section id='about_me'>
                      <div id="employementHistory">
                        <h2>Employment History </h2>
                        <h3 id="hospitality-online">Hospitality Online,</h3><i>Seattle, Washington</i>
                        <h4>Ruby on Rails Developer, <i>July 2019 - present</i> </h4>
                        <p>
                          Full stack ruby on rails developer working in a small agile development team, building and maintaining the largest hospitality job board in the world with over 2 million members and over 20 million site visitors annually.
                        </p>
                        <ul>
                          <li>
                            Designed and built custom job sites and employee onboarding software for some of the largest hotel management companies in the world. From design to implementation and ongoing maintenance/updates based on customer feedback. With a focus on building a seamless transition from a customers site to our managed career site by fully matching the customers styles and features, using a combination of customer sourced scripts and stylesheets and custom CSS and Javascript/Jquery.
                          </li>
                          <li>
                            Responsible for building a number of new features, including customer facing products, tools for sales and admin staff and developer tools.
                            Responsible for collating data from a large number of sources including API’s and custom built scrapers, predominantly with Nokogiri and HTTParty, for building new sites and to increase the number of opportunities available to users.
                          </li>
                          <li>
                            Responsible for increasing test coverage across entire app, writing hundreds of new tests using Capybara and RSpec.
                          </li>
                          <li>
                            Assisted in training new junior developers and interns in best practices and in conducting code reviews.
                          </li>
                         </ul>

                        <h3>West Australian Police,<i> Perth, Western Australia</i></h3>
                        <h4>First Class Constable, <i>November 2011 - January 2019</i> </h4>
                        <p>
                          Former Police Officer with seven years of experience in investigation, crime prevention and building relationships within a diverse community.
                        </p>
                        <ul>
                          <li>
                            Led a team as acting Sergeant of seven officers with responsibilities ranging from managing crime scenes and active incidents, to preparing court paperwork and rostering.
                          </li>
                          <li>
                            Experienced working long hours in very high stress environments whilst maintaining efficiency and productivity.
                          </li>
                          <li>
                            Responsible for safety and training of junior officers for over four years.
                          </li>
                          <li>
                            Highly experienced in conflict resolution, including interviewing, active listening, mediation and problem solving.
                          </li>
                          <li>
                            Skilled in time management and consistently achieving goals and milestones.
                          </li>
                          <li>
                             Skilled in public speaking to various groups including, team briefings, presenting evidence in Supreme Court, managing crowd control incidents and leading tour groups.
                          </li>
                        </ul>
                      </div>

                      <div id="education">
                        <h2> Education </h2>
                        <h3> Software Engineering</h3>
                        <h4> <i>Flatiron School</i> - Seattle, Washington - 2019</h4>
                        <p> Studied full stack web development and fundamentals of programming, including data structures, algorithms, SQL, IDE’s and debugging tools.
                        </p>
                        <h3> Bachelors of Commerce (Double Major: Economics and Finance)</h3>
                        <h4> <i>Curtin University of Technology</i> - Perth, Western Australia - 2009</h4>
                        <p> Graduated on the Vice Chancellor's List final semester for placing in top 1% of all students.
                        </p>
                      </div>
                      <div className='resumeButton'>
                        <a className='button' href={Resume}  target='blank' >Download Resume </a>
                      </div>

                      <h2> About Me </h2>
                      <p>
                        Prior to moving to Seattle in January 2018 I worked the previous 6 years as a Police officer in Western Australia. I found I enjoyed the work but after 6 years of working night shifts and missing out on holidays and special occasions I realized that I never really had a passion for the job and was only continuing to do it because I was unsure what I really wanted to do. This all changed when I moved to Seattle.
                      </p>
                      <p>
                        For the first time in many years, I found myself with a large amount of free time to explore new hobbies and interests. I decided that I wanted to learn something new, possibly a different language. That's when my wife suggested that I might be interested in learning to code. What initially started off as a couple of hours here and there completing online courses very soon turned into a full-time hobby. It wasn't long after that I realized that I didn't want it to be just another hobby and that I wanted to pursue it as a career.
                      </p>

                      <p>
                        Over the next few months I spent as much time as I could teaching myself the fundamentals of web development (HTML, CSS, JavaScript and Ruby), before enrolling in Flatiron School's Software Engineering course. The program helped me greatly improve my skills with extensive course-work primarily focused on Ruby on Rails, JavaScript and React.
                      </p>
                      <p>
                        Shortly after I completed my studies at Flatiron School I joined Hospitality Online as a full time Ruby on Rails developer, building career sites and employee onboarding software for some of the largest hotel management companies and hotel chains in the world.
                        Working on a small team of only seven developers, I have not only had the opportunity to work on every aspect of the app, I have also had the opportunity to train and mentor interns and new junior developers.
                      </p>
                      <p>
                        Although my current work at Hospitality Online is full stack Ruby on Rails I am always willing and excited to learn any new technology that may be required.  My time working at Hospitality Online, has only reinforced my passion for programming. In my spare time I have been learning Java through the use of online courses and look forward to putting my new knowledge and skills to the test.
                      </p>
                      <p>
                        My past studies include a Bachelors Degree with a double major in Economics and Finance from Curtin University of Technology. I also have a number of qualifications from my time as a Police Officer, including a Diploma in Public Safety.
                      </p>
                    </section>

                    <section id="contact">
                        <h2>Get In Touch</h2>
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
