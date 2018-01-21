import React, { Component } from 'react';
import { SearchBar } from './components/search-bar/SearchBar';
import './App.scss';
import Card from './components/card/Card';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1  className='App-name'>Outdoors Sports</h1>
        <SearchBar className='search-bar'/>
        <Card data = {this.state}/>
      </div>
    );
  }
}

export default App;
