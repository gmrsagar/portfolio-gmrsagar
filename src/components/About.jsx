import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <div className="row">
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

                                
                            </div>
                        </div>
                    </div>
				</div>
			</div>
        );
    }
}

export default About;