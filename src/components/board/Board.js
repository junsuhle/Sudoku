import React, { Component } from 'react';
import './Board.css';

import Cell from '../cell/Cell';

import { connect } from "react-redux"

class Board extends Component {
  render() {
    return (
      <div className="board-wrapper">
         {this.props.boardCells.map((row, rowIndex) => {
           return <div key={ rowIndex } className="row">
            { row.map((cellValue, columnIndex) => {
              return <Cell
                       key={ rowIndex + " " + columnIndex }
                       row={ rowIndex }
                       isCurrent={ this.props.currentCell[0] === rowIndex && this.props.currentCell[1] === columnIndex }
                       isFixed={ this.props.fixedCells[rowIndex + ',' + columnIndex] === true }
                       column={ columnIndex }
                       value={ cellValue }
                     />;
            })}
            </div>;
          })}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    boardCells: store.board.board,
    currentCell: store.board.currentCell,
    fixedCells: store.board.fixedCells
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)