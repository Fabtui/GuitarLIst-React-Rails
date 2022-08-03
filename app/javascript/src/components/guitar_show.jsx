import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class GuitarShow extends React.Component {

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

function mapStateToProps(state) {
  return {
    guitar: state.selectedGuitar
  };
}

export default connect(mapStateToProps)(GuitarShow);
