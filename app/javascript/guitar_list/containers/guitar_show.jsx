import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
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
    const picClass = this.state.hidden ? 'guitar__image__zoom__container hidden' : 'guitar__image__zoom__container'
    // const boxClass = this.state.hidden ? '' : 'box-animation'
    return <div className='guitar__show'>
          <h3>{guitar.name}</h3>
          <div className="guitar__show__container">
            <div className="guitar__show__infos">
              <img src={miscLogo} alt="misc-logo" />
              <table className="table table__misc">
                <tbody>
                  <tr>
                    <td>Brand</td>
                    <td>{guitar.brand}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{guitar.name}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{guitar.year}</td>
                  </tr>
                  <tr>
                    <td>Serial Number</td>
                    <td>{guitar.serial_number}</td>
                  </tr>
                  <tr>
                    <td>Made In</td>
                    <td>{guitar.made_in}</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>{guitar.color}</td>
                  </tr>
                  <tr>
                    <td>Artist</td>
                    <td>{guitar.artist}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{guitar.price}</td>
                  </tr>
                  <tr>
                    <td>Purchase Date</td>
                    <td>{guitar.purchase_date}</td>
                  </tr>
                </tbody>
              </table>
              <img src={bodyLogo} alt="body-logo" />
                <table className="table table__body">
                  <tbody>
                    <tr>
                      <td>Wood</td>
                      <td>{guitar.body_wood}</td>
                    </tr>
                    <tr>
                      <td>Finish</td>
                      <td>{guitar.body_finish}</td>
                    </tr>
                    <tr>
                      <td>Top Wood</td>
                      <td>{guitar.body_top_wood}</td>
                    </tr>
                  </tbody>
                </table>

              <img src={neckLogo} alt="neck-logo" />
                <table className="table table__neck">
                  <tbody>
                    <tr>
                      <td>Wood</td>
                      <td>{guitar.neck_wood}</td>
                    </tr>
                    <tr>
                      <td>Figerboard</td>
                      <td>{guitar.fingerboard_wood}</td>
                    </tr>
                    <tr>
                      <td>Scale Length</td>
                      <td>{guitar.scale_length}</td>
                    </tr>
                    <tr>
                      <td>Fret Number</td>
                      <td>{guitar.frets_number}</td>
                    </tr>
                    <tr>
                      <td>Fret Type</td>
                      <td>{guitar.frets_type}</td>
                    </tr>
                    <tr>
                      <td>Neck Shape</td>
                      <td>{guitar.neck_shape}</td>
                    </tr>
                    <tr>
                      <td>Radius</td>
                      <td>{guitar.neck_radius}</td>
                    </tr>
                    <tr>
                      <td>Neck Width Nut</td>
                      <td>{guitar.neck_width_nut}</td>
                    </tr>
                    <tr>
                      <td>Neck Width Last Fret</td>
                      <td>{guitar.neck_width_last_fret}</td>
                    </tr>
                    <tr>
                      <td>Finish</td>
                      <td>{guitar.neck_finish}</td>
                    </tr>
                    <tr>
                      <td>Attachment</td>
                      <td>{guitar.neck_attachment}</td>
                    </tr>
                    <tr>
                      <td>Nut Material</td>
                      <td>{guitar.nut_material}</td>
                    </tr>
                  </tbody>
                </table>

              <img src={electronicsLogo} alt="electronics-logo" />
                <table className="table table__electronics">
                  <tbody>
                    <tr>
                      <td>Configuration</td>
                      <td>{guitar.pickups_configuration}</td>
                    </tr>
                    <tr>
                      <td>Neck</td>
                      <td>{this.props.neckPickup ? <PickupShow position="Neck" pickup={this.props.neckPickup}/> : ''}</td>
                    </tr>
                    <tr>
                      <td>Center</td>
                      <td>{this.props.centerPickup ? <PickupShow position="Center" pickup={this.props.centerPickup}/> : ''}</td>
                    </tr>
                    <tr>
                      <td>Bridge</td>
                      <td>{this.props.bridgePickup ? <PickupShow position="Bridge" pickup={this.props.bridgePickup}/> : ''}</td>
                    </tr>
                  </tbody>
                </table>

              <img src={hardwareLogo} alt="hardware-logo" />
                <table className="table table__hardware">
                  <tbody>
                    <tr>
                      <td>Tuning Machines</td>
                      <td>{guitar.tuning_machines}</td>
                    </tr>
                    <tr>
                      <td>Bridge</td>
                      <td>{guitar.bridge}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div onClick={this.displayPic} className="guitar__image__container">
              <div className="guitar__image">
                {photo}
              </div>
            </div>
          </div>
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
