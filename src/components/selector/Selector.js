import React, { Component } from 'react';
import cx from 'classnames'
import './Selector.css';

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { updateBoard, validateBoard } from "../../actions/boardActions"
import { switchSelector } from "../../actions/gameActions"

class Selector extends Component {

  componentWillMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onSelect = (value) => {
    if(value !== 'return') {
      this.props.board.updateBoard(this.props.currentCell[0], this.props.currentCell[1], Number(value))
      var boardCopy = [];
      for (let i in this.props.boardCells) {
        boardCopy[i] = this.props.boardCells[i].slice();
      }
      this.props.board.validateBoard(boardCopy);
    }
    this.props.selector.switchSelector('HIDE')
  }

  onKeyDown = (e) => {
    if(e.keyCode >= 49 && e.keyCode <= 57 && this.props.currentCell[0] !== -1)
      this.onSelect(e.keyCode - 48);
  }

  _generateCell(value) {
    return(
      <div 
        key={ value } 
        className="selector-cell"
        onClick={ (e) => this.onSelect(value) } 
      >
        <h1>{ value }</h1>
      </div>
    )
  }

  render() {
    const selector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'return'];
    let selectorStyle = ['selector-wrapper'];
    if(this.props.hidden) selectorStyle.push('selector-hidden');
    else selectorStyle.push('selector-show');

    return (
      <div className={ cx(selectorStyle) }>
         { selector.map((value) => {
            return this._generateCell(value)
         })}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    hidden: store.game.selectorHidden,
    currentCell: store.board.currentCell,
    boardCells: store.board.board
  }
}

function mapDispatchToProps(dispatch) {
  return {
    board: bindActionCreators({ 
      updateBoard,
      validateBoard
    }, dispatch),
    selector: bindActionCreators({ 
      switchSelector
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)