import initialState from './initialState';
import { PURCHASE_DATE_CHANGE, SELL_DATE_CHANGE } from '../actions/actionTypes';

export default function dateChange(state = initialState.dates, action) {
	let newState;
	switch (action.type) {
		case PURCHASE_DATE_CHANGE:
			newState = {
				...state,
				purchaseDate: action.date
			};
			return newState;
		case SELL_DATE_CHANGE:
			newState = {
				...state,
				sellDate: action.date
			};
			return newState;
		default:
			return state;
	}
}
