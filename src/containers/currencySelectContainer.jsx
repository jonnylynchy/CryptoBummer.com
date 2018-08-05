import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currenciesActions from '../actions/currenciesActions';
import * as apiActions from '../actions/apiActions';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { CRYPTO_CURRENCIES, EXCHANGE_CURRENCIES, DEFAULT_DATE } from '../globalConstants';
import CurrencySelect from '../components/currencySelect';

class CurrencySelectContainer extends React.Component {

	setSelectedCurrency = (e) => { 
		const currencyValue = e.target.value;
		const currencyName = e.target.name;
		if (currencyName === 'cryptoSelect') {
			this.props.currenciesActions.changeCryptoCurrency(currencyValue);
			// If purchase and sell dates have been defined
			// Update data per selected currency for date
			if (this.props.dates.purchaseDate !== DEFAULT_DATE) { 
				const purchaseDateTS = moment(this.props.dates.purchaseDate).unix();
				this.props.apiActions.fetchPurchasePrice(purchaseDateTS, currencyValue);
			}

			if (this.props.dates.sellDate !== DEFAULT_DATE) { 
				const sellDateTS = moment(this.props.dates.sellDate).unix();
				this.props.apiActions.fetchSellPrice(sellDateTS, currencyValue);
			}
		} else { 
			this.props.currenciesActions.changeExchangeCurrency(currencyValue);
		}
	}

	getCurrencyOptions = (currencies) => {
		return currencies.map(item => {
			return <option key={item.symbol} value={item.symbol}>{item.label}</option>;
		});
	};

	render() {
		return [
			<CurrencySelect
				key="cryptoSelect"	
				label="Which Crypto did you buy?"	
				name="cryptoSelect"
				value={this.props.currencies.crypto}
				handleChange={this.setSelectedCurrency}
				options={this.getCurrencyOptions(CRYPTO_CURRENCIES)}
			/>,
			<CurrencySelect
				label="What currency did you buy it in?"	
				name="exchangeSelect"
				key="exchangeSelect"
				value={this.props.currencies.exchange}
				handleChange={this.setSelectedCurrency}
				options={this.getCurrencyOptions(EXCHANGE_CURRENCIES)}
			/>
		];
	}
}

CurrencySelectContainer.propTypes = {
	currencies: PropTypes.object,
	currenciesActions: PropTypes.object,
	apiActions: PropTypes.object,
	dates: PropTypes.object
};

function mapStateToProps(state) {
	return {
		currencies: state.currencies,
		dates: state.dates
	};
}

function mapDispatchToProps(dispatch) {
	return {
		currenciesActions: bindActionCreators(currenciesActions, dispatch),
		apiActions: bindActionCreators(apiActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrencySelectContainer);
