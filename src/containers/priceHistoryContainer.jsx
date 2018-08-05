import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../actions/apiActions';
import PropTypes from 'prop-types';
import React from 'react';

import { CRYPTO_CURRENCIES, EXCHANGE_CURRENCIES } from '../globalConstants';
import HistoricalPrice from '../components/historicalPrice';

class PriceHistoryContainer extends React.Component {

	componentWillMount() {
		this.props.apiActions.fetchCurrent();
	}

	render() {
		let currentPriceMarkup;
		let purchasePriceMarkup;
		let sellPriceMarkup;

		const crypto = this.props.currencies.crypto;
		const exchange = this.props.currencies.exchange;
		const cryptoCurrencyObj = CRYPTO_CURRENCIES.find(item => {
			return item.symbol === crypto;
		});
		const exchangeCurrencyObj = EXCHANGE_CURRENCIES.find(item => {
			return item.symbol === exchange;
		});

		// Current Price
		if (this.props.currentPrice && this.props.currentPrice[crypto]) {
			const currentPrice = this.props.currentPrice[crypto][exchange];
			currentPriceMarkup =
				(
					<HistoricalPrice
						verbiage='Current Price'
						price={currentPrice}
						currencyObj={exchangeCurrencyObj}
						show={true}
					/>
				);
		}

		// Purchase Price
		if (this.props.purchasePrice && this.props.purchasePrice[crypto]) {
			const purchasePrice = this.props.purchasePrice[crypto][exchange];
			purchasePriceMarkup =
				(
					<HistoricalPrice
						verbiage='Purchase Price'
						price={purchasePrice}
						currencyObj={exchangeCurrencyObj}
						show={true}
					/>
				);
		}

		// Sell Price
		if (this.props.sellPrice && this.props.sellPrice[crypto]) {
			const sellPrice = this.props.sellPrice[crypto][exchange];
			sellPriceMarkup =
				(
					<HistoricalPrice
						verbiage='Sell Price'
						price={sellPrice}
						currencyObj={exchangeCurrencyObj}
						show={true}
					/>
				);
		}

		// Return Price History
		return (
			<div key="priceHistory" className="price-block panel panel-default block">
				<h2>Price History ({cryptoCurrencyObj.symbol}) *</h2>
				{currentPriceMarkup}
				{purchasePriceMarkup}
				{sellPriceMarkup}
			</div>
		);
	}
}

PriceHistoryContainer.propTypes = {
	apiActions: PropTypes.object,
	currentPrice: PropTypes.object,
	purchasePrice: PropTypes.object,
	sellPrice: PropTypes.object,
	currencies: PropTypes.object
};

function mapStateToProps(state) {
	return {
		currentPrice: state.currentPrice,
		purchasePrice: state.purchasePrice,
		sellPrice: state.sellPrice,
		currencies: state.currencies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		apiActions: bindActionCreators(apiActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PriceHistoryContainer);
