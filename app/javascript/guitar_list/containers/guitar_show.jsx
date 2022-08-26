import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import PickupShow from '../components/pickup_show';
import miscLogo from '../../../assets/images/icon-guitar-misc.png';
import bodyLogo from '../../../assets/images/icon-guitar-body.png';
import neckLogo from '../../../assets/images/icon-guitar-neck.png';
import guitarPlaceholder from '../../../assets/images/guitar-placeholder.jpg'
import backgroundImage from '../../../assets/images/Gibson-Les-Paul-1950s-Template.jpg'
import electronicsLogo from '../../../assets/images/icon-guitar-electronics.png';
import hardwareLogo from '../../../assets/images/icon-guitar-hardware.png';

class GuitarShow extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      hidden: true,
      selectedPic: null,
      mainPicSelected: false
    }
    this.displayPic = this.displayPic.bind(this)
    this.selectPic = this.selectPic.bind(this)
    this.mainPicSelected = this.mainPicSelected.bind(this)
    this.secondaryPicSelected = this.secondaryPicSelected.bind(this)
  }

  displayPic() {
    const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (deviceWidth < 750) {
      return
    }
    this.setState({
      hidden: !this.state.hidden
    })
  }

  selectPic(e) {
    this.setState({
      selectedPic: e.target.src
    })
  }

  mainPicSelected() {
    this.setState({
      mainPicSelected: true
    })
  }

  secondaryPicSelected() {
    this.setState({
      mainPicSelected: false
    })
  }

  render () {
    if (this.props.selectedGuitar) {
      const guitar = this.props.selectedGuitar
      const src = `http://res.cloudinary.com/drzsrupmq/image/upload/v1/development/${guitar.photo_id}`
      const photo = guitar.photo_id ? <img src={src}/> : <img src={guitarPlaceholder}/>
      const mainPicClass = this.state.mainPicSelected ? 'image__container main__pic' : 'image__container secondary__pic'
      const picClass = this.state.hidden ? `guitar__image__zoom__container hidden` : `guitar__image__zoom__container`
      const closeClass = this.state.hidden ? 'close__button' : 'close__button show__close__button'
      return <div className='guitar__show'>
          <h3>{guitar.brand} {guitar.name}</h3>
          <div className="guitar__show__container">
            <div className="guitar__show__infos">
              <table className="table guitar__show__table">
                <tbody>
                  <img src={miscLogo} alt="misc-logo" />
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

                  <tbody>
                    <img src={bodyLogo} alt="body-logo" />
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

                  <tbody>
                    <img src={neckLogo} alt="neck-logo" />
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
                      <td>{guitar.scale_length ? <span>{guitar.scale_length}mm</span> : ''}</td>
                    </tr>
                    <tr>
                      <td>Fret Number</td>
                      <td>{guitar.frets_number ? <span>{guitar.frets_number}mm</span> : ''}</td>
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
                      <td>{guitar.neck_radius ? <span>{guitar.neck_radius}mm</span> : ''}</td>
                    </tr>
                    <tr>
                      <td>Neck Width Nut</td>
                      <td>{guitar.neck_width_nut ? <span>{guitar.neck_width_nut}mm</span> : ''}</td>
                    </tr>
                    <tr>
                      <td>Neck Width Last Fret</td>
                      <td>{guitar.neck_width_last_fret ? <span>{guitar.neck_width_last_fret}mm</span> : ''}</td>
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
                    <tr>
                      <td>Inlays</td>
                      <td>{guitar.inlays}</td>
                    </tr>
                  </tbody>


                  <tbody>
                    <img src={electronicsLogo} alt="electronics-logo" />
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


                  <tbody>
                    <img src={hardwareLogo} alt="hardware-logo" />
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
            <div className="guitar__image__container">
              <div onClick={(e) => {this.displayPic(); this.selectPic(e); this.mainPicSelected();}} className="guitar__image">
                {photo}
              </div>
              <div className="guitar__images">
                { guitar.photos_ids.length > 0 ?
                guitar.photos_ids.map(photo =>
                <div onClick={(e) => {this.displayPic(); this.selectPic(e); this.secondaryPicSelected();}} className="guitar__images__item" key={photo} >
                  <img src={`https://res.cloudinary.com/drzsrupmq/image/upload/v1661442456/GuitarList/${photo}`}/>
                </div>) : ''
                }
              </div>
            </div>
          </div>
        <div className={picClass}  onClick={this.displayPic}>
          <div className={mainPicClass}>
            <div className={closeClass} onClick={this.displayPic}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
              <img src={this.state.selectedPic}/>
          </div>
        </div>
      </div>
    } else {
    return <div className='guitar__show guitar__show__empty'>
        <h3>Welcome in GuitarList</h3>
        <div className="guitar__show__empty__image">
          <img src={backgroundImage} alt="background" id="background-image" />
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
