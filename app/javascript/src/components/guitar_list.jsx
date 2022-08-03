import React from 'react'
import PropTypes from 'prop-types'
import { GuitarElement } from './guitar_element';

export class GuitarList extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return <div className='guitar__list'>
        <ul>
          {this.props.guitars.map(guitar => <GuitarElement key={guitar.id} guitar={guitar} onClick={this.props.onClick}/>)}
        </ul>
      </div>
  }
}
