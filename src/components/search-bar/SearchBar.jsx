import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import './SearchBar.scss';

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
      let words = [{name:'abasement',mountain:'rila'},
        {name:'abhor',mountain:'rila'},
        {name:'abrasive',mountain:'rila'},
        {name:'abrogate',mountain:'rila'},
        {name:'absolution',mountain:'vitosha'},
        {name:'abstain',mountain:'pirin'},
        {name:'abstemious',mountain:'vitosha'},
        {name:'abstruse',mountain:'rila'}]
      this.setState({
        suggestions: words.filter((word) => {return word.name.toLowerCase().startsWith(input.target.value.toLowerCase()) || word.mountain.toLowerCase().startsWith(input.target.value.toLowerCase())})
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
        <span key={suggestion.name} className='search-bar-suggestions-item'>
         
          <span><div>{suggestion.name},{suggestion.mountain}</div></span>
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
      <div className='container search-bar-container'>
        <div className='form-group search-bar-field'>
          <span className="input-group">
            <input type="text" value={this.state.searchTerm} placeholder="Enter mountain, area or specific place" className='formControl search-bar-input' onChange={this.handleChange} onBlur={this.onBlur} onKeyPress={this.handleKeyPress}/>
            {this.state.searchTerm.length > 0 ? (<span className="input-group-btn">
              <button type="button" className='search-bar-button-clear' onClick={this.clearSearch}>X</button>
            </span>) : null}
            <span className="input-group-btn">
              <button type="button" className='search-bar-button-search' onClick={this.handleSearch}>AF</button>
            </span>
          </span>
        </div>
        {this.state.suggestions.length != 0 ? (<div className='search-bar-suggestions-container'>
          {this.suggestionsRenderer()}
        </div>) : null}
      </div>
    );
  }
}
