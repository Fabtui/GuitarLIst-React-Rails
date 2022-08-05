import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

class GuitarShow extends React.Component {

  render () {
    if (this.props.selectedGuitar) {
    const src = `http://res.cloudinary.com/drzsrupmq/image/upload/c_fill,h_300,w_400/v1/development/${this.props.selectedGuitar.photo_id}`
    const photo = this.props.selectedGuitar.photo_id ? <img src={src}/> : ''
    const href = `/guitars/${this.props.selectedGuitar.id}/edit`
    return <div className='guitar__show'>
        <ul>
          <h3>{this.props.selectedGuitar.name}</h3><a href={href}><FontAwesomeIcon icon={faPen} /></a>
          <div className="guitar__image__container">
            {photo}
          </div>
          <h5>{this.props.neckPickup ? this.props.neckPickup.name : ''}</h5>
          <h5>{this.props.centerPickup ? this.props.centerPickup.name : ''}</h5>
          <h5>{this.props.bridgePickup ? this.props.bridgePickup.name : ''}</h5>
        </ul>
      </div>
    }
  }
}

GuitarShow.propTypes = {
  selectedGuitar: PropTypes.object
}

function mapStateToProps(state) {
  return {
    selectedGuitar: state.selectedGuitar,
    neckPickup: state.neckPickup,
    centerPickup: state.centerPickup,
    bridgePickup: state.bridgePickup
  };
}

export default connect(mapStateToProps)(GuitarShow);
