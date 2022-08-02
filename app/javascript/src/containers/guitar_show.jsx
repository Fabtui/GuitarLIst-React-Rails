import React from 'react'
import PropTypes from 'prop-types'

export class GuitarShow extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    if (this.props.guitar) {
    return <div className='guitar__show'>
        <ul>
          <li>{this.props.guitar.name}</li>
        </ul>
      </div>
    }
  }
}

GuitarShow.propTypes = {
  guitar: PropTypes.object
}
