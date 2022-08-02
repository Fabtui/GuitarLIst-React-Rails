// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { GuitarList } from '../src/containers/guitars'

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

const guitar_api = [
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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GuitarList guitars={guitar_api}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
