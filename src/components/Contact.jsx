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

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('https://nodejs-express-r5t89d8xx.now.sh/api/v1', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: ''
        })
    }

    render() {
        return(
            <div className="row">
				<div className="offset-2 d-none d-sm-none d-md-block"></div>
				<div className="col-sm-11 col-md-10">
					<div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-7">
                            <div className="main-section">
                                <h1>Contact Me</h1>
                                <p className="description-text">
                                Just say hi at <strong>gmrsagar@gmail.com</strong> or write me a message below and I'll get back to you as soon as I can. 
                                </p>
                                <div className="sep-small"></div>

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