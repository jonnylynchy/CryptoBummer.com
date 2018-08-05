import * as types from './actionTypes';

export function changeCryptoCurrency(crypto) {
	return {
		type: types.CRYPTO_CURRENCY_CHANGE,
		crypto
	};
}

export function changeExchangeCurrency(exchange) {
	return {
		type: types.EXCHANGE_CURRENCY_CHANGE,
		exchange
	};
}
