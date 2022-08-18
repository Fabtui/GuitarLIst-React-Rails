import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import PickupShow from '../components/pickup_show';
import miscLogo from '../../../assets/images/icon-guitar-misc.png';
import bodyLogo from '../../../assets/images/icon-guitar-body.png';
import neckLogo from '../../../assets/images/icon-guitar-neck.png';
import electronicsLogo from '../../../assets/images/icon-guitar-electronics.png';
import hardwareLogo from '../../../assets/images/icon-guitar-hardware.png';

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
    const guitar = this.props.selectedGuitar
    const src = `http://res.cloudinary.com/drzsrupmq/image/upload/v1/development/${guitar.photo_id}`
    const photo = guitar.photo_id ? <img src={src}/> : ''
    const href = `/guitars/${guitar.id}/edit`
    const picClass = this.state.hidden ? 'guitar__image__zoom__container hidden' : 'guitar__image__zoom__container'
    const boxClass = this.state.hidden ? '' : 'box-animation'
    return <div className='guitar__show'>
        <ul>
          <h3>{guitar.name}</h3><a href={href}><FontAwesomeIcon icon={faPen} /></a>
          <div onClick={this.displayPic} className="guitar__image__container">
            {photo}
          </div>

          <img src={miscLogo} alt="misc-logo" />
          <h5>{guitar.brand}</h5>
          <h5>{guitar.name}</h5>
          <h5>{guitar.year}</h5>
          <h5>{guitar.serial_number}</h5>
          <h5>{guitar.made_in}</h5>
          <h5>{guitar.color}</h5>
          <h5>{guitar.artist}</h5>
          <h5>{guitar.price}</h5>
          <h5>{guitar.purchase_date}</h5>

          <img src={bodyLogo} alt="body-logo" />
          <h5>{guitar.body_wood}</h5>
          <h5>{guitar.body_finish}</h5>
          <h5>{guitar.body_top_wood}</h5>

          <img src={neckLogo} alt="neck-logo" />
          <h5>{guitar.neck_wood}</h5>
          <h5>{guitar.fingerboard_wood}</h5>
          <h5>{guitar.scale_length}</h5>
          <h5>{guitar.frets_number}</h5>
          <h5>{guitar.frets_type}</h5>
          <h5>{guitar.neck_shape}</h5>
          <h5>{guitar.neck_radius}</h5>
          <h5>{guitar.neck_width_nut}</h5>
          <h5>{guitar.neck_width_last_fret}</h5>
          <h5>{guitar.neck_finish}</h5>
          <h5>{guitar.neck_attachment}</h5>
          <h5>{guitar.nut_material}</h5>

          <img src={electronicsLogo} alt="electronics-logo" />
          <h5>{guitar.pickups_configuration}</h5>
          {this.props.neckPickup ? <PickupShow position="Neck" pickup={this.props.neckPickup}/> : ''}
          {this.props.centerPickup ? <PickupShow position="Center" pickup={this.props.centerPickup}/> : ''}
          {this.props.bridgePickup ? <PickupShow position="Bridge" pickup={this.props.bridgePickup}/> : ''}

          <img src={hardwareLogo} alt="hardware-logo" />
          <h5>{guitar.tuning_machines}</h5>
          <h5>{guitar.bridge}</h5>
        </ul>
        <div className={picClass}  onClick={this.displayPic}>
          <div className="box-animation">
            <div className="close__button" onClick={this.displayPic}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            {photo}
          </div>
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
