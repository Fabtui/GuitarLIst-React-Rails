import React from 'react'
import PropTypes from 'prop-types'

export class GuitarElement extends React.Component {
  constructor (props) {
    super (props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.onClick(e.target.id);
  }

  render () {
    return <li><h4 onClick={this.handleClick} id={this.props.guitar.id}>{this.props.guitar.brand} {this.props.guitar.name} {this.props.guitar.year}</h4></li>
  }
}

GuitarElement.propTypes = {
  guitars: PropTypes.object
}
