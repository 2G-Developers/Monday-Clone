import React from 'react';
import './drag.scss';
import DragSortableList from 'react-drag-sortable' 

import {ReactComponent as ArrowLeftCircle} from '../assets/icons/arrow-left-circle.svg';
import {ReactComponent as ChatIcon} from '../assets/icons/chat.svg';
import {ReactComponent as ListIcon} from '../assets/icons/list.svg';
import {ReactComponent as UserIcon} from '../assets/icons/user.svg';
import Tasksidebar from '../Task-sidebar/Task-sidebar';

class Bar extends React.Component {
  constructor() {
    super();
    this.state = {
      editModeEnabled: false,
    }
  }
    handleEditClick() {
    this.setState({ editModeEnabled: !this.state.editModeEnabled });
  }
  render() {
    return (
    <div className="parent">
        <div className="color-code"></div>
        <div className="text-place">
            <input type="text" className="text-box" value={this.props.text} disabled={!this.state.editModeEnabled}/>
            {
            // eslint-disable-next-line
            }<a role="button" title="Edit" className="showme" onClick={this.handleEditClick.bind(this)}><span>✏️</span></a>
        </div>
        <div className="comment">
            <ChatIcon style={{strokeWidth: "1.5", stroke: "#c5c7d0", width: "1.5rem", height: "1.5rem"}}/>
        </div>
        <div className="vline"></div> 
        <div className="comment">
            <UserIcon style={{ stroke: "#c5c7d0", width: "1.5rem", height: "1.5rem"}} />
        </div>
        <div className="vline"></div> 
        <div className="comment">
            <ListIcon style={{ stroke: "#c5c7d0", width: "1.5rem", height: "1.5rem"}} />
        </div>
        <div className="vline"></div> 
        <div className="priority-place" style={{backgroundColor: this.props.prioritycolor }} title="level" >
            {this.props.priority}
        </div>
       <div className="status-place" title="status">
        </div>
         <div className="timeline-place" style={{backgroundColor:'#8A33D3' }} title="date">
            <span> Nov 10 - Nov 15</span>
        </div>
   </div>
  )
  }

}


class Draggable extends React.Component {
  constructor() {
    super()
    this.state = {
      caret: true,
      sidebarActive: false
    }
      
  }

toggleSidebar = () => {
    this.setState((prevState) => ({sidebarActive: !prevState.sidebarActive}))
}

activateLasers(){
    this.setState((prevState) => ({caret: !prevState.caret}));
}
 render() {  
 var listState = {true:"app-list-set",false:"app-list-set-hide"} 
     var list = [
    {content: <Bar text={"Lorem ipsum dolor"} prioritycolor="#FDAB3D" priority="Medium" />},
    {content: <Bar text={"sit amet consectetur adipisi"} prioritycolor="#E2445C" priority="High" />},
    {content: <Bar text={"elit. Quod ipsum optio"} prioritycolor="#00C875" priority="Low" />}

];

    return (
    <div className="App-draggable">
    
        <div className="app-list-collapse">
            <ArrowLeftCircle style={{width:"1.125rem", height:"1.125rem", transform: "rotate(270deg)", fill: "#A25DDC", stroke: "#fff", cursor: "pointer"}} onClick={this.activateLasers.bind(this)} />
             <div class="app-text"> Phase 2 </div>
         </div>

        <div onClick={this.toggleSidebar} className={listState[this.state.caret]}>
            <DragSortableList items={list} type="vertical"/>
        </div>
        {this.state.sidebarActive ? (<div className="backdrop" onClick={this.toggleSidebar} style={{zIndex: "500"}}></div>): null}
        <Tasksidebar sidebarState={this.state.sidebarActive} sidebarClick={this.toggleSidebar}/>
    </div>
  );
    }
}

export default Draggable;