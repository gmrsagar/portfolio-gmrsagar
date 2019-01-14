import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false
    }

    formSubmit = (e) => {
        e.preventDefault()
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'PATCH, DELETE, POST, GET, OPTIONS';
        axios.post('https://portfolio-api.herokuapp.com', {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
        .then( res => {
            this.setState({ sent: true })
        })
        .catch( () => {
            
        })
    }

    render() {
        return(
            <div className="row">
				<div className="offset-2"></div>
				<div className="col-10">
					<div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-7">
                            <div className="main-section">
                                <h1>Contact Me</h1>
                                <p className="description-text">
                                Looking to work together? Just say hi or tell me a bit about  your project and I'll get back to you. 
                                </p>
                                <div className="sep-medium"></div>

                                <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                                    <label class="message" htmlFor="message-input">Your Message</label>
                                    <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message}/>
                                    <div className="sep-small"></div>

                                    <label class="message-name" htmlFor="message-name">Your Name</label>
                                    <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>
                                    <div className="sep-small"></div>

                                    <label class="message-email" htmlFor="message-email">Your Email</label>
                                    <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" value={this.state.email}/>
                                    <div className="sep-medium"></div>

                                    <div className="button--container">
                                        { (!this.state.sent)
                                        ? 
                                        <button type="submit" className="button button-primary">Send Message</button>
                                        :
                                        <button className="button button-disabled">Message Sent</button>
                                        }
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
        );
    }
}

export default Contact;