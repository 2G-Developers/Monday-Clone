import React, { Component } from 'react'
import './Workspace.scss'

import {ReactComponent as SearchIcon} from '../assets/icons/search.svg';
import {ReactComponent as FilterIcon} from '../assets/icons/filter.svg';
import {ReactComponent as PlusCircleIcon} from '../assets/icons/plus-circle.svg';
import {ReactComponent as SidebarIcon} from '../assets/icons/sidebar.svg';
import {ReactComponent as BarChartIcon} from '../assets/icons/bar-chart-2.svg';
import {ReactComponent as ArrowLeftCircle} from '../assets/icons/arrow-left-circle.svg';
import {ReactComponent as AwardIcon} from '../assets/icons/award.svg';
import {ReactComponent as FolderIcon} from '../assets/icons/folder.svg';
import {ReactComponent as ArrowLeftSimpleIcon} from '../assets/icons/arrow-left.svg';

export default class Workspace extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            dropdownActive: true,
            dialogActive: false
        }
    }

    toggleWorkspace = () => {
        this.setState((prevState) => ({ active: !prevState.active }))
    }

    toggleDropdown = () => {
        this.setState((prevState) => ({ dropdownActive: !prevState.dropdownActive }))
    }

    toggleDialog = () => {
        this.setState((prevState) => ({ dialogActive: !prevState.dialogActive, dropdownActive: true }))
    }

    render() {

        let dialogBox;

        if(this.state.dialogActive) {
            dialogBox = (
                <div className="dialog">
                    <div className="dialog__header">
                        <div className="dialog__title">Board</div>
                        <div className="dialog__close">X</div>
                    </div>

                    <div className="dialog__body">
                        <div className="dialog__input">
                            <input type="text" placeholder="New Blank Board" />
                        </div>
                        <div className="dialog__radio">
                            <input type="radio" id="main" name="visibility" value="main" />
                            <label for="main">Main</label>
                            <input type="radio" id="private" name="visibility" value="private" />
                            <label for="private">Private</label>
                            <input type="radio" id="share" name="visibility" value="other" />
                            <label for="other">Sharable</label>
                        </div>
                        <div className="dialog__label">
                            <p>Visible to everyone at monday</p>
                        </div>

                        <div className="dialog__button">
                            <button className="dialog__cta dialog__cta--secondary"  onClick={this.toggleDialog}>Cancel</button>
                            <button className="dialog__cta" onClick={this.toggleDialog}>Create Board</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            dialogBox = null
        }
        
        return (
            <>
            <div className={this.state.active ? 'workspace workspace--shirnk': 'workspace'}>
                <div className="workspace__title">
                    <div className="workspace__text-icon">
                        <span>M</span>
                    </div>
                    Main workspace
                </div>

                <div className="workspace__menu">
                    <ul>
                        <li className="workspace__list">
                            {
                            // eslint-disable-next-line
                            }<a className="workspace__link" href="javascript:return void(0);" onClick={this.toggleDropdown}>
                                <span className="workspace__icon">
                                    <PlusCircleIcon style={{"width":".875rem","height":"1.3125rem"}} />
                                </span>
                                <div className="workspace__name">Add <ArrowLeftSimpleIcon style={{"width":".875rem","height":"1.3125rem"}}  /> </div>
                            </a>
                            <div className={this.state.dropdownActive ? 'dropdown-content dropdown-content--toggle': 'dropdown-content'}>
                                <ul>
                                    <li className="dropdown__item" onClick={this.toggleDialog}>
                                    {
                                        // eslint-disable-next-line
                                    }<a className="dropdown__link" href="javascript:return void(0);"><SidebarIcon style={{"width":".875rem","height":"1.3125rem", marginRight: ".5rem"}} /> New Blank Board</a></li>
                                    <li className="dropdown__item"><a className="dropdown__link" href="index.html"><BarChartIcon style={{"width":".875rem","height":"1.3125rem", marginRight: ".5rem"}} /> New Blank Dashboard</a></li>
                                    <li className="dropdown__item"><a className="dropdown__link" href="index.html"><AwardIcon style={{"width":".875rem","height":"1.3125rem", marginRight: ".5rem"}} /> New from Template</a></li>
                                    <li className="dropdown__item"><a className="dropdown__link" href="index.html"><FolderIcon style={{"width":".875rem","height":"1.3125rem", marginRight: ".5rem"}} /> New Folder</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="workspace__list">
                            <a className="workspace__link" href="index.html">
                                <span className="workspace__icon">
                                    <SearchIcon style={{"width":".875rem","height":"1.3125rem"}} />
                                </span>
                                <div className="workspace__name">Search</div>
                            </a>
                        </li>
                        <li className="workspace__list">
                            <a className="workspace__link" href="index.html">
                                <span className="workspace__icon">
                                    <FilterIcon style={{"width":".875rem","height":"1.3125rem"}} />
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
                                    <SidebarIcon style={{"width":".875rem","height":"1.3125rem"}} />
                                </span>
                                <div className="workspace__name">Project Planning</div>
                            </a>
                        </li>
                        <li className="workspace__list">
                            <a className="workspace__link" href="index.html">
                                <span className="workspace__icon">
                                    <SidebarIcon style={{"width":".875rem","height":"1.3125rem"}} />
                                </span>
                                <div className="workspace__name">New Blank Board</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="expand-icon" onClick={this.toggleWorkspace}>
                    <ArrowLeftCircle style={{"height":"1.875rem", "stroke": "#323338", strokeWidth: "1"}} />
                </div>
            </div>
            
            {this.state.dialogActive ? (<div className="backdrop" onClick={this.toggleDialog}></div>) : null}
            {dialogBox}
            
            </>
        )
    }
}
