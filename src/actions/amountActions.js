import * as types from './actionTypes';

export function changeAmount(amount) {
	return {
		type: types.AMOUNT_CHANGE,
		amount
	};
}
