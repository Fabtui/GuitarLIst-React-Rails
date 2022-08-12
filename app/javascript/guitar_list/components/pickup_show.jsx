import React from 'react'
import PropTypes from 'prop-types'

const barsBuilder = (tone, name) => {
  const guides = []
  let num = null
  if (tone % 2 != 0) {
    num = Math.round(tone - 1)
  } else {
    num = tone
  }
  console.log(num, 10 - num);
  for (let i = 1; i <= (10 - num); i++) {
    const key = `${name}-${i}`
    guides.push(<div key={key} className="tone__guide"></div>);
  }
  if (tone % 2 != 0) {
    const key = `${name}-half`
    guides.push(<div key={key} className="tone__guide tone__guide__half__active"></div>);
    for (let i = 1; i <= num; i++) {
      const key = `${name}-${i}-active`
      guides.push(<div key={key} className="tone__guide tone__guide__active"></div>);
    }
  } else {
    for (let i = 0; i <= num; i++) {
      const key = `${name}-${i}-active`
      guides.push(<div key={key} className="tone__guide tone__guide__active"></div>);
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
    const bassBars = barsBuilder(this.props.pickup.bass, 'bass')
    const lowMidBars = barsBuilder(this.props.pickup.low_middle, 'low-middle')
    const highMidBars = barsBuilder(this.props.pickup.high_middle, 'high-middle')
    const trebleBars = barsBuilder(this.props.pickup.treble, 'treble')
    return <div className='pickup__show__container'>
        <h5 onClick={this.handleClick}>{this.props.position} pickup: {this.props.pickup.brand} {this.props.pickup.name}</h5>
        <div className={classname}>
          {this.props.pickup.output ? <h6>Output: {this.props.pickup.output}mV</h6> : <h6>Output:</h6>}
          <div className="pickup__tone__row">
            <div className="tone__col tone__bass">
              {bassBars}
              <h6>Bass: {this.props.pickup.bass}</h6>
            </div>
            <div className="tone__col tone__lowmid">
              {lowMidBars}
              <h6>Low Mid: {this.props.pickup.low_middle}</h6>
            </div>
            <div className="tone__col tone__highmid">
              {highMidBars}
              <h6>High Mid: {this.props.pickup.high_middle}</h6>
            </div>
            <div className="tone__col tone__treble">
              {trebleBars}
              <h6>Treble: {this.props.pickup.treble}</h6>
            </div>
          </div>
        </div>
      </div>
  }
}

PickupShow.propTypes = {
  pickup: PropTypes.object
}
