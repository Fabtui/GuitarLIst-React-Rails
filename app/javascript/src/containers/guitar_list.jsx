import React from 'react'
import PropTypes from 'prop-types'
import GuitarElement from './guitar_element';
import { connect } from 'react-redux';

class GuitarList extends React.Component {

  render () {
    return <div className='guitar__list'>
        <ul>
          {this.props.guitars.map(guitar => <GuitarElement key={guitar.id} guitar={guitar}/>)}
        </ul>
      </div>
  }
}

function mapStateToProps(reduxState) {
  return {
    selectedGuitar: reduxState.selectedGuitar
  }
}

export default connect(mapStateToProps)(GuitarList)
