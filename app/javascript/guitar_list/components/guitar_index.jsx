import React from 'react'
import GuitarList from '../containers/guitar_list'
import GuitarShow from '../containers/guitar_show'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

export default class GuitarIndex extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      fold: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      fold: !this.state.fold
    })
  }

  render () {
    const faName = this.state.fold? faAngleDoubleRight : faAngleDoubleLeft
    const classname = this.state.fold? 'left__menu left__menu__fold' : 'left__menu'
    return <div className='app__container'>
        <Navbar/>
      <div className={classname}>
        <div className="left__menu__content">
          <GuitarList/>
        </div>
      <div className="left__menu__icon">
        <FontAwesomeIcon id='left__menu__icon' onClick={this.handleClick} icon={faName} />
      </div>
      </div>
      <div className="right__window">
        <GuitarShow/>
      </div>
      </div>
  }
}
