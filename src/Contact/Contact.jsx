import React, { Component } from 'react'
import './Contact.scss'

export default class Contact extends Component {
    constructor(){
        super()
        this.state = {
            country: "United States of America",
            company: "iThots Technology Solutions Pvt. Ltd",
            name: "Agus",
            contact: "900000000",
            email: "xxx@gmail.com"
        }
    }

    onChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="contact">
                <div className="contact__wrapper">
                    <div className="contact__input">
                        <label htmlFor="">Country:</label>
                        <input type="text" name="country" value={this.state.country} placeholder="Country" onChange={this.onChangeInput} />
                    </div>
                    <div className="contact__input">
                        <label htmlFor="">Company:</label>
                        <input type="text" name="company" value={this.state.company} placeholder="Company" onChange={this.onChangeInput} />
                    </div>
                    <div className="contact__input">
                        <label htmlFor="">Full Name:</label>
                        <input type="text" name="name" value={this.state.name} placeholder="Full Name" onChange={this.onChangeInput} />
                    </div>
                    <div className="contact__input">
                        <label htmlFor="">Contact:</label>
                        <input type="text" name="contact" value={this.state.contact} placeholder="Contact" onChange={this.onChangeInput} />
                    </div>
                    <div className="contact__input">
                        <label htmlFor="">Email:</label>
                        <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.onChangeInput} />
                    </div>
                </div>

                <div className="contact__display">
                    <div className="contact__text">{this.state.country}</div>
                    <div className="contact__text">{this.state.company}</div>
                    <div className="contact__text">{this.state.name}</div>
                    <div className="contact__text">{this.state.contact}</div>
                    <div className="contact__text">{this.state.email}</div>
                    <h3>History</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae saepe quo blanditiis eaque, quibusdam deserunt! Deserunt nesciunt voluptatibus ut.</p>
                </div>
            </div>
        )
    }
}
