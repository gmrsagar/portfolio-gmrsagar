import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import WORKS from '../initProject.json'


class Work extends Component {

	state = {
		works: WORKS
	}

	componentDidMount() {

	}

	render() {
		return(
			<div className="row">
				<div className="offset-2"></div>
				<div className="col-10">
					<div className="main-section">
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