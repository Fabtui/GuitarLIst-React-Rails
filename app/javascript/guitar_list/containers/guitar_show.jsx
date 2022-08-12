import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import PickupShow from '../components/pickup_show';

class GuitarShow extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      hidden: true
    }
    this.displayPic = this.displayPic.bind(this)
  }

  displayPic() {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render () {
    if (this.props.selectedGuitar) {
    const src = `http://res.cloudinary.com/drzsrupmq/image/upload/v1/development/${this.props.selectedGuitar.photo_id}`
    const photo = this.props.selectedGuitar.photo_id ? <img src={src}/> : ''
    const href = `/guitars/${this.props.selectedGuitar.id}/edit`
    const picClass = this.state.hidden ? 'guitar__image__zoom__container hidden' : 'guitar__image__zoom__container'
    return <div className='guitar__show'>
        <ul>
          <h3>{this.props.selectedGuitar.name}</h3><a href={href}><FontAwesomeIcon icon={faPen} /></a>
          <div onClick={this.displayPic} className="guitar__image__container">
            {photo}
          </div>
          {this.props.neckPickup ? <PickupShow pickup={this.props.neckPickup}/> : ''}
          {this.props.centerPickup ? <PickupShow pickup={this.props.centerPickup}/> : ''}
          {this.props.bridgePickup ? <PickupShow pickup={this.props.bridgePickup}/> : ''}
        </ul>
        <div className={picClass}  onClick={this.displayPic}>
          <div className="close__button" onClick={this.displayPic}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          {photo}
        </div>
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
