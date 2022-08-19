import React from 'react'
import PropTypes from 'prop-types'
import { selectGuitar } from '../actions/index'
import { setNeckPickup } from '../actions/index';
import { setCenterPickup } from '../actions/index';
import { setBridgePickup } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GuitarElement extends React.Component {
  constructor (props) {
    super (props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.selectGuitar(this.props.guitar)
    const centerPickup = this.props.pickups.find(pickup => pickup.id === this.props.guitar.center_pickup_id)
    centerPickup ? this.props.setCenterPickup(centerPickup) : this.props.setCenterPickup(null)
    const bridgePickup = this.props.pickups.find(pickup => pickup.id === this.props.guitar.bridge_pickup_id)
    bridgePickup ? this.props.setBridgePickup(bridgePickup) : this.props.setBridgePickup(null)
    const neckPickup = this.props.pickups.find(pickup => pickup.id === this.props.guitar.neck_pickup_id)
    neckPickup ? this.props.setNeckPickup(neckPickup) : this.props.setNeckPickup(null)
  }

  render () {
    const style = (this.props.guitar === this.props.selectedGuitar) ? 'guitar__element__active' : ''
    return <h4 className={style} onClick={this.handleClick} id={this.props.guitar.id}>{this.props.guitar.brand} {this.props.guitar.name}</h4>
  }
}

GuitarElement.propTypes = {
  guitar: PropTypes.object
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { selectGuitar: selectGuitar,
      setNeckPickup: setNeckPickup,
      setCenterPickup: setCenterPickup,
      setBridgePickup: setBridgePickup,
    },
    dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    selectedGuitar: reduxState.selectedGuitar,
    pickups: reduxState.pickups,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GuitarElement)
