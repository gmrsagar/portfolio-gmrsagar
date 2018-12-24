import React, { Component } from 'react';
import Chordpro_image from '../img/demo.png';

class ProjectCard extends Component {
    render() {
        return(
            <div className="project-card">
                <div className="row">
                <div className="col-5">
                    <div className="project-card-image--holder">
                        <img src={ Chordpro_image } class="project-card-image" alt=""/>
                    </div>
                </div>
                <div className="col-7">
                    <div className="project-card-info">
                        <div className="project-card-title">
                            Chord-pro
                        </div>
                        <div className="project-card-description">
                            A chord progression generator that that ahta h a chord progression  gen gen gen a chord
                        </div>
                        <div className="project-tech--holder">
                            <div className="project-tech">ReactJS</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;