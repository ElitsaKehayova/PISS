import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import './search-bar.scss';

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
        <span key={suggestion} className='search-bar-suggestions--item'>
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
      <div className='container search-bar--container'>
        <div className="form-group search-bar-field">
          <span className="input-group">
            <input type="text" value={this.state.searchTerm} placeholder="Enter mountain, area or specific place" className="form-control search-bar-input" onChange={this.handleChange} onBlur={this.onBlur} onKeyPress={this.handleKeyPress}/>
            {this.state.searchTerm.length > 0 ? (<span className="input-group-btn">
              <button type="button" className="search-bar-button-clear" onClick={this.clearSearch}>X</button>
            </span>) : null}
            <span className="input-group-btn">
              <button type="button" className="search-bar-button-search" onClick={this.handleSearch}>AF</button>
            </span>
          </span>
        </div>
        {this.state.suggestions.length != 0 ? (<div className='search-bar-suggestions--container'>
          {this.suggestionsRenderer()}
        </div>) : null}
      </div>
    );
  }
}
