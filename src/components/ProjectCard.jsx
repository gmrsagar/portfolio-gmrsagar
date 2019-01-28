import React from 'react';

const ProjectCard = props => {
    return (
        <div className="project-card">
            <div className="row no-gutters">
                <div className="col-sm-12 col-md-4">
                    <div className="project-card-image--holder">
                        <img src={ props.work.img } class="project-card-image" alt=""/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="project-card-info">
                        <div className="project-card-title">
                            { props.work.name }
                        </div>
                        <div className="project-card-description">
                            { props.work.content }
                        </div>
                        <div className="project-tech--holder">
                            <div className="project-tech">ReactJS</div>
                        </div>
                        <div className="button-nobg--holder">
                            <a href={props.work.git} className="button-nobg mr-4">View on Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;