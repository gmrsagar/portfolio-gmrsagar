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
                                Looking to work together? Just say hi or tell me a bit about  your project and I'll get back to you. 
                                </p>
                                <div className="sep-medium"></div>

                                
                            </div>
                        </div>
                    </div>
				</div>
			</div>
        );
    }
}

export default About;