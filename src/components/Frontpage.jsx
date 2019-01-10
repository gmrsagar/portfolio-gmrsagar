import React, { Component } from 'react';
import hero_illustration from '../img/hero-illustration.svg';
import Social from '../components/Social';
import { Link } from "react-router-dom";


var heroBackgroundStyle = {
    backgroundSize: '44%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom 1rem',
    backgroundImage: "url(" + hero_illustration +")"
  };

class Frontpage extends Component{
    render() {
        return(
            <div className="main-section front-page" style = {heroBackgroundStyle}>
            <div className="row">
              <div className="col-md-7 col-sm-10">
                <div className="code-text"> &lt; h1 &gt;</div>
                <h1>Hello World, <br/> I am Sagar Ghimire.</h1>
                <div className="code-text"> &lt; /h1 &gt;</div>
                <p className="description-text">
                  I am a Web Developer and who helps businesses build digital solutions using JavaScript, php and more..
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="cta-buttons">
                    <div className="button--container">
                        <Link to="#" className="button button-primary">Contact me</Link>
                    </div>
                    <div className="button--container">
                        <Link to="#" className="button button-secondary">Peek into my Projects</Link>
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