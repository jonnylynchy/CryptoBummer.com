import * as types from './actionTypes';

export function changePurchaseDate(date) {
	return {
		type: types.PURCHASE_DATE_CHANGE,
		date
	};
}

export function changeSellDate(date) {
	return {
		type: types.SELL_DATE_CHANGE,
		date
	};
}
