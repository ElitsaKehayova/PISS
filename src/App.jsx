import React, { Component } from 'react';
import SearchField from './components/search-field/search-field';
import ListOfPlaces from './components/list-of-places/list-of-places';
import axios from 'axios'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './App.scss';
import logo from './assets/images/outdoorsSports.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      places: []
    }
  }

  handleSearch = (input,  sport) => {
    let url = 'http://192.168.1.106:8080/OutDoorSportBE/webresources/controller/searchText?text=' + input + '&sport=' + (sport =='Ски' ? 'ski' : 'climbing');
    axios(url).then(data => {
      this.setState({places: data.data})
    })
  }

  render() {
    return (
      <div className='container App'>
        <img className='App-name' src={logo}/>
        <SearchField searchHandler={this.handleSearch}/>
        <ListOfPlaces places={this.state.places}/>      
      </div>
    );
  }
}

export default App;
