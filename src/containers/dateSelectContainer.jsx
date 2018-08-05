import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dateActions from '../actions/dateActions';
import * as apiActions from '../actions/apiActions';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { CRYPTO_CURRENCIES, DEFAULT_DATE } from '../globalConstants';
import DateSelect from '../components/dateSelect';
import { isValidPurchaseDate, isValidSellDate } from '../utils/validators';

class DateSelectContainer extends React.Component {

	constructor(){
		super();
		this.state = { 
			validationMessages: {
				purchaseDate: '',
				sellDate: ''
			}
		};
	}

	purchaseDateChange = (date) => {
		const purchaseDate = this.props.isMobile ? date.target.value : date;
		const currency = this.props.currencies.crypto;
		// VALIDATE DATE HERE
		const valid = isValidPurchaseDate(purchaseDate, this.props.dates.sellDate, currency);
		if (valid.isValid) {
			// IF DATE IS VALID
			this.setState({
				validationMessages: {
					...this.state.validationMessages,
					purchaseDate: ''
				}
			});
			const purchaseDateTS = moment(purchaseDate).unix();
			this.props.dateActions.changePurchaseDate(purchaseDate);
			this.props.apiActions.fetchPurchasePrice(purchaseDateTS, this.props.currencies.crypto);
		} else {
			this.setState({
				validationMessages: {
					...this.state.validationMessages,
					purchaseDate: valid.message
				}
			});
		}
	}

	sellDateChange = (date) => {
		const sellDate = this.props.isMobile ? date.target.value : date;
		// VALIDATE DATE HERE
		const valid = isValidSellDate(sellDate, this.props.dates.purchaseDate);
		if (valid.isValid) {
			// IF DATE IS VALID
			this.setState({
				validationMessages: {
					...this.state.validationMessages,
					sellDate: ''
				}
			});
			const sellDateTS = moment(sellDate).unix();
			this.props.dateActions.changeSellDate(sellDate);
			this.props.apiActions.fetchSellPrice(sellDateTS, this.props.currencies.crypto);
		} else {
			this.setState({
				validationMessages: {
					...this.state.validationMessages,
					sellDate: valid.message
				}
			});
		}
	}

	render() {
		if (this.props.dates && this.props.currencies) {
			const crypto = this.props.currencies.crypto;
			const cryptoCurrencyObj = CRYPTO_CURRENCIES.find(item => {
				return item.symbol === crypto;
			});
			const purchaseDateLabel = `When did you buy ${cryptoCurrencyObj.label}?`;
			const sellDateLabel = `When did you sell ${cryptoCurrencyObj.label}?`;
			const showSellDate = this.props.dates.purchaseDate !== DEFAULT_DATE;
			return [
				// purchase date select
				<DateSelect
					key="purchaseDateSelect"
					label={purchaseDateLabel}
					date={this.props.dates.purchaseDate}
					handleDateChange={this.purchaseDateChange}
					validMessage={this.state.validationMessages.purchaseDate}
					show={true}
					isMobile={this.props.isMobile}
				/>,
				// sell date select
				<DateSelect
					key="sellDateSelect"
					label={sellDateLabel}
					date={this.props.dates.sellDate}
					handleDateChange={this.sellDateChange}
					validMessage={this.state.validationMessages.sellDate}
					show={showSellDate}
					isMobile={this.props.isMobile}
				/>
			];
		} else { 
			return null;
		}
	}
}

DateSelectContainer.propTypes = {
	dates: PropTypes.object,
	dateActions: PropTypes.object,
	apiActions: PropTypes.object,
	currencies: PropTypes.object,
	isMobile: PropTypes.bool
};

function mapStateToProps(state) {
	return {
		dates: state.dates,
		currencies: state.currencies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dateActions: bindActionCreators(dateActions, dispatch),
		apiActions: bindActionCreators(apiActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DateSelectContainer);
