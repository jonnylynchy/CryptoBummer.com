import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash.get';

import CalculatedAmount from '../components/calculatedAmount';
import Bummer from '../components/bummer';

import { EXCHANGE_CURRENCIES } from '../globalConstants';
import { getBitPerUnit } from '../utils/format';

class ResultsContainer extends React.Component {

	render() {
		const exchange = this.props.currencies.exchange;
		const crypto = this.props.currencies.crypto;
		const currencyObj = EXCHANGE_CURRENCIES.find(item => {
			return item.symbol === exchange;
		});
		
		const sellPrice = get(this.props, ['sellPrice', crypto, exchange], 0);
		const purchasePrice = get(this.props, ['purchasePrice', crypto, exchange], 0);
		const currentPrice = get(this.props, ['currentPrice', crypto, exchange], 0);
		
		// Amount purchased in unit
		const purchaseAmountInBits = this.props.amount * getBitPerUnit(purchasePrice);
		const showResults = purchasePrice > 0 && sellPrice > 0 && purchaseAmountInBits > 0;
		const helperText = showResults
			? null
			: 'Complete the details to find out if you have a bummer.';
		return [
			<div key="helperText">{helperText}</div>,
			<CalculatedAmount
				key="pastSellPrice"	
				message='You sold for approximately'	
				price={sellPrice}
				purchaseAmount={purchaseAmountInBits}
				currencyObj={currencyObj}
				purchasePrice={purchasePrice}
				show={showResults}
			/>,
			<CalculatedAmount
				key="currentSellPrice"	
				message='You could sell today for approximately'	
				price={currentPrice}
				purchaseAmount={purchaseAmountInBits}
				currencyObj={currencyObj}
				purchasePrice={purchasePrice}
				show={showResults}
			/>,
			<Bummer
				key="bummer"	
				show={showResults}
				currentPrice={currentPrice}
				sellPrice={sellPrice}
				purchasePrice={purchasePrice}
				purchaseAmount={purchaseAmountInBits}
			/>
		];
	}
}

ResultsContainer.propTypes = {
	currentPrice: PropTypes.object,
	purchasePrice: PropTypes.object,
	sellPrice: PropTypes.object,
	currencies: PropTypes.object,
	amount: PropTypes.number
};

function mapStateToProps(state) {
	return {
		currentPrice: state.currentPrice,
		purchasePrice: state.purchasePrice,
		sellPrice: state.sellPrice,
		currencies: state.currencies,
		amount: state.amount
	};
}

export default connect(
	mapStateToProps
)(ResultsContainer);
