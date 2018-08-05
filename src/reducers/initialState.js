import { DEFAULT_DATE } from '../globalConstants';

export default {
	isFetching: false,
	currentPrice: {},
	purchasePrice: {},
	sellPrice: {},
	currencies: {
		crypto: 'BTC',
		exchange: 'USD'
	},
	dates: {
		purchaseDate: DEFAULT_DATE,
		sellDate: DEFAULT_DATE
	},
	amount: 0
}
