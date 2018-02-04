import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment().add(7, 'days'),
            focusedInput: ''
        }
    }

    changeFocusedInput = () => {
        if (!this.state.focusedInput.length) {
            this.setState({ focusedInput: 'startDate' })
        }
    }

    render() {
        return (
            <div onClick={this.changeFocusedInput}>
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
            </div>
        )
    }
}
