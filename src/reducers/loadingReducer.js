import initialState from './initialState';
import { ASYNC_LOADING, ASYNC_DONE } from '../actions/actionTypes';

export default function loader(state = initialState.isFetching, action) {
	switch (action.type) {
		case ASYNC_LOADING:
			return true;
		case ASYNC_DONE:
			return false;
		default:
			return state;
	}
}
