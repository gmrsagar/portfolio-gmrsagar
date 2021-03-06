import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = async (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        try {
            await axios.post('https://nodejs-express-2rml59ma4.now.sh/api/v1', data)
            this.setState({ sent: true }, this.resetForm())
        } catch(err) {
            console.log(err)
        }

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
            <div className="row img-bg contact-page">
				<div className="offset-2 d-none d-sm-none d-md-none d-lg-block"></div>
				<div className="col-sm-11 col-md-12 col-lg-10">
					<div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-7">
                            <div className="main-section" id="contact">
                                <h1>Contact Me</h1>
                                <p className="description-text">
                                Just say hi at <strong>gmrsagar@gmail.com</strong> or leave me a message below and I'll get back to you as soon as possible. 
                                </p>
                                <div className="sep-small"></div>

                                <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                                    <label class="message" htmlFor="message-input">Your Message</label>
                                    <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
                                    <div className="sep-small"></div>

                                    <label class="message-name" htmlFor="message-name">Your Name</label>
                                    <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>
                                    <div className="sep-small"></div>

                                    <label class="message-email" htmlFor="message-email">Your Email</label>
                                    <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
                                    <div className="sep-medium"></div>

                                    <div className="button--container">
                                        { (!this.state.sent)
                                        ?
                                        <button type="submit" className="button button-primary">{this.state.buttonText}</button>
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