import React, { Component } from 'react';
import { AutoAffix } from 'react-overlays';

// sidebar-icons
import Icon_home_active from '../img/home_active.svg';
import Icon_home from '../img/home.svg';
import Icon_work_active from '../img/work_active.svg';
import Icon_work from '../img/work.svg';
import Icon_blog_active from '../img/blog_active.svg';
import Icon_blog from '../img/blog.svg';
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
      imgBlog: Icon_blog,
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
              <div className="sidebar pl-5 pt-4 d-none d-sm-none d-md-none d-lg-block">
                <div className="App-logo">SG</div>
                <div className="nav">
                  <div className="nav-item pb-3 active">
                  <a href="#home"
                      onMouseEnter={ () => this.changeNavImage('imgHome', Icon_home_active) }
                      onMouseLeave={ () => this.changeNavImage('imgHome', Icon_home ) }>
                    <div className="nav-icon--holder">
                    <img src={ this.state.navImages.imgHome }  alt="Home" className="nav-icon"/>
                    </div>
                      <div className="nav-title">Home</div>
                    </a>
                  </div>
                  <div className="nav-item pb-3">
                    <a href="#works"
                      onMouseEnter={ () => this.changeNavImage('imgWorks', Icon_work_active) }
                      onMouseLeave={ () => this.changeNavImage('imgWorks', Icon_work ) }>
                      <div className="nav-icon--holder">
                      <img src={ this.state.navImages.imgWorks } alt="" className="nav-icon"/>
                    </div>
                      <div className="nav-title">My Works</div>
                    </a>
                  </div>
                  <div className="nav-item pb-3">
                    <a href="https://www.medium.com/@gmrsagar" rel="noopener noreferrer" target="_blank"
                      onMouseEnter={ () => this.changeNavImage('imgBlog', Icon_blog_active) }
                      onMouseLeave={ () => this.changeNavImage('imgBlog', Icon_blog ) }>
                    <div className="nav-icon--holder">
                    <img src={ this.state.navImages.imgBlog }  alt="" className="nav-icon"/>
                    </div>
                      <div className="nav-title">Blog</div>
                    </a>
                  </div>
                  <div className="nav-item pb-3">
                    <a href="#about"
                      onMouseEnter={ () => this.changeNavImage('imgAbout', Icon_about_active) }
                      onMouseLeave={ () => this.changeNavImage('imgAbout', Icon_about ) }>
                      <div className="nav-icon--holder">
                        <img src={ this.state.navImages.imgAbout }  alt="" className="nav-icon"/>
                      </div>
                      <div className="nav-title">About Me</div>
                    </a>
                  </div>

                  <div className="nav-item pb-3">
                    <a href="#contact"
                      onMouseEnter={ () => this.changeNavImage('imgContact', Icon_contact_active) }
                      onMouseLeave={ () => this.changeNavImage('imgContact', Icon_contact ) }>
                    <div className="nav-icon--holder">
                    <img src={ this.state.navImages.imgContact }  alt="" className="nav-icon"/>
                    </div>
                      <div className="nav-title">Contact Me </div>
                    </a>
                  </div>
                </div>
            </div>
          </AutoAffix>
        );
    }
}

export default Sidebar;