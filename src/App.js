import React, { Component } from 'react';
import './App.css';

import StatusBoard from './components/statusBoard/StatusBoard';
import Board from './components/board/Board';
import Selector from './components/selector/Selector';

class App extends Component {
  render() {
    return (
      <div className="sudoku-wrapper">
          <StatusBoard />
          <Board />
          <Selector />
      </div>
    );
  }
}

export default App;
