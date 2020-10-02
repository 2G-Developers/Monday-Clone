import React, { Component } from 'react'
import './ProfileCard.scss'

import {ReactComponent as CircleCheckIcon} from '../assets/icons/circle-check.svg';
import {ReactComponent as CircleIcon} from '../assets/icons/circle.svg';

export default class ProfileCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <h3>Complete Your Profile</h3>
                </div>
                <div className="card__body">
                    <div className="card__list">
                        <div className="card__item">
                            <CircleCheckIcon style={{width: ".9375rem", height: ".9375rem", marginRight: ".5rem"}} />
                            <span className="card__text card__text--green">Setup Account</span>
                        </div>
                    </div>
                    <div className="card__list">
                        <div className="card__item">
                            <CircleCheckIcon style={{width: ".9375rem", height: ".9375rem", marginRight: ".5rem"}} />
                            <span className="card__text card__text--green">Upload Your Photo</span>
                        </div>
                    </div>
                    <div className="card__list">
                        <div className="card__item">
                            <CircleCheckIcon style={{width: ".9375rem", height: ".9375rem", marginRight: ".5rem"}} />
                            <span className="card__text card__text--green">Enable Desktop Notification</span>
                        </div>
                    </div>
                    <div className="card__list">
                        <div className="card__item">
                            <CircleIcon style={{width: ".9375rem", height: ".9375rem", marginRight: ".5rem"}} />
                            <span className="card__text">Invite Team Members (0/1)</span>
                        </div>
                    </div>
                    <div className="card__list">
                        <div className="card__item">
                            <CircleIcon style={{width: ".9375rem", height: ".9375rem", marginRight: ".5rem"}} />
                            <span className="card__text">Complete Profile</span>
                        </div>
                    </div>
                    <div className="card__list">
                        <div className="card__item">
                            <CircleIcon style={{width: ".9375rem", height: ".9375rem", marginRight: ".5rem"}} />
                            <span className="card__text">Install Our Mobile App</span>
                        </div>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="battery__power">
                        <div className="battery__wrapper">
                            <div className="battery__fill">
                                <div className="battery__fill--top"></div>
                                <div className="battery__fill--bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
