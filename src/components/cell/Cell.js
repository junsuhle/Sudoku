import React, { Component } from 'react'
import cx from 'classnames'
import './Cell.css'

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { updateCurrentCell } from "../../actions/boardActions"
import { switchSelector } from "../../actions/gameActions"

class Cell extends Component {

  onCell = (e) => {
    if(this.props.isFixed === false) {
      this.props.selector.switchSelector('SHOW')
      this.props.board.updateCurrentCell(this.props.row, this.props.column)
    }
  }

  render() {
    let cellStyle = ['cell-wrapper']
    if(this.props.isCurrent) cellStyle.push('current-cell')
    if(this.props.isFixed) cellStyle.push('fixed-cell')
    if(this.props.row % 3 === 0) cellStyle.push('top-border')
    if(this.props.row % 3 === 2) cellStyle.push('bottom-border')
    if(this.props.column % 3 === 0) cellStyle.push('left-border')
    if(this.props.column % 3 === 2) cellStyle.push('right-border')

    return (
      <div 
        className={ cx(cellStyle) }
        onClick={ this.onCell }
      >
         <h1>{ this.props.value !== 0 ? this.props.value : '' }</h1>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    board: bindActionCreators({ 
      updateCurrentCell 
    }, dispatch),
    selector: bindActionCreators({ 
      switchSelector
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)