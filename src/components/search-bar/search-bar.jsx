import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './search-bar.scss';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      suggestions: []
    };
  }

  handleChange = (input) => {

    //HandleChange method does not apply changes to the input so we need to do it mannualy
    this.setState({ searchTerm: input.target.value });

    if (input.target.value == 0 && this.state.suggestions.length > 0) {
      this.setState({suggestions: []});
    } else {
      let words = ['abasement',
        'abhor',
        'abrasive',
        'abrogate',
        'absolution',
        'abstain',
        'abstemious',
        'abstruse']
      this.setState({
        suggestions: words.filter(word => word.startsWith(input.target.value))
      });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('The user just cick Enter');
    }
  }

  suggestionsRenderer = () => {
    return this.state.suggestions.map(suggestion => {
      return (
        <span key={suggestion} className={styles.searchBarSuggestionsItem}>
          <strong>{this.state.searchTerm}</strong>
          <span>{suggestion.substr(this.state.searchTerm.length)}</span>
        </span>
      );
    });
  };

  onBlur = () => {
    this.setState({suggestions: []});
  }
  
  clearSearch = () => {
    this.setState({
        searchTerm: '',
        suggestions: []
    });
  }

  render() {
    return (
      <div className={'container ' + styles.searchBarContainer}>
        <div className={"form-group " + styles.searchBarField}>
          <span className="input-group">
            <input type="text" value={this.state.searchTerm} placeholder="Enter mountain, area or specific place" className={styles.formControl + ' ' + styles.searchBarInput} onChange={this.handleChange} onBlur={this.onBlur} onKeyPress={this.handleKeyPress}/>
            {this.state.searchTerm.length > 0 ? (<span className="input-group-btn">
              <button type="button" className={styles.searchBarButtonClear} onClick={this.clearSearch}>X</button>
            </span>) : null}
            <span className="input-group-btn">
              <button type="button" className={styles.searchBarButtonSearch} onClick={this.handleSearch}>AF</button>
            </span>
          </span>
        </div>
        {this.state.suggestions.length != 0 ? (<div className={styles.searchBarSuggestionsContainer}>
          {this.suggestionsRenderer()}
        </div>) : null}
      </div>
    );
  }
}
