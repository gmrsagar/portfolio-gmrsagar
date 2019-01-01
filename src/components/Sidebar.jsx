import React, { Component } from 'react';
import { AutoAffix } from 'react-overlays'
import { Link } from "react-router-dom";

// sidebar-icons
import Icon_home_active from '../img/home_active.svg';
import Icon_home from '../img/home.svg';
import Icon_work_active from '../img/work_active.svg';
import Icon_work from '../img/work.svg';
import Icon_about_active from '../img/about_active.svg';
import Icon_about from '../img/about.svg';
import Icon_contact_active from '../img/contact_active.svg';
import Icon_contact from '../img/contact.svg';

class Sidebar extends Component {
// this needs to be done in a better way
  state = {
    navImages: {
      imgHome: Icon_home,
      imgWorks: Icon_work,
      imgAbout: Icon_about,
      imgContact: Icon_contact
    }
  }

  changeNavImage = (ele, newImage) => {
    let navImages = { ...this.state.navImages }
    navImages[ele] = newImage
    this.setState({ navImages })
  }

    render() {
        return (
            <AutoAffix>
                      <div className="sidebar pl-5 pt-4">
              <div className="App-logo">SG</div>
              {/*
                * Navigation
                */}
              <div className="nav">
                <div className="nav-item pb-3 active">
                  <div className="nav-icon--holder">
                  <img src={ this.state.navImages.imgHome }  alt="Home" className="nav-icon"/>
                  </div>
                  <Link to="/"
                    onMouseEnter={ () => this.changeNavImage('imgHome', Icon_home_active) }
                    onMouseLeave={ () => this.changeNavImage('imgHome', Icon_home ) }
                    className="nav-title">Home
                  </Link>
                </div>
                <div className="nav-item pb-3">
                  <div className="nav-icon--holder">
                  <img src={ this.state.navImages.imgWorks } alt="" className="nav-icon"/>
                  </div>
                  <Link to="/works"
                    onMouseEnter={ () => this.changeNavImage('imgWorks', Icon_work_active) }
                    onMouseLeave={ () => this.changeNavImage('imgWorks', Icon_work ) }
                    className="nav-title">My Works
                  </Link>
                </div>
                <div className="nav-item pb-3">
                  <div className="nav-icon--holder">
                  <img src={ this.state.navImages.imgAbout }  alt="" className="nav-icon"/>
                  </div>
                  <Link to="/" 
                    onMouseEnter={ () => this.changeNavImage('imgAbout', Icon_about_active) }
                    onMouseLeave={ () => this.changeNavImage('imgAbout', Icon_about ) }
                    className="nav-title">About Me
                  </Link>
                </div>
                <div className="nav-item pb-3">
                  <div className="nav-icon--holder">
                  <img src={ this.state.navImages.imgContact }  alt="" className="nav-icon"/>
                  </div>
                  <Link to="/" 
                    onMouseEnter={ () => this.changeNavImage('imgContact', Icon_contact_active) }
                    onMouseLeave={ () => this.changeNavImage('imgContact', Icon_contact ) }
                    className="nav-title">Contact Me
                  </Link>
                </div>
              </div>
              

            </div>
          </AutoAffix>

          
        );
    }
}

export default Sidebar;