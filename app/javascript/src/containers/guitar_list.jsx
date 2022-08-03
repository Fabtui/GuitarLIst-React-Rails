import React from 'react'
import PropTypes from 'prop-types'
import { GuitarElement } from './guitar_element';

export class GuitarList extends React.Component {
  constructor (props) {
    super (props)
  }

  // componentWillMount() {
  //   this.props.setGuitars();
  // }

  render () {
    const items = []
    this.props.guitars.forEach((guitar) => {
      items.push(<GuitarElement key={guitar.id} guitar={guitar} onClick={this.props.guitarSelect}/>)
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
