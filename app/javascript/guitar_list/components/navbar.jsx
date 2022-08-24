import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      fold: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const rightWindow = document.querySelector('.right__window')
    rightWindow.addEventListener('click', (e) => {
      this.setState({
        fold: true
      })
    })
  }

  handleClick() {
    this.setState({
      fold: !this.state.fold
    })
  }

  render () {
    const faName = this.state.fold? '' : ''
    const dropdownClassname = this.state.fold? 'nav-dropdown menu__hidden' : 'nav-dropdown'
    const menuIconClassname = this.state.fold? 'fa-solid fa-bars' : 'fa-solid fa-xmark'
    return <div className="navbar navbar-guitarlist">
        <div className="navbar__item">
          <a href='/' className='navbar-brand'><h4>GuitarList</h4></a>
        </div>
        <div className="navbar__item" id="menu__bars" onClick={this.handleClick}>
          <div className="nav-item">
            <i className={menuIconClassname}></i>
          </div>
        </div>
      <div className={dropdownClassname}>
          <ul>
            <li className="nav-dropdown-item">
              <a href='/'>Home</a>
            </li>
            { this.props.guitars.length > 0 ?
              <li className="nav-dropdown-item">
                <a href='/guitars'>Table</a>
              </li> : ''
            }
            <li className="nav-dropdown-item">
              <a href='/guitars/new'>New Guitar</a>
            </li>
            <li className="nav-dropdown-item">
              <a href='/pickups/new'>New Pickup</a>
            </li>
            {/* <li className="nav-dropdown-item">
              <a href='/api/v1/guitars' target='_blank'>API Guitar</a>
            </li>
            <li className="nav-dropdown-item">
              <a href='/api/v1/pickups' target='_blank'>API Pickup</a>
            </li> */}
            { this.props.selectedGuitar ?
            <li className="nav-dropdown-item">
              <a href={`/guitars/${this.props.selectedGuitar.id}/edit`}>Edit Guitar</a>
            </li> : ''
            }
            <li className="nav-dropdown-item">
              <a href='/users/sign_out' rel="nofollow" data-method='delete'><FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
            </li>
          </ul>
        </div>
      </div>
  }
}

function mapStateToProps(state) {
  return {
    selectedGuitar: state.selectedGuitar,
    guitars: state.guitars,
  };
}

export default connect(mapStateToProps)(Navbar);
