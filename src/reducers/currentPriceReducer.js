import initialState from './initialState';
import { FETCH_CURRENT, RECEIVE_CURRENT } from '../actions/actionTypes';

export default function current(state = initialState.currentPrice, action) {
	let newState;
	switch (action.type) {
		case FETCH_CURRENT:
			return action;
		case RECEIVE_CURRENT:
			newState = action.currentPrice;
			return newState;
		default:
			return state;
	}
}
