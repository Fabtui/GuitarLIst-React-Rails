import React from 'react'
import PropTypes from 'prop-types'
import GuitarList from '../containers/guitar_list'
import GuitarShow from './guitar_show'

export default class App extends React.Component {

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
