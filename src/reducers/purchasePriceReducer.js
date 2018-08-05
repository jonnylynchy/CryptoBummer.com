import initialState from './initialState';
import { FETCH_PURCHASE_PRICE, RECEIVE_PURCHASE_PRICE } from '../actions/actionTypes';

export default function purchasePrice(state = initialState.purchasePrice, action) {
	let newState;
	switch (action.type) {
		case FETCH_PURCHASE_PRICE:
			return action;
		case RECEIVE_PURCHASE_PRICE:	
			newState = action.purchasePrice;
			return newState;
		default:
			return state;
	}
}
