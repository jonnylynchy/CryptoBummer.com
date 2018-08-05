import moment from 'moment';
import { HELP_MESSAGES, DEFAULT_DATE, CRYPTO_CURRENCIES } from '../globalConstants';

// internal
function getCurrencyObj(currencyName) { 
	return CRYPTO_CURRENCIES.find(currency => currency.symbol === currencyName);
}

// exports
export const isValidNumber = (num) => { 
	let isValid = false;
	let message = '';
	if (isNaN(num) || num < 0) {
		message = HELP_MESSAGES.PurchaseAmount.invalidNumber;
	} else { 
		isValid = true;
	}

	return {
		message,
		isValid
	}
}

export const isValidSellDate = (sellDate, purchaseDate) => { 
	let isValid = false;
	let message = '';
	if (!moment(sellDate).isValid()) {
		message = HELP_MESSAGES.SellDate.invalidDate;
	} else if ((moment().diff(sellDate, 'days') < 1)) {
		message = HELP_MESSAGES.SellDate.selectDateInPast;
	} else if (moment(purchaseDate).diff(sellDate, 'days') >= 0) {
		message = HELP_MESSAGES.SellDate.selectSellAfterPurchase;
	} else { 
		isValid = true;
	}

	return {
		message,
		isValid
	}
}

export const isValidPurchaseDate = (purchaseDate, sellDate, currency) => { 
	let isValid = false;
	let message = '';
	let originalDate = getCurrencyObj(currency).originalDate;
	if (!moment(purchaseDate).isValid()) {
		message = HELP_MESSAGES.PurchaseDate.invalidDate
	} else if (moment().diff(purchaseDate, 'days') < 1) {
		message = HELP_MESSAGES.PurchaseDate.selectDateInPast
	} else if (moment(purchaseDate).diff(originalDate) < 0) {
		const originalDateString = moment(originalDate).format('dddd, MMMM Do YYYY');
		message = `For ${currency}, ${HELP_MESSAGES.PurchaseDate.afterOriginal} ${originalDateString}`
	} else if (moment(purchaseDate).diff(sellDate, 'days') >= 0 && sellDate !== DEFAULT_DATE) {
		message = HELP_MESSAGES.SellDate.selectSellAfterPurchase;
	} else {
		isValid = true;
	}

	return {
		message,
		isValid
	}
}
