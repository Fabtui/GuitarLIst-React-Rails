import React from 'react'
import PropTypes from 'prop-types'

class GuitarLink extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const url = `/guitars/${this.props.guitar.id}`
    return <li><a id={this.props.guitar.id} href={url} >{this.props.guitar.brand} {this.props.guitar.name} {this.props.guitar.year}</a></li>
  }
}

export class GuitarList extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const items = []
    this.props.guitars.forEach((guitar) => {
      items.push(<GuitarLink key={guitar.id} guitar={guitar}/>)
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
