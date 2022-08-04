import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class GuitarShow extends React.Component {

  render () {
    if (this.props.selectedGuitar) {
    return <div className='guitar__show'>
        <ul>
          <li>{this.props.selectedGuitar.name}</li>
        </ul>
      </div>
    }
  }
}

GuitarShow.propTypes = {
  selectedGuitar: PropTypes.object
}

function mapStateToProps(state) {
  return {
    selectedGuitar: state.selectedGuitar
  };
}

export default connect(mapStateToProps)(GuitarShow);
