import React from 'react';
import './App.scss';

import Project from './project/Project';
import Sidebar from './sidebar/Sidebar';
import Workspace from './workspace/Workspace';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="wrapper">
        <Workspace />
        <Project />
      </div>
    </div>
  );
}

export default App;
