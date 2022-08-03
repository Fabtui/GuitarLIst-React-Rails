import React from 'react'
import PropTypes from 'prop-types'
import { GuitarList } from './guitar_list'
import { GuitarShow } from './guitar_show'

export class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      selected_guitar: null
    }
    this.guitarSelect = this.guitarSelect.bind(this)
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
        <GuitarList guitars={this.props.guitars} guitarSelect={this.guitarSelect}/>
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
