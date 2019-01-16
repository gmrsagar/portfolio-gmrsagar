import React, { Component } from 'react';
import Icon_github from '../img/git.svg';
import Icon_github_active from '../img/git_active.svg';
import Icon_linkedin from '../img/linkedin.svg';
import Icon_linkedin_active from '../img/linkedin_active.svg';
import Icon_twitter from '../img/twitter.svg';
import Icon_twitter_active from '../img/twitter_active.svg';

class Social extends Component {

    state = {
        socialImages: {
        github: Icon_github,
        linkedin: Icon_linkedin,
        twitter: Icon_twitter,
        }
    }

    changeSocialImage = (ele, newImage) => {
    let socialImages = { ...this.state.socialImages }
    socialImages[ele] = newImage
    this.setState({ socialImages })
    }

    render() {
        return (
            <div className="social-icons">

                <a href="https://www.github.com/gmrsagar/" target="_blank">
                    <img
                    onMouseEnter={ () => this.changeSocialImage('github', Icon_github_active) }
                    onMouseLeave={ () => this.changeSocialImage('github', Icon_github ) }
                    src= { this.state.socialImages.github } alt="Github" className="social-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/gmrsagar/" target="_blank">
                    <img
                    onMouseEnter={ () => this.changeSocialImage('linkedin', Icon_linkedin_active) }
                    onMouseLeave={ () => this.changeSocialImage('linkedin', Icon_linkedin ) }
                    src= { this.state.socialImages.linkedin } alt="LinkedIn" className="social-icon"/>
                </a>
                <a href="https://www.twitter.com/gmrsagar/" target="_blank">
                    <img
                    onMouseEnter={ () => this.changeSocialImage('twitter', Icon_twitter_active) }
                    onMouseLeave={ () => this.changeSocialImage('twitter', Icon_twitter ) }
                    src= { this.state.socialImages.twitter } alt="Twitter" className="social-icon"/>
                </a>
            </div>
        );
    }
}

export default Social;