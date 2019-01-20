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
                                Hi, I'm Sagar, a software engineer with 2+ years of experience in full stack web development. I help businesses build digital solutions using PHP, JavaScript (React.js) and  MySQL.
                                    <div className="sep-small"></div>
                                    <span>
                                    I am passionate about building scalable products that are valuable to the users. 
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
                                            Command Line Interface, Linux, OSX and Windows environments, Microservices, OOP, CI, SOLID, Deployment, Unit Testing
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
                                        <span><strong><a class="company-url" href="https://www.growcept.com" target="_blank">Growcept Pvt. Ltd</a></strong>, Kathmandu, Nepal | April 2017 - June 2018</span>
                                        <div className="sep-small"></div>
                                            Responsibilities:
                                            <ul>
                                            <li>Developed and customized WordPress themes for <a class="work-url" href="https://www.themethread.com">Growcept’s marketplace</a> and <a class="work-url" href="https://wordpress.org/themes/author/themethread/">WordPress.org.</a></li>
                                            <li>Rebuilt ecommerce portals using WooCommerce which improved checkout flow efficiency by 30%.</li>
                                            <li>Standardized theme development process which improved scalability and cut down rework by at least 20%.</li>
                                            <li>Improved user experience for a national sports website <a class="work-url" href="https://www.wicketnepal.com/">(WicketNepal)</a> by implementing live commentary system for ongoing matches.</li>
                                            <li>Worked on training programs for interns to help with setting up tools, docker environments, Linux environments, git, web services and assisting development of WordPress themes to ensure coding standards in the company.</li>

                                            </ul>
                                        </span>
                                        <div className="sep-medium"></div>
                                        <span>
                                        <strong>Back-End Developer</strong>
                                        <span><strong><a class="company-url" href="https://www.intellisoftnepal.com/web/" target="_blank">Intellisoft Nepal</a></strong>, Kathmandu, Nepal | March 2016 - March 2017</span>
                                        <div className="sep-small"></div>
                                                Responsibilities:
                                                <ul>
                                                    <li>Developed and maintained of software products written in PHP and JavaScript utilizing fundamental OOP principles for enterprise and government organizations.</li>
                                                    <li>Initiated, architected and coded office management system to automate internal tasks which made employee management more efficient by 40%.</li>
                                                    <li>Communicated with clients from project discovery to support phase of the project lifecycle.</li>
                                                    <li>Improved performance and reduced cost on application servers by implementing server offloading to storage solutions like Amazon Web Services S3.</li>
                                                    <li>Applied Agile sprint based development model for releasing new features and fixes for retaining customers.</li>
                                                </ul>
                                        </span>
                                        <div className="sep-medium"></div>
                                        <span>
                                        <strong>Consultations and Side Projects</strong>
                                        <div className="sep-small"></div>
                                                <ul>
                                                    <li>Developed a musical chord progression generating <a class="work-url" href="https://github.com/gmrsagar/chord-pro">app</a> using React.js.</li>
                                                    <li>Contributed in developing and maintaining <a class="work-url" href="https://github.com/geshan/acpwvs-api"> Node.js REST API </a>for a list of tech(ish) companies in Australia providing work visa that updates content into Airtable utilizing Continuous Deployment on Heroku.</li>
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