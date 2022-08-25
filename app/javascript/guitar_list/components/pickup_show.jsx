import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const barsBuilder = (tone, name) => {
  const guides = []
  let num = null
  if (tone % 2 != 0) {
    num = Math.round(tone - 1)
  } else {
    num = tone
  }
  if (tone) {
    if (tone % 2 != 0) {
      const key = `${name}-half`
      for (let i = 2; i <= (10 - num); i++) {
        const key = `${name}-${i}`
        guides.push(<div key={key} className="tone__guide"></div>);
      }
      guides.push(<div key={key} className="tone__guide tone__guide__half__active"></div>);
      for (let i = 1; i <= num; i++) {
        const key = `${name}-${i}-active`
        guides.push(<div key={key} className="tone__guide tone__guide__active"></div>);
      }
    } else {
      for (let i = 1; i <= (10 - num); i++) {
        const key = `${name}-${i}`
        guides.push(<div key={key} className="tone__guide"></div>);
      }
      for (let i = 1; i <= num; i++) {
        const key = `${name}-${i}-active`
        guides.push(<div key={key} className="tone__guide tone__guide__active"></div>);
      }
    }
  } else {
    for (let i = 1; i <= (10 - num); i++) {
      const key = `${name}-${i}`
      guides.push(<div key={key} className="tone__guide"></div>);
    }
  }
  return guides
}

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
    const pickup = this.props.pickup
    const faName = this.state.fold? faAngleDown : faAngleUp
    const bassBars = barsBuilder(pickup.bass, 'bass')
    const lowMidBars = barsBuilder(pickup.low_middle, 'low-middle')
    const highMidBars = barsBuilder(pickup.high_middle, 'high-middle')
    const trebleBars = barsBuilder(pickup.treble, 'treble')
    return <div className='pickup__show__container'>
        <div onClick={this.handleClick} className="pickup__title">
        {pickup.brand} {pickup.name}
          <FontAwesomeIcon icon={faName} />
        </div>
        <div className={classname}>
          <div className="pickup__tone__row">
            <div className="tone__col tone__bass">
              {bassBars}
              <h6>Bass: {pickup.bass}</h6>
            </div>
            <div className="tone__col tone__lowmid">
              {lowMidBars}
              <h6>Low Mid: {pickup.low_middle}</h6>
            </div>
            <div className="tone__col tone__highmid">
              {highMidBars}
              <h6>High Mid: {pickup.high_middle}</h6>
            </div>
            <div className="tone__col tone__treble">
              {trebleBars}
              <h6>Treble: {pickup.treble}</h6>
            </div>
          </div>
          <table className="table guitar__show__table">
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>{pickup.product_name ? <span>{pickup.product_name}</span> : ''}</td>
              </tr>
              <tr>
                <td>Output</td>
                <td>{pickup.output ? <span>{pickup.output}mV</span> : ''}</td>
              </tr>
              <tr>
                <td>Resistance</td>
                <td>{pickup.resistance ? <span>{pickup.resistance}KΩ</span> : ''}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{pickup.pickup_type ? <span>{pickup.pickup_type}</span> : ''}</td>
              </tr>
              <tr>
                <td>Magnet</td>
                <td>{pickup.magnet ? <span>{pickup.magnet}</span> : ''}</td>
              </tr>
              <tr>
                <td>Active</td>
                <td>{pickup.active ? <span>Yes</span> : <span>No</span>}</td>
              </tr>
              {/* <tr>
                <td>Description</td>
                <td>{pickup.description ? <span>{pickup.description}</span> : ''}</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
  }
}

PickupShow.propTypes = {
  pickup: PropTypes.object
}
