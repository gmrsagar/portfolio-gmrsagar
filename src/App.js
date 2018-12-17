import React, { Component } from 'react';

// sidebar-icons
import Icon_home_active from './img/home_active.svg';
import Icon_home from './img/home.svg';
import Icon_work_active from './img/work_active.svg';
import Icon_work from './img/work.svg';
import Icon_about_active from './img/about_active.svg';
import Icon_about from './img/about.svg';
import Icon_contact_active from './img/contact_active.svg';
import Icon_contact from './img/contact.svg';
import logo from './logo.svg';

// illustrations
import hero_illustration from './img/hero-illustration.svg';

//style
import './.App.sass';

var heroBackgroundStyle = {
  backgroundSize: '44%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top 3rem',
  backgroundImage: "url(" + hero_illustration +")"
};

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="container-fluid p-0">
        <div className="row">
          {/*
            * Sidebar
            */}
          <div className="col-2">
            <div className="sidebar pl-5 pt-4">
              <div className="App-logo">SG</div>
              {/*
                * Navigation
                */}
              <div className="nav">
                <div className="nav-item pb-3 active">
                  <div className="nav-icon--holder">
                  <img src={ Icon_home_active } alt="Home" className="nav-icon"/>
                  </div>
                  <div className="nav-title">Home</div>
                </div>
                <div className="nav-item pb-3">
                  <div className="nav-icon--holder">
                  <img src={ Icon_work } alt="" className="nav-icon"/>
                  </div>
                  <div className="nav-title">My Works</div>
                </div>
                <div className="nav-item pb-3">
                  <div className="nav-icon--holder">
                  <img src={ Icon_about } alt="" className="nav-icon"/>
                  </div>
                  <div className="nav-title">About Me</div>
                </div>
                <div className="nav-item pb-3">
                  <div className="nav-icon--holder">
                  <img src={ Icon_contact } alt="" className="nav-icon"/>
                  </div>
                  <div className="nav-title">Contact Me</div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-10">
            <div className="main-section front-page" style = {heroBackgroundStyle}>
              <div className="row">
                <div className="col-md-7 col-sm-10">
                  <div className="code-text"> &lt; h1 &gt;</div>
                  <h1>Hello World, <br/> I am Sagar Ghimire.</h1>
                  <div className="code-text"> &lt; /h1 &gt;</div>
                  <div className="code-text"> &lt; p &gt;</div>
                  <p className="description-text">
                    I am a Web Developer and I help businesses build digital solutions using JavaScript, php and more..
                  </p>
                  <div className="code-text"> &lt; /p &gt;</div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="button--container">
                      <div className="code-text"> &lt; button &gt;</div>
                      <div className="button button-primary">Contact me</div>
                      <div className="code-text"> &lt; /button &gt;</div>
                    </div>
                    <div className="button--container">
                      <div className="code-text"> &lt; button &gt;</div>
                      <div className="button button-secondary">Peek into my Projects</div>
                      <div className="code-text"> &lt; /button &gt;</div>
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

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>  {/* row ends */}
      </div>
      
    <footer className="fixed-bottom">
      links
    </footer>

    </div>
    );
  }
}

export default App;
