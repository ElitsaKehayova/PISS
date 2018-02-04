import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import './SearchBar.scss';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      suggestions: [],
      dataSet:[]
    };
  }
  componentDidMount(){
    fetch('http://173.212.226.173:8080/OutDoorSportBE/webresources/controller/searchInfo')
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({
        dataSet:data
      })
    })
  }
  handleChange = (input) => {

    //HandleChange method does not apply changes to the input so we need to do it mannualy
    this.setState({ searchTerm: input.target.value });

    if (input.target.value == 0 && this.state.suggestions.length > 0) {
      this.setState({suggestions: []});
    } else {
      let words = this.state.dataSet;
      this.setState({
        suggestions: words.filter((word) => {return word.name.toLowerCase().startsWith(input.target.value.toLowerCase()) || word.regionId.mountainId.name.toLowerCase().startsWith(input.target.value.toLowerCase()) || word.sport.toLowerCase().startsWith(input.target.value.toLowerCase())})
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
         
          <span><div  onClick={this.handleOnClick.bind(this,`${suggestion.name},${suggestion.regionId.mountainId.name},${suggestion.sport}`)}>{suggestion.name},{suggestion.regionId.mountainId.name},{suggestion.sport}</div></span>
        </span>
      );
    },this);
  };

  handleSearch = () => {

    let queryString = new URLSearchParams();
    let params = {
      id: this.state.searchId || 1,
      type: this.state.searchType || 'mountain',
      sport: this.state.searchSport || 'ski'
    };
    for (let key in params) {
      queryString.append(key, params[key]);
    }

    fetch('http://173.212.226.173:8080/OutDoorSportBE/webresources/controller/search?' + queryString.toString())
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({results: data})
    })
  }

  handleOnClick = newVal => {
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
