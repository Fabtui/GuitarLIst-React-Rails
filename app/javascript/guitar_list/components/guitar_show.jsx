import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class GuitarShow extends React.Component {

  render () {
    if (this.props.selectedGuitar) {
    const src = `http://res.cloudinary.com/drzsrupmq/image/upload/c_fill,h_300,w_400/v1/development/${this.props.selectedGuitar.photo_id}`
    const photo = this.props.selectedGuitar.photo_id ? <img src={src}/> : ''
    const href = `/guitars/${this.props.selectedGuitar.id}/edit`
    return <div className='guitar__show'>
        <ul>
          <h3>{this.props.selectedGuitar.name}</h3>
          <a href={href}>Edit</a>
          {photo}
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
