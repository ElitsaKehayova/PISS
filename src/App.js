import React, { Component } from 'react';
import { SearchBar } from './components/search-bar/search-bar'
import logo from './logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1  className = {styles.appName}>Outdoors-Sports</h1>
        <SearchBar className={styles.searchBar}/>
      </div>
    );
  }
}

export default App;
