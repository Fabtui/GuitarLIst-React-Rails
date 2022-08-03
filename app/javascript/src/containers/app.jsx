import React from 'react'
import PropTypes from 'prop-types'
import { GuitarList } from './guitar_list'
import { GuitarShow } from './guitar_show'

const GUITAR_API = [
{
"id": 3,
"brand": "Ibanez",
"name": "JEM77BFP",
"year": 1991,
"user_id": 1,
"created_at": "2022-08-02T14:13:16.664Z",
"updated_at": "2022-08-02T14:13:16.664Z"
},
{
"id": 2,
"brand": "Music Man",
"name": "JP6",
"year": 2001,
"user_id": 1,
"created_at": "2022-08-02T14:13:16.656Z",
"updated_at": "2022-08-02T14:13:16.656Z"
},
{
"id": 1,
"brand": "Fender",
"name": "Stratocaster",
"year": 2002,
"user_id": 1,
"created_at": "2022-08-02T14:13:16.647Z",
"updated_at": "2022-08-02T14:13:16.647Z"
}
]

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
    GUITAR_API.forEach(guitar => {
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
        <GuitarList guitars={GUITAR_API} guitarSelect={this.guitarSelect}/>
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
