import React, { Component } from 'react';
import { SearchBar } from './components/search-bar/SearchBar';
import './App.scss';
import Card from './components/card/Card';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {Calendar} from './components/calendar/calendar';
import {Map} from './components/map/map';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1  className='App-name'>Outdoors Sports</h1>
        <SearchBar className='search-bar'/>
        <Card/>
        <Calendar/>
        <Map/>
      </div>
    );
  }
}

export default App;
