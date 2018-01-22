import React from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            startDate: moment(),
            endDate: moment().add(7, 'days'),
            focusedInput: 'startDate'
        }
    }

    render() {
        return (
            <DateRangePicker
            startDate={this.state.startDate}
            startDateId="startDate"
            endDate={this.state.endDate}
            endDateId="endDate"
            numberOfMonths={1}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
        )
    }
}