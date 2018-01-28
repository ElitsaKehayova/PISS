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
      let words = [{name:'abasement',mountain:'rila',sport:'ski'},
        {name:'abhor',mountain:'rila',sport:'ski'},
        {name:'abrasive',mountain:'rila',sport:'katerene'},
        {name:'abrogate',mountain:'rila',sport:'katerene'},
        {name:'absolution',mountain:'vitosha',sport:'katerene'},
        {name:'abstain',mountain:'pirin',sport:'katerene'},
        {name:'abstemious',mountain:'vitosha',sport:'ski'},
        {name:'abstruse',mountain:'rila',sport:'ski'}]
      this.setState({
        suggestions: words.filter((word) => {return word.name.toLowerCase().startsWith(input.target.value.toLowerCase()) || word.mountain.toLowerCase().startsWith(input.target.value.toLowerCase()) || word.sport.toLowerCase().startsWith(input.target.value.toLowerCase())})
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
         
          <span><div  onClick={this.handleOnClick.bind(this,`${suggestion.name},${suggestion.mountain},${suggestion.sport}`)}>{suggestion.name},{suggestion.mountain},{suggestion.sport}</div></span>
        </span>
      );
    },this);
  };

  onBlur = () => {
    this.setState({suggestions: []});
  }
   handleOnClick=(newVal)=>{
     
      this.setState({
          searchTerm: newVal,
          suggestions: []
      });
  }
  clearSearch = () => {
    this.setState({
        searchTerm: '',
        suggestions: []
    });
  }
  changeSearchValue = () => {
    this.setState({
      searchTerm: suggestions.value.name
    })
  }
  
  render() {
    return (
      <div className='container search-bar-container'>
        <div className='form-group search-bar-field'>
          <span className="input-group">
            <input type="text" value={this.state.searchTerm} placeholder="Enter mountain, area or specific place" className='formControl search-bar-input' onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            {this.state.searchTerm.length > 0 ? (<span className="input-group-btn">
              <button type="button" className='search-bar-button-clear' onClick={this.clearSearch}>X</button>
            </span>) : null}
            <span className="input-group-btn">
              <button type="button" className='search-bar-button-search' onClick={this.handleSearch}>AF</button>
            </span>
          </span>
        </div>
        {this.state.suggestions.length != 0 ? (<div className='search-bar-suggestions-container' >
          {this.suggestionsRenderer()}
        </div>) : null}
      </div>
    );
  }
}
