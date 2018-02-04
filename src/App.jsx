import React, { Component } from 'react';
import SearchField from './components/search-field/search-field';
import './App.scss';
import ListOfPlaces from './components/list-of-places/list-of-places';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      places: [{
        id: 1,
        notFound: false,
        picture: 'http://placehold.it/60x60',
        name: 'Example name',
        mountain: 'Example mountain',
        region: 'Example region',
        latitude: '200x300',
        longitude: '123x342',
        attitude: '12342',
        structure: 'slkdso',
        length: '123',
        numOfTrcks: '11'
      },
      {
        id: 2,
        notFound: false,
        picture: 'http://placehold.it/60x60',
        name: 'Example name',
        mountain: 'Example mountain',
        region: 'Example region',
        latitude: '200x300',
        longitude: '123x342',
        attitude: '12342',
        structure: 'slkdso',
        length: '123',
        numOfTrcks: '11'
      }]
    }
  }

  handleSearch = (input) => {
    console.log('You are searching for: ' + input);
  }

  render() {
    return (
      <div className='container App'>
        <h1  className='App-name'>Outdoors Sports</h1>
        <SearchField searchHandler={this.handleSearch}/>
        <ListOfPlaces places={this.state.places}/>      
      </div>
    );
  }
}

export default App;
