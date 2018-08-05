import initialState from './initialState';
import { CRYPTO_CURRENCY_CHANGE, EXCHANGE_CURRENCY_CHANGE } from '../actions/actionTypes';

export default function currencyChange(state = initialState.currencies, action) {
	let newState;
	switch (action.type) {
		case CRYPTO_CURRENCY_CHANGE:
			newState = {
				...state,
				crypto: action.crypto
			};
			return newState;
		case EXCHANGE_CURRENCY_CHANGE:
			newState = {
				...state,
				exchange: action.exchange
			};
			return newState;
		default:
			return state;
	}
}
