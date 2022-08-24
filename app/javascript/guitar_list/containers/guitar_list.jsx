import React from 'react'
import PropTypes from 'prop-types'
import GuitarElement from './guitar_element';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGuitars } from '../actions/index'
import { setPickups } from '../actions/index';

class GuitarList extends React.Component {

  UNSAFE_componentWillMount() {
    this.props.setGuitars();
    this.props.setPickups();
  }

  render () {
    if (this.props.guitars.length > 0) {
    return <div className='guitar__list'>
          {this.props.guitars.map(guitar => <GuitarElement key={guitar.id} guitar={guitar} pickups={this.props.pickups}/>)}
        </div>
    } else {
    return <div className='guitar__list'>
          <a href='/guitars/new'><h4>No guitar listed</h4></a>
        </div>
    }
  }
}

GuitarElement.propTypes = {
  guitars: PropTypes.array,
  pickups: PropTypes.array
}

function mapDispatchToProps(dispach) {
  return bindActionCreators({
    setGuitars: setGuitars,
    setPickups: setPickups
    },
    dispach
  );
}


function mapStateToProps(reduxState) {
  return {
    guitars: reduxState.guitars,
    pickups: reduxState.pickups
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuitarList)
