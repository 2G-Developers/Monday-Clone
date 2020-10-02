import React from 'react';
import './drag.scss';
import DragSortableList from 'react-drag-sortable' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faUserCircle,faList,faChevronCircleDown,faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

class Bar extends React.Component {
  constructor(props) {
    super(props);
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
            <a role="button" title="Edit" className="showme" onClick={this.handleEditClick.bind(this)}>✏️</a>
        </div>
        <div className="comment">
            <FontAwesomeIcon icon={faComment} title="comment" />
        </div>
        <div className="vline"></div> 
        <div className="comment">
            <FontAwesomeIcon icon={faUserCircle}  title="profile"/>
        </div>
        <div className="vline"></div> 
        <div className="comment">
            <FontAwesomeIcon icon={faList}  title="tasks"/>
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
  constructor(props) {
    super(props);
    this.state = {
      caret: true,
    }
      
  }

activateLasers(){
    this.setState({caret:!this.state.caret});
}
 render() {  
 var caretState = {true:faChevronCircleDown,false:faChevronCircleRight} 
 var listState = {true:"app-list-set",false:"app-list-set-hide"} 
     var list = [
    {content: <Bar text={"Test1"} prioritycolor="#FDAB3D" priority="MEDIUM" />},
    {content: <Bar text={"Test2"} prioritycolor="#E2445C" priority="HIGH" />},
    {content: <Bar text={"Test3"} prioritycolor="#00C875" priority="LOW" />}

];
 var onSort = function() {
    console.log("sortedList");
 }
 var placeholder = (
    <div className="placeholderContent"> DROP HERE ! </div>
);


    return (
    <div className="App">
    
        <div className="app-list-collapse">
             <FontAwesomeIcon className="down-caret"  className="carat-design" onClick={this.activateLasers.bind(this)} icon={caretState[this.state.caret]} />
             <div class="app-text"> Phase 2 </div>
         </div>
            <div className={listState[this.state.caret]}>
                
                <DragSortableList items={list}   type="vertical"/>
            </div>
    </div>
  );
    }
}

export default Draggable;