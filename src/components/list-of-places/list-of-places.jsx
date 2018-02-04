import React from 'react';
import Card from './../card/Card';
import './list-of-places.scss'

export default class ListOfPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='list-of-places-container'>
        {this.props.places.map(place => <Card data={place} key={place.id}/>)}
      </div>
    )
  }
}
