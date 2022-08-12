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
    const bassNum = Math.round(this.props.pickup.bass)
    const lowMidNum = Math.round(this.props.pickup.low_middle)
    const highMidNum = Math.round(this.props.pickup.high_middle)
    const trebleNum = Math.round(this.props.pickup.treble)
    const bassGuides = [];
    for (let i = 1; i <= (10 - bassNum); i++) {
      bassGuides.push(<div id={i} className="tone__guide"></div>);
    }
    for (let i = 1; i <= bassNum; i++) {
      bassGuides.push(<div id={i} className="tone__guide tone__guide__active"></div>);
    }
    const lowMidGuides = [];
    for (let i = 1; i <= (10 - lowMidNum); i++) {
      lowMidGuides.push(<div id={i} className="tone__guide"></div>);
    }
    for (let i = 1; i <= lowMidNum; i++) {
      lowMidGuides.push(<div id={i} className="tone__guide tone__guide__active"></div>);
    }
    const highMidGuides = [];
    for (let i = 1; i <= (10 - highMidNum); i++) {
      highMidGuides.push(<div id={i} className="tone__guide"></div>);
    }
    for (let i = 1; i <= highMidNum; i++) {
      highMidGuides.push(<div id={i} className="tone__guide tone__guide__active"></div>);
    }
    const trebleGuides = [];
    for (let i = 1; i <= (10 - trebleNum); i++) {
      trebleGuides.push(<div id={i} className="tone__guide"></div>);
    }
    for (let i = 1; i <= trebleNum; i++) {
      trebleGuides.push(<div id={i} className="tone__guide tone__guide__active"></div>);
    }
    return <div className='pickup__show__container'>
        <h5 onClick={this.handleClick}>{this.props.position} pickup: {this.props.pickup.brand} {this.props.pickup.name}</h5>
        <div className={classname}>
          {this.props.pickup.output ? <h6>Output: {this.props.pickup.output}mV</h6> : <h6>Output:</h6>}
          <div className="pickup__tone__row">
            <div className="tone__col tone__bass">
              {bassGuides}
              <h6>Bass: {this.props.pickup.bass}</h6>
            </div>
            <div className="tone__col tone__lowmid">
              {lowMidGuides}
              <h6>Low Mid: {this.props.pickup.low_middle}</h6>
            </div>
            <div className="tone__col tone__highmid">
              {highMidGuides}
              <h6>High Mid: {this.props.pickup.high_middle}</h6>
            </div>
            <div className="tone__col tone__treble">
              {trebleGuides}
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
