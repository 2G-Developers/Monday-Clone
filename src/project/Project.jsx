import React, { Component } from 'react'
import './Project.scss'

import {ReactComponent as UsersIcon} from '../assets/icons/users.svg';
import {ReactComponent as StarIcon} from '../assets/icons/star.svg';
import Board from '../board/Board';
// import {ReactComponent as EyeIcon} from '../assets/icons/eye.svg';

export default class Project extends Component {
    render() {
        return (
            <>
                <div className="project">
                    <div className="project__header">
                        <div className="project__title">
                            Project Planning <StarIcon className="star-icon" style={{strokeWidth: "1",width: "30", height: "30", marginLeft: "1rem", fill: "#e6e9ef", stroke: "#e6e9ef"}} />
                        </div>
                        <div className="project__integrate">
                            <div className="project__user-icon">
                                <div className="hexagon-container hexagon-container--circle">
                                    <img src="https://files.monday.com/photos/16401869/thumb_small/16401869-data?1601542992" alt="twilio"/>
                                </div>

                            </div>
                            <div className="project__socials">
                                <div className="hexagon-container">
                                    <svg width="40" height="40" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M29.004 5.5359L43.0081 13.6211C44.2457 14.3357 45.0081 15.6562 45.0081 17.0852V33.2557C45.0081 34.6848 44.2457 36.0053 43.0081 36.7198L29.004 44.805C27.7664 45.5196 26.2416 45.5196 25.004 44.805L11 36.7198C9.7624 36.0053 9 34.6848 9 33.2557V17.0852C9 15.6562 9.7624 14.3357 11 13.6211L25.004 5.5359C26.2416 4.82137 27.7664 4.82137 29.004 5.5359Z" fill="#f22f46" stroke="white" stroke-width="2"></path></g><defs><filter id="filter0_d" x="0" y="0" width="49.0081" height="53.3409" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.101025 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                                    <img src="https://cdn7.monday.com/images/automations/white_avatars/twilio.png" alt="twilio"/>
                                </div>

                                <div className="hexagon-container hexagon-container--one">
                                    <svg width="40" height="40" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M29.004 5.5359L43.0081 13.6211C44.2457 14.3357 45.0081 15.6562 45.0081 17.0852V33.2557C45.0081 34.6848 44.2457 36.0053 43.0081 36.7198L29.004 44.805C27.7664 45.5196 26.2416 45.5196 25.004 44.805L11 36.7198C9.7624 36.0053 9 34.6848 9 33.2557V17.0852C9 15.6562 9.7624 14.3357 11 13.6211L25.004 5.5359C26.2416 4.82137 27.7664 4.82137 29.004 5.5359Z" fill="#4A154B" stroke="white" stroke-width="2"></path></g><defs><filter id="filter0_d" x="0" y="0" width="49.0081" height="53.3409" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.101025 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                                    <img src="https://cdn7.monday.com/images/automations/white_avatars/slack.png" alt="twilio"/>
                                </div>

                                <div className="hexagon-container hexagon-container--one">
                                    <svg width="40" height="40" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M29.004 5.5359L43.0081 13.6211C44.2457 14.3357 45.0081 15.6562 45.0081 17.0852V33.2557C45.0081 34.6848 44.2457 36.0053 43.0081 36.7198L29.004 44.805C27.7664 45.5196 26.2416 45.5196 25.004 44.805L11 36.7198C9.7624 36.0053 9 34.6848 9 33.2557V17.0852C9 15.6562 9.7624 14.3357 11 13.6211L25.004 5.5359C26.2416 4.82137 27.7664 4.82137 29.004 5.5359Z" fill="#f7f7f7" stroke="white" stroke-width="2"></path></g><defs><filter id="filter0_d" x="0" y="0" width="49.0081" height="53.3409" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.101025 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                                    <img src="https://cdn7.monday.com/images/automations/white_avatars/gmail.png" alt="twilio"/>
                                </div>

                            </div>

                            <div className="project__text">Integrate /<span> 0</span></div>
                            <div className="project__text">Automate / <span>2</span></div>

                            <a href="index.html" className="project__button project__button--secondary">
                                <UsersIcon style={{strokeWidth: "1",width: "16", height: "16"}} />/ <span>1</span>
                            </a>
                            
                            <a href="index.html" className="project__button">
                                Activities / <span>0</span>
                            </a>
                        </div>
                    </div>
                    <div className="project__description">
                        Add board description
                    </div>
                    
                    <Board />
                </div>

            </>
        )
    }
}
