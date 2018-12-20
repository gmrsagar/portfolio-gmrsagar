import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

class Work extends Component {
    render() {
        return(
            <div className="main-section">
                <h1>My Works</h1>
                <p className="description-text">
                  Some of my works and side-projects
                </p>
                <div className="project-card--holder mt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <ProjectCard/>
                        </div>
                    </div>
                </div>

          </div>
        );
    }
}

export default Work;