import React, { Component } from 'react';
import Icon_github from '../img/git.svg';
import Icon_linkedin from '../img/linkedin.svg';
import Icon_twitter from '../img/twitter.svg';
// import Icon_github_active from '../img/git_active.svg';

class Social extends Component {
    render() {
        return (
            <div className="social-icons">
                <a href="https://www.github.com/gmrsagar/" rel="noopener noreferrer" target="_blank"><img src= { Icon_github } alt="Github" className="social-icon"/></a>
                <a href="https://www.linkedin.com/in/gmrsagar/" rel="noopener noreferrer" target="_blank"><img src= { Icon_linkedin } alt="LinkedIn" className="social-icon"/></a>
                <a href="https://www.twitter.com/gmrsagar/" rel="noopener noreferrer" target="_blank"><img src= { Icon_twitter } alt="Twitter" className="social-icon"/></a>
            </div>
        );
    }
}

export default Social;