import React from 'react'
import PropTypes from 'prop-types'

export default class PickupShow extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      fold: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      fold: !this.state.fold
    })
  }

  render () {
    const classname = this.state.fold? 'pickup__details hidden' : 'pickup__details'
    return <div className='pickup__show__container'>
        <h5 onClick={this.handleClick}>{this.props.position} pickup: {this.props.pickup.brand} {this.props.pickup.name}</h5>
        <div className={classname}>
          <h6>Output: {this.props.pickup.output}mV</h6>
        </div>
      </div>
  }
}

PickupShow.propTypes = {
  pickup: PropTypes.object
}
