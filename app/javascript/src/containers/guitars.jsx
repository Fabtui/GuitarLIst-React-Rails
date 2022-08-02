import React from 'react'
import PropTypes from 'prop-types'

class GuitarLink extends React.Component {
  constructor (props) {
    super (props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.onClick(e.target.id);
  }

  render () {
    return <li><h4 onClick={this.handleClick} id={this.props.guitar.id}>{this.props.guitar.brand} {this.props.guitar.name} {this.props.guitar.year}</h4></li>
  }
}

export class GuitarList extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const items = []
    this.props.guitars.forEach((guitar) => {
      items.push(<GuitarLink key={guitar.id} guitar={guitar} onClick={this.props.guitarSelect}/>)
    })
    return <div className='guitar__list'>
        <ul>
          {items}
        </ul>
      </div>
  }
}

GuitarList.propTypes = {
  guitars: PropTypes.array
}
