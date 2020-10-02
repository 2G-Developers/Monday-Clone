import React, { Component } from 'react'
import './Contact.scss'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact__wrapper">
                    <div className="contact__input">
                        <label htmlFor="">Country:</label>
                        <input type="text" placeholder="Country" />
                    </div>
                    <div className="contact__input">
                        <label htmlFor="">Company:</label>
                        <input type="text" placeholder="Company" />
                    </div>
                    <div className="contact__input">
                        <label htmlFor="">Full Name:</label>
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="contact__input">
                        <label htmlFor="">Contact:</label>
                        <input type="text" placeholder="Contact" />
                    </div>
                    <div className="contact__input">
                        <label htmlFor="">Email:</label>
                        <input type="text" placeholder="Email" />
                    </div>
                </div>

                <div className="contact__display">
                    <div className="contact__text">United States of America</div>
                    <div className="contact__text">iThots Technology Solutions Pvt. Ltd</div>
                    <div className="contact__text">Agus</div>
                    <div className="contact__text">900000000</div>
                    <div className="contact__text">xxx@gmail.com</div>
                    <h3>History</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae saepe quo blanditiis eaque, quibusdam deserunt! Deserunt nesciunt voluptatibus ut.</p>
                </div>
            </div>
        )
    }
}
