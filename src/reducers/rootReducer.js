import { combineReducers } from 'redux';
import currentPrice from './currentPriceReducer';
import currencies from './currenciesReducer';
import dates from './datesReducer';
import purchasePrice from './purchasePriceReducer';
import sellPrice from './sellPriceReducer';
import isFetching from './loadingReducer';
import amount from './amountReducer';

const rootReducer = combineReducers({
	currencies,
	currentPrice,
	dates,
	purchasePrice,
	sellPrice,
	isFetching,
	amount
});

export default rootReducer;
