import React, { Component } from 'react'
import './Task-sidebar.scss'

import {ReactComponent as XIcon} from '../assets/icons/x.svg';

export default class Tasksidebar extends Component {
    render() {
        return (
            <div className={this.props.sidebarState ? 'task-sidebar task-sidebar--animate': 'task-sidebar'}>
                <div className="task-sidebar__title">
                    <span>Task 4</span>
                    <XIcon onClick={this.props.sidebarClick}/>
                </div>
                <div className="task-sidebar__input">
                    <input type="text" placeholder="Write an update..." />
                </div>
                <div className="task-sidebar__updates">
                    No Updates yet...
                </div>
            </div>
        )
    }
}
