import initialState from './initialState';
import { AMOUNT_CHANGE } from '../actions/actionTypes';

export default function amount(state = initialState.amount, action) {
	switch (action.type) {
		case AMOUNT_CHANGE:
			const amount = parseFloat(action.amount);
			return amount;
		default:
			return state;
	}
}
