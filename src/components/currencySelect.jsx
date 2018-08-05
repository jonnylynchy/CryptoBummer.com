import React from 'react';

const CurrencySelect = props => {
	const formGroupClass = props.isMobile ? 'form-group' : 'form-group-lg';
	
	return (
		<div className={`${formGroupClass} top-buffer`}>
			<label>{props.label}</label>
			<select
				name={props.name}
				className="form-control"
				value={props.value}
				onChange={props.handleChange}
			>
				{props.options}
			</select>
		</div>
	);
}

export default CurrencySelect;
