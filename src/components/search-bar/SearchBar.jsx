import React from 'react';
import './SearchBar.scss';
import axios from 'axios';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      suggestions: []
    };
  }

  handleChange = input => {
    let vm = this;
    //HandleChange method does not apply changes to the input so we need to do it mannualy
    this.setState({ searchTerm: input.target.value });

    if (input.target.value.length === 0 && this.state.suggestions.length > 0) {
      this.setState({ suggestions: [] });
    } else {
      let url = 'http://192.168.1.106:8080/OutDoorSportBE/webresources/controller/searchInfo?text=' + input.target.value + '&sport=' + (this.props.sport == 'Ски' ? 'ski' : 'climbing')
      axios.get(url).then(data => {
        this.setState({suggestions: data.data.map(item => item.suggestion)})
      })
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.setState({ suggestions: [] });
      this.handleSearch();
    }
  }

  selectItem = selected => {
    this.setState({ searchTerm: selected, suggestions: [] });
    setTimeout(() => {
      this.handleSearch();
    }, 0);
  }

  suggestionsRenderer = () => {
    return this.state.suggestions.map(suggestion => {
      return (
        <span key={suggestion + Math.random()}
          className='search-bar-suggestions-item'
          onClick={this.selectItem.bind(this, suggestion)}>
          <span>{suggestion}</span>
        </span>
      );
    });
  };

  onBlur = e => {
    let currentTarget = e.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({ suggestions: [] });
      }
    }, 0);
  }

  handleSearch = () => {
    this.props.searchHandler(this.state.searchTerm, this.props.sport);
  }

  clearSearch = () => {
    this.setState({
      searchTerm: '',
      suggestions: []
    });
  }

  render() {
    return (
      <div className='search-bar-container' tabIndex="1" onBlur={this.onBlur}>
        <div className="form-group search-bar-field">
          <span className="input-group">
            <span className="input-group-btn">
              <button type="button" className='search-bar-button-search' onClick={this.handleSearch}></button>
            </span>
            <input type="text" value={this.state.searchTerm} placeholder={this.props.placeholder} className='formControl search-bar-input' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
            {this.state.searchTerm.length > 0 ? (<span className="input-group-btn">
              <button type="button" className='search-bar-button-clear' onClick={this.clearSearch}></button>
            </span>) : null}
          </span>
        </div>
        {this.state.suggestions.length !== 0 ? (<div className='search-bar-suggestions-container'>
          {this.suggestionsRenderer()}
        </div>) : null}
      </div>
    );
  }
}
