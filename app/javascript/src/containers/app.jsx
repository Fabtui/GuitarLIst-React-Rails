import React from 'react'
import PropTypes from 'prop-types'
import GuitarList from './guitar_list'
import GuitarShow from '../components/guitar_show'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGuitars } from '../actions/index'

class App extends React.Component {

  componentWillMount() {
    this.props.setGuitars();
  }

  render () {
    return <div className='container app__container'>
      <div className="left__window">
        <GuitarList guitars={this.props.guitars}/>
      </div>
      <div className="right__window">
        <GuitarShow/>
      </div>
      </div>
  }
}

App.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
