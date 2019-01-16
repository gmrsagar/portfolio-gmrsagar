import React, { Component } from 'react';
class About extends Component {
    render() {
        return(
            <div className="row img-bg about-page">
				<div className="offset-2 d-none d-sm-none d-md-none d-lg-block"></div>
				<div className="col-sm-11 col-md-12 col-lg-10">
					<div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-7">
                            <div className="main-section" id="about">
                                <h1>About Me</h1>
                                <p className="description-text">
                                    I am a Web Developer who helps businesses build digital solutions using JavaScript, php and more.
                                    <div className="sep-small"></div>
                                    <span>
                                    One thing I love about working in tech is that learning never stops. 
                                    When I am not coding or learning, I love to play the guitar. 
                                    </span>
                                </p>
                                <div className="sep-large"></div>

                                <div className="skills-section">
                                    <div className="project-card-title">Skills</div>
                                    <div className="description-text">
                                    <div className="sep-small"></div>
                                        <span>
                                            PHP, Node.js, Laravel, Wordpress, Express.js
                                            <div className="sep-small"></div>
                                            JavaScript, React.js, ES6, jQuery, Bootstrap, HTML5, CSS3
                                            <div className="sep-small"></div>
                                            Git, Docker, Amazon Web Services, REST, MySQL, MongoDB
                                            <div className="sep-small"></div>
                                            Command Line Interface, Linux, OSX and Windows environments,Microservices, OOP, CI, SOLID, Deployment, Unit Testing
                                        </span>
                                    </div>
                                </div>

                                <div className="sep-large"></div>

                                <div className="work-section">
                                    <div className="project-card-title">Work Experience</div>
                                    <div className="description-text">
                                    <div className="sep-small"></div>
                                        <span>
                                        <strong>Web Developer</strong>
                                        <span><strong><a href="https://www.growcept.com" target="_blank">Growcept Pvt. Ltd</a></strong>, Kathmandu, Nepal - April 2017 - June 2018</span>
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
                                        <span><strong><a href="https://www.intellisoftnepal.com/web/" target="_blank">Intellisoft Nepal</a></strong>, Kathmandu, Nepal - intellisoftnepal.com</span>
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