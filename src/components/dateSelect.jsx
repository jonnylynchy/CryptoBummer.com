import React from 'react';
import DatePicker from 'react-datepicker';
import { formattedDate } from '../utils/format';

import 'react-datepicker/dist/react-datepicker.css';
import '../css/datePicker.css';

const DateSelect = props => {
	const validMessage = props.validMessage ? <span className="help-block">* {props.validMessage}</span> : null;
	const validCssClass = validMessage ? 'has-error' : '';
	const formGroupClass = props.isMobile ? 'form-group' : 'form-group-lg';
	if (props.show) { 
		return (
			<div className={`${formGroupClass} top-buffer ${validCssClass}`}>
				<label>{props.label}</label>
				{validMessage}
				{props.isMobile ?
					<input
						type="date"
						defaultValue={formattedDate(props.date)}
						className="form-control"
						onChange={props.handleDateChange}
					/> :
					<DatePicker
						selected={props.date}
						onChange={props.handleDateChange}
						dateFormat="YYYY-MM-DD"
						className="form-control"
					/>
				}
			</div>
		);
	}
	return null;
}

export default DateSelect;
