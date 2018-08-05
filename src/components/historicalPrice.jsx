import React from 'react';
import { formattedAmount } from '../utils/format';

const HistoricalPrice = props => {
	if (props.show && props.price > 0) {
		const currencySymbol = props.currencyObj.symbol;
		const formatted = formattedAmount(props.price, currencySymbol);
		return (
			<div className="row prices">
				<div className="col-xs-8">
					<h5>{props.verbiage} ({currencySymbol})</h5>
				</div>
				<div className="col-xs-4">
					<h5 className="currency">{formatted}</h5>
				</div>
			</div>
		);
	}
	return null;
}

export default HistoricalPrice;
