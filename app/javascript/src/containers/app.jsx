import React from 'react'
import PropTypes from 'prop-types'
import { GuitarList } from '../components/guitar_list'
import { GuitarShow } from '../components/guitar_show'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGuitars } from '../actions/index'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      selected_guitar: null
    }
    this.guitarSelect = this.guitarSelect.bind(this)
  }

  componentWillMount() {
    this.props.setGuitars();
  }

  guitarSelect (id) {
    let selected_guitar
    this.props.guitars.forEach(guitar => {
      if (guitar.id == id) {
        selected_guitar = guitar
      }
    });
    this.setState({
      selected_guitar: selected_guitar
    })
  }

  render () {
    return <div className='container app__container'>
      <div className="left__window">
        <GuitarList onClick={this.guitarSelect} guitars={this.props.guitars}/>
      </div>
      <div className="right__window">
        <GuitarShow guitar={this.state.selected_guitar}/>
      </div>
      </div>
  }
}

App.propTypes = {
  selected_guitar: PropTypes.object
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
