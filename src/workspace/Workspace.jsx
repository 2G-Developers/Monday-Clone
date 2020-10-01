import React, { Component } from 'react'
import './Workspace.scss'

import {ReactComponent as SearchIcon} from '../assets/icons/search.svg';
import {ReactComponent as ArrowLeftIcon} from '../assets/icons/arrow-left-circle.svg';
import {ReactComponent as FilterIcon} from '../assets/icons/filter.svg';
import {ReactComponent as PlusCircleIcon} from '../assets/icons/plus-circle.svg';
import {ReactComponent as SidebarIcon} from '../assets/icons/sidebar.svg';

export default class Workspace extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    toggleWorkspace = () => {
        console.log("Hello")
            this.setState((prevState) => ({ active: !prevState.active }))
    }

    render() {
        
        return (
            <>
            <div className={this.state.active ? 'workspace workspace--shirnk': 'workspace'}>
                <div className="workspace__title">
                    Main workspace
                </div>

                <div className="workspace__menu">
                    <ul>
                        <li className="workspace__list">
                            <a className="workspace__link" href="index.html">
                                <span className="workspace__icon">
                                    <PlusCircleIcon style={{"width":"14","height":"21"}} />
                                </span>
                                <div className="workspace__name">Add</div>
                            </a>
                        </li>
                        <li className="workspace__list">
                            <a className="workspace__link" href="index.html">
                                <span className="workspace__icon">
                                    <SearchIcon style={{"width":"14","height":"21"}} />
                                </span>
                                <div className="workspace__name">Search</div>
                            </a>
                        </li>
                        <li className="workspace__list">
                            <a className="workspace__link" href="index.html">
                                <span className="workspace__icon">
                                    <FilterIcon style={{"width":"14","height":"21"}} />
                                </span>
                                <div className="workspace__name">Filter</div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="workspace__board">
                    <ul>
                        <li className="workspace__list workspace__list--active">
                            <a className="workspace__link" href="index.html">
                                <span className="workspace__icon">
                                    <SidebarIcon style={{"width":"14","height":"21"}} />
                                </span>
                                <div className="workspace__name">Project Planning</div>
                            </a>
                        </li>
                        <li className="workspace__list">
                            <a className="workspace__link" href="index.html">
                                <span className="workspace__icon">
                                    <SidebarIcon style={{"width":"14","height":"21"}} />
                                </span>
                                <div className="workspace__name">New Blank Board</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="expand-icon" onClick={this.toggleWorkspace}>
                    <ArrowLeftIcon style={{"width":"21","height":"21"}} />
                </div>
            </div>
            </>
        )
    }
}
