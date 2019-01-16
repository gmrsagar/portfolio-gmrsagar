import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import WORKS from '../initProject.json';
import hero_illustration from '../img/hero-illustration.svg';

var heroBackgroundStyle = {
    backgroundSize: '44%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top 3rem',
    backgroundImage: "url(" + hero_illustration +")"
  };


class Work extends Component {

	state = {
		works: WORKS
	}

	componentDidMount() {

	}

	render() {
		return(
			<div className="row"> {/* style = {heroBackgroundStyle} */}
				<div className="offset-2 d-none d-sm-none d-md-none d-lg-block"></div>
				<div className="col-sm-11 col-md-12 col-lg-10">
					<div className="main-section" id="works">
						<h1>My Works</h1>
						<p className="description-text">
							Some of the projects that I work on when I am  <br/> not working on the rest of my projects
						</p>
						<div className="project-card--holder mt-4">
							<div className="row no-gutters">
								<div className="col-11">
									<div className="row">
										{ this.state.works.map( work => <div className="col-md-6"><ProjectCard work={work}/></div> )}
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

export default Work;