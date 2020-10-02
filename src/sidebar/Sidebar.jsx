import React, { Component } from 'react'

import './Sidebar.scss'

import {ReactComponent as GridIcon} from '../assets/icons/grid.svg';
import {ReactComponent as CalendarIcon} from '../assets/icons/calendar.svg';
import {ReactComponent as DownloadIcon} from '../assets/icons/download.svg';
import {ReactComponent as BellIcon} from '../assets/icons/bell.svg';
import {ReactComponent as HelpCircleIcon} from '../assets/icons/help-circle.svg';
import {ReactComponent as SearchIcon} from '../assets/icons/search.svg';
import {ReactComponent as StarIcon} from '../assets/icons/star.svg';
import {ReactComponent as ApertureIcon} from '../assets/icons/aperture.svg';

export default class Sidebar extends Component {
    render() {
        return (
            <>
                <div className="sidebar">
                    <div className="sidebar__left">
                        <div className="sidebar__upper">
                            <ul>
                                <li class="sidebar__icon sidebar__icon--active">
                                    <a href="index.html" className="sidebar__link">
                                        <GridIcon style={{strokeWidth: "1.5", "width":"30","height":"30"}} />
                                    </a>
                                </li>
                                <li class="sidebar__icon">
                                    <a href="index.html" className="sidebar__link">
                                        <BellIcon style={{strokeWidth: "1.5", "width":"30","height":"30"}} />
                                    </a>
                                </li>
                                <li class="sidebar__icon">
                                    <a href="index.html" className="sidebar__link">
                                        <DownloadIcon style={{strokeWidth: "1.5", "width":"30","height":"30"}} />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar__lower">
                            <ul>
                                <li class="sidebar__icon">
                                    <a href="index.html" className="sidebar__link">
                                        <CalendarIcon style={{strokeWidth: "1.5", "width":"30","height":"30"}} />
                                    </a>
                                </li>
                                <li class="sidebar__icon">
                                    <a href="index.html" className="sidebar__link">
                                        <SearchIcon style={{strokeWidth: "1.5", "width":"30","height":"30"}} />
                                    </a>
                                </li>
                                <li class="sidebar__icon">
                                    <a href="index.html" className="sidebar__link">
                                        <HelpCircleIcon style={{strokeWidth: "1.5", "width":"30","height":"30"}} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="sidebar__right">
                        <ul>
                            <li className="sidebar__icon sidebar__icon-small">
                                <div className="sidebar__link">
                                    <StarIcon style={{strokeWidth: "1.5", "width":"20","height":"20"}} />
                                </div>
                            </li>
                            <li className="sidebar__icon sidebar__icon-small">
                                <div className="sidebar__link">
                                    <ApertureIcon style={{strokeWidth: "1.5", "width":"20","height":"20"}}/>
                                </div>
                            </li>
                            <li className="sidebar__icon sidebar__icon-small">
                                <div className="sidebar__link">
                                    <div className="workspace__text-icon">
                                        <span>M</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
