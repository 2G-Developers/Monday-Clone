import React, { Component } from 'react'

import {ReactComponent as SearchIcon} from '../assets/icons/search.svg';
import {ReactComponent as FilterIcon} from '../assets/icons/filter.svg';
import {ReactComponent as SlidersIcon} from '../assets/icons/sliders.svg';
import {ReactComponent as ColumnsIcon} from '../assets/icons/columns.svg';
import {ReactComponent as CircleCheckIcon} from '../assets/icons/circle-check.svg';
import {ReactComponent as CircleIcon} from '../assets/icons/circle.svg';

import './Board.scss'
import Draggable from '../drag/drag';

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className="board__nav">
                    <div className="board__view">Default <ColumnsIcon style={{width: "25", height: "22", marginLeft: ".5rem", stroke: "#323338"}} /></div>
                    <div className="board__interact">
                        <ul>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><SearchIcon style={{width: "15", height: "22", marginRight: ".5rem"}} />Search</a>
                            </li>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><FilterIcon style={{width: "15", height: "22", marginRight: ".5rem"}} />Filter</a>
                            </li>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><SlidersIcon style={{width: "15", height: "22", marginRight: ".5rem"}} />Sort</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="board__workspace">
                    <div className="side__card">
                        <div className="card">
                            <div className="card__header">
                                <h3>Complete Your Profile</h3>
                            </div>
                            <div className="card__body">
                                <div className="card__list">
                                    <div className="card__item">
                                        <CircleCheckIcon style={{width: "15", height: "15", marginRight: ".5rem"}} />
                                        <span className="card__text card__text--green">Setup Account</span>
                                    </div>
                                </div>
                                <div className="card__list">
                                    <div className="card__item">
                                        <CircleCheckIcon style={{width: "15", height: "15", marginRight: ".5rem"}} />
                                        <span className="card__text card__text--green">Upload Your Photo</span>
                                    </div>
                                </div>
                                <div className="card__list">
                                    <div className="card__item">
                                        <CircleCheckIcon style={{width: "15", height: "15", marginRight: ".5rem"}} />
                                        <span className="card__text card__text--green">Enable Desktop Notification</span>
                                    </div>
                                </div>
                                <div className="card__list">
                                    <div className="card__item">
                                        <CircleIcon style={{width: "15", height: "15", marginRight: ".5rem"}} />
                                        <span className="card__text">Invite Team Members (0/1)</span>
                                    </div>
                                </div>
                                <div className="card__list">
                                    <div className="card__item">
                                        <CircleIcon style={{width: "15", height: "15", marginRight: ".5rem"}} />
                                        <span className="card__text">Complete Profile</span>
                                    </div>
                                </div>
                                <div className="card__list">
                                    <div className="card__item">
                                        <CircleIcon style={{width: "15", height: "15", marginRight: ".5rem"}} />
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

                        <div className="inbox">
                            <div className="inbox__title">Inbox View Options</div>
                            <div className="inbox__input">
                                <div className="inbox__input-group">
                                    <input type="radio" id="update" name="inbox" value="update" />
                                    <label for="update">Inbox Updates</label>
                                </div>
                                <div className="inbox__input-group">
                                    <input type="radio" id="mention" name="inbox" value="mention" />
                                    <label for="mention">I was Mentioned</label>
                                </div>
                                <div className="inbox__input-group">
                                    <input type="radio" id="office" name="inbox" value="office" />
                                    <label for="office">All Updates of Google</label>
                                </div>
                                <div className="inbox__input-group">
                                    <input type="radio" id="bookmark" name="inbox" value="bookmark" />
                                    <label for="bookmark">Bookmarked Updates</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Draggable />
                </div>
            </div>
        )
    }
}
