import React from 'react'
import PropTypes from 'prop-types'
import GuitarElement from './guitar_element';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGuitars } from '../actions/index'

class GuitarList extends React.Component {

  UNSAFE_componentWillMount() {
    this.props.setGuitars();
  }

  render () {
    return <div className='guitar__list'>
        <ul>
          {this.props.guitars.map(guitar => <GuitarElement key={guitar.id} guitar={guitar}/>)}
        </ul>
      </div>
  }
}

GuitarElement.propTypes = {
  guitars: PropTypes.array
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { setGuitars: setGuitars },
    dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    guitars: reduxState.guitars
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuitarList)
