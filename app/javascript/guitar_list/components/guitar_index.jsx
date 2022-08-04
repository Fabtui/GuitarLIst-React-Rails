import React from 'react'
import PropTypes from 'prop-types'
import GuitarList from '../containers/guitar_list'
import GuitarShow from './guitar_show'

export default class GuitarIndex extends React.Component {

  render () {
    return <div className='container app__container'>
      <div className="left__window">
        <GuitarList/>
      </div>
      <div className="right__window">
        <GuitarShow/>
      </div>
      </div>
  }
}

