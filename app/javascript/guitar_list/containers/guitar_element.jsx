import React from 'react'
import PropTypes from 'prop-types'
import { selectGuitar } from '../actions/index'
import { setNeckPickup } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GuitarElement extends React.Component {
  constructor (props) {
    super (props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const neckPickup = this.props.pickups.find(pickup => pickup.id === this.props.guitar.neck_pickup_id)
    this.props.selectGuitar(this.props.guitar)
    this.props.setNeckPickup(neckPickup)
  }

  render () {
    const style = (this.props.guitar === this.props.selectedGuitar) ? 'guitar__element__active' : ''
    return <li><h4 className={style} onClick={this.handleClick} id={this.props.guitar.id}>{this.props.guitar.brand} {this.props.guitar.name} {this.props.guitar.year}</h4></li>
  }
}

GuitarElement.propTypes = {
  guitar: PropTypes.object
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { selectGuitar: selectGuitar,
      setNeckPickup: setNeckPickup
    },
    dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    selectedGuitar: reduxState.selectedGuitar,
    pickups: reduxState.pickups,
    neckPickup: reduxState.neckPickup
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GuitarElement)
