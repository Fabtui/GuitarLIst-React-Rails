import React from 'react'
import PropTypes from 'prop-types'
import { selectGuitar } from '../actions/index'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GuitarElement extends React.Component {
  constructor (props) {
    super (props)
  this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.selectGuitar(this.props.guitar)
  }

  render () {
    return <li><h4 onClick={this.handleClick} id={this.props.guitar.id}>{this.props.guitar.brand} {this.props.guitar.name} {this.props.guitar.year}</h4></li>
  }
}

GuitarElement.propTypes = {
  guitar: PropTypes.object
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { selectGuitar: selectGuitar },
    dispach
  );
}

export default connect(null, mapDispatchToProps)(GuitarElement)
