import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap'
import Calendar from './../calendar/calendar';
import SearchBar from './../search-bar/SearchBar'
import './search-field.scss'

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropdownItem: 'Ски'
    }
  }

  handleChangeDropdownItem = (item) => {
    this.setState({activeDropdownItem: item})
    
  }

  render() {
    return (
      <div className='search-field-container'>
        <div className='search-field-input'>
          <SearchBar placeholder='Please enter mountain or region' searchHandler={this.props.searchHandler}/>
        </div>
        <div className='search-field-dropdown'>
          <DropdownButton
            bsStyle='default'
            title={this.state.activeDropdownItem}
            key={'exampleId'}
            id={`dropdown-basic-exampleId`}
          >
            <MenuItem
              eventKey="Ски"
              active={this.state.activeDropdownItem == 'Ски' ? true : false}
              onSelect={this.handleChangeDropdownItem}>Ски</MenuItem>
            <MenuItem 
              eventKey="Катерене" 
              active={this.state.activeDropdownItem == 'Катерене' ? true : false}
              onSelect={this.handleChangeDropdownItem}>Катерене</MenuItem>
          </DropdownButton>
        </div>
        <div className='search-field-calendar'>
          <Calendar/>
        </div>
      </div>
    );
  }
}
