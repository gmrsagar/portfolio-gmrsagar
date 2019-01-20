import React, { Component } from 'react';
import Social from '../components/Social';

class Frontpage extends Component{
    render() {
        return(
            <div className="main-section front-page img-bg" id="home">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="code-text"> &lt; h1 &gt;</div>
                <h1>Hello World, <br/> I am Sagar Ghimire.</h1>
                <div className="code-text"> &lt; /h1 &gt;</div>
                <p className="description-text">
                  I am a Web Developer who helps businesses build digital solutions, scalable products that are valuable to the users.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="cta-buttons">
                    <div className="button--container">
                        <a href="#contact" className="button button-primary">Contact me</a>
                    </div>
                    <div className="button--container">
                        <a href="#works" className="button button-secondary">Peek into my Projects</a>
                    </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="sep-medium"></div>
                <div className="code-text">
                /&#42;
                <br/>
                &nbsp;&#42; Find me on social media
                <br/>
                &nbsp;&#42;/
                <div className="social-icons--holder">
                    <Social />
                </div>
                </div>
              </div>
            </div>

          </div>
        );
    }
}

export default Frontpage;