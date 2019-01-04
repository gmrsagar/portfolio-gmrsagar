import React, { Component } from 'react';
import hero_illustration from '../img/hero-illustration.svg';

var heroBackgroundStyle = {
    backgroundSize: '44%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top 3rem',
    backgroundImage: "url(" + hero_illustration +")"
  };
class About extends Component {
    render() {
        return(
            <div className="row" style = {heroBackgroundStyle}>
				<div className="offset-2"></div>
				<div className="col-10">
					<div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-7">
                            <div className="main-section">
                                <h1>About Me</h1>
                                <p className="description-text">
                                    I am a Web Developer who helps businesses build digital solutions using JavaScript, php and more.
                                    <div className="sep-small"></div>
                                    <span>
                                    When I am not doing that, I love playing the guitar and sometimes indulge myself in PC games. One thing I love about working in tech is that learning never stops.
                                    </span>
                                </p>
                                <div className="sep-large"></div>

                                <div className="skills-section">
                                    <div className="project-card-title">Skills</div>
                                    <div className="description-text">
                                    <div className="sep-small"></div>
                                        <span>
                                            <strong>Back-end Technologies </strong>- PHP, Node.js, Laravel, Wordpress, Express.js 
                                            <div className="sep-small"></div>
                                            <strong>Front-end Technologies </strong>- React.js, Vue.js, jQuery, Bootstrap, HTML5, CSS3, JavaScript, ES6
                                            <div className="sep-small"></div>
                                            <strong>Others </strong>- Git, Docker, Amazon Web Services, JSON, XML, AJAX, REST, MySQL, MongoDB
                                            <div className="sep-small"></div>
                                            Familiar working with Linux, OSX and Windows based systems.
                                        </span>
                                    </div>
                                </div>

                                <div className="sep-large"></div>

                                <div className="work-section">
                                    <div className="project-card-title">Work Experience</div>
                                    <div className="description-text">
                                    <div className="sep-small"></div>
                                        <span>
                                        <strong>Web Developer (April 2017 - June 2018)</strong>
                                        <span>Growcept Pvt. Ltd, Kathmandu, Nepal - growcept.com</span>
                                        <div className="sep-small"></div>
                                            Responsibilities:
                                            <ul>
                                                <li>Developed a back-end system for an established news portal using PHP/ MySQL, JavaScript and jQuery.</li>
                                                <li>Developed an International Forum with voting interface implemented using AJAX, JSON, XML, PHP and JavaScript.</li>
                                                <li>Built e-commerce themes and templates using WordPress and Woo- commerce.</li>
                                                <li>Build a music library system using Node.js, Express js, MongoDB, Vue.js, PHP, REST.</li>
                                                <li>Managed multiple teams in development and debugging of corporate themes built using WordPress.</li>
                                                <li>Developed musical chord generator system using React.js and EcmaScript 6.</li>
                                                <li>Built a calendar and event creation system using React.js</li>
                                            </ul>
                                        </span>
                                        <div className="sep-medium"></div>
                                        <span>
                                        <strong>Back-End Developer (March 2016 - March 2017)</strong>
                                        <span>Intellisoft Nepal, Kathmandu, Nepal - intellisoftnepal.com</span>
                                        <div className="sep-small"></div>
                                                Responsibilities:
                                                <ul>
                                                    <li>Architected and built from scratch an Intranet based daily management system to automate manual tasks using Bootstrap, PHP/MySQL, REST, JavaScript, jQuery </li>
                                                    <li>Developed a calendar and notification interface for an existing enterprise system. Analyzed and resolved issues related to enterprise software products</li>
                                                </ul>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
        );
    }
}

export default About;