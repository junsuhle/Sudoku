import React, { Component } from 'react'
import cx from 'classnames'
import './StatusBoard.css'

import { connect } from "react-redux"


class StatusBoard extends Component {

  onCell = (e) => {
    if(this.props.isFixed === false) {
      this.props.selector.switchSelector('SHOW')
      this.props.board.updateCurrentCell(this.props.row, this.props.column)
    }
  }

  render() {
    let statusStyle = [];
    if(this.props.solved) statusStyle.push('solved');
    else statusStyle.push('unsolved');

    return (
      <div 
        className="status-wrapper"
        onClick={ this.onCell }
      >
         <h1 className={ cx(statusStyle) }>{ this.props.solved ? 'Solved!' : 'Not Solved' }</h1>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    solved: store.board.solved
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBoard)