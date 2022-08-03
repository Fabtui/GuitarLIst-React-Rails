import React from 'react'
import PropTypes from 'prop-types'
import { GuitarElement } from '../components/guitar_element';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGuitars } from '../actions/index'

class GuitarList extends React.Component {
  constructor (props) {
    super (props)
  }

  componentWillMount() {
    this.props.setGuitars();
  }

  render () {
    return <div className='guitar__list'>
        <ul>
        <h2>coucou</h2>
          {this.props.guitars.map(guitar => <GuitarElement key={guitar.id} guitar={guitar} onClick={this.props.onClick}/>)}
        </ul>
      </div>
  }
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
