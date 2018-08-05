import React from 'react';

// Utils
import { formattedAmount } from '../utils/format';

const CalculatedAmount = props => {
	if (props.purchaseAmount > 0 && props.purchasePrice > 0) {
		const currencySymbol = props.currencyObj.symbol;
		const formatted = formattedAmount(props.price * props.purchaseAmount, currencySymbol)
		return (
			<div className="row results">
				<div className="col-xs-12 col-sm-7 col-md-7">
					<h4>{props.message}</h4>
				</div>
				<div className="col-xs-12 col-sm-5 col-md-5">
					<h3 className="currency">{formatted}</h3>
				</div>
			</div>
		);
	}
	return null;
}

export default CalculatedAmount;
