import initialState from './initialState';
import { FETCH_SELL_PRICE, RECEIVE_SELL_PRICE } from '../actions/actionTypes';

export default function sellPrice(state = initialState.sellPrice, action) {
	let newState;
	switch (action.type) {
		case FETCH_SELL_PRICE:
			return action;
		case RECEIVE_SELL_PRICE:
			newState = action.sellPrice;
			return newState;
		default:
			return state;
	}
}
