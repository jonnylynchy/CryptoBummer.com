import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as amountActions from '../actions/amountActions';
import PropTypes from 'prop-types';
import React from 'react';

import { isValidNumber } from '../utils/validators';
import { EXCHANGE_CURRENCIES } from '../globalConstants';

class PurchaseAmountContainer extends React.Component {

	constructor(){
		super();
		this.state = { 
			validationMessages: {
				amount: ''
			}
		 };
	}

	handleAmountChange = (e) => { 
		let purchaseVolume = e.target.value;
		
		// VALIDATE AMOUNT
		const valid = isValidNumber(purchaseVolume);
		if (valid.isValid) {
			// IF DATE IS VALID
			this.setState({
				validationMessages: {
					...this.state.validationMessages,
					amount: ''
				}
			});
			// Update Amount
			this.props.amountActions.changeAmount(purchaseVolume);
		} else {
			this.setState({
				validationMessages: {
					...this.state.validationMessages,
					amount: valid.message
				}
			});
		}
	}

	render() {
		const validMessage = this.state.validationMessages.amount ? <span className="help-block">* {this.state.validationMessages.amount}</span> : null;
		const validCssClass = validMessage ? 'has-error' : '';
		const exchange = this.props.currencies.exchange;
		const currencyObj = EXCHANGE_CURRENCIES.find(item => {
			return item.symbol === exchange;
		});
		if (this.props.show) { 
			const currencyCharacter = currencyObj.character;
			const currencySymbol = currencyObj.symbol;
			return (	
				<div className={`${this.props.cssClass} ${validCssClass} form-group-lg top-buffer`}>
					<label>How much did you purchase (in {currencySymbol})?</label>	
					{validMessage}
					<div className="input-group">
						<span className="input-group-addon">{currencyCharacter}</span>
						<input type="number" maxLength="5" className="form-control input-normal" name="purchaseAmount" defaultValue="0" onChange={this.handleAmountChange} />
					</div>
				</div>
			);
		}
		return null;
	}
}

PurchaseAmountContainer.propTypes = {
	currencies: PropTypes.object,
	amountActions: PropTypes.object
};

function mapStateToProps(state) {
	return {
		currencies: state.currencies,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		amountActions: bindActionCreators(amountActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PurchaseAmountContainer);
