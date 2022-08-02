import React from 'react'

class GuitarLink extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const url = `/guitars/${this.props.guitar.id}`
    return <li><a id={this.props.guitar.id} href={url} >{this.props.guitar.name}</a></li>
  }
}

export class GuitarList extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    const items = []
    this.props.guitars.forEach((guitar) => {
      items.push(<GuitarLink key={guitar.id} guitar={guitar}/>)
    })
      return <div className='guitar__list'>
        <ul>
          {items}
        </ul>
      </div>
  }
}
