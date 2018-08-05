import moment from 'moment';
import * as types from './actionTypes';

// Constants
import { API_CURRENT, API_HISTORICAL, CRYPTO_CURRENCIES, EXCHANGE_CURRENCIES } from '../globalConstants';

function getCurrencySymbols(currencyObjs) { 
	return currencyObjs.map(currencyObj => { 
		return currencyObj.symbol;
	});
}

function currentPriceUrl() {
	const cryptos = getCurrencySymbols(CRYPTO_CURRENCIES).join(',');
	const exchanges = getCurrencySymbols(EXCHANGE_CURRENCIES).join(',');
	const currentTS = moment().unix();
	return `${API_CURRENT}?fsyms=${cryptos}&tsyms=${exchanges}&ts=${currentTS}`;
}

function historicalPriceUrl(dateTS, crypto) {
	const exchanges = getCurrencySymbols(EXCHANGE_CURRENCIES).join(',');	
	return `${API_HISTORICAL}?fsym=${crypto}&tsyms=${exchanges}&ts=${dateTS}`;
}

// Current Price
export function receiveCurrent(dispatch, json) {
	dispatch({ type: types.ASYNC_DONE });
	dispatch({
		type: types.RECEIVE_CURRENT,
		currentPrice: json
	});
}

export function fetchCurrent() {
	return dispatch => {
		dispatch({ type: types.ASYNC_LOADING });
		return fetch(currentPriceUrl(), {
				method: 'GET'
			})
			.then(response => response.json())
			.then(json => receiveCurrent(dispatch, json));
	};
}

// Purchase Price
export function receivePurchasePrice(dispatch, json) {
	dispatch({ type: types.ASYNC_DONE });
	dispatch({
		type: types.RECEIVE_PURCHASE_PRICE,
		purchasePrice: json
	});
}

export function fetchPurchasePrice(date, crypto) {
	return dispatch => {
		dispatch({ type: types.ASYNC_LOADING });
		return fetch(historicalPriceUrl(date, crypto), {
				method: 'GET'
			})
			.then(response => response.json())
			.then(json => receivePurchasePrice(dispatch, json));
	};
}

// Sell Price
export function receiveSellPrice(dispatch, json) {
	dispatch({ type: types.ASYNC_DONE });
	dispatch({
		type: types.RECEIVE_SELL_PRICE,
		sellPrice: json
	});
}

export function fetchSellPrice(date, crypto) {
	return dispatch => {
		dispatch({ type: types.ASYNC_LOADING });
		return fetch(historicalPriceUrl(date, crypto), {
				method: 'GET'
			})
			.then(response => response.json())
			.then(json => receiveSellPrice(dispatch, json));
	};
}
