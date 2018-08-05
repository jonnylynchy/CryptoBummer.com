import moment from 'moment';

// Cryptocompare.com
export const API_CURRENT = 'https://min-api.cryptocompare.com/data/pricemulti'
export const API_HISTORICAL = 'https://min-api.cryptocompare.com/data/pricehistorical'

export const DEFAULT_DATE = moment().subtract(1, 'days');

export const HELP_MESSAGES = {
	PurchaseDate: {
		invalidDate: 'Enter a valid purchase date.',
		selectDateInPast: 'Select a purchase date in the past.',
		afterOriginal: 'select a purchase date on or after'
	},
	SellDate: {
		invalidDate: 'Enter a valid sell date.',
		selectDateInPast: 'Select a sell date in the past.',
		selectSellAfterPurchase: 'Make sure your purchase date comes before your sell date.'
	},
	PurchaseAmount: {
		invalidNumber: 'Enter a numerical value.'
	}
}

export const CRYPTO_CURRENCIES = [
	{
		symbol: 'BTC',
		label: 'Bitcoin (BTC)',
		originalDate: new Date(2010, 6, 18)
	},
	{
		symbol: 'ADA',
		label: 'Cardano (ADA)',
		originalDate: new Date(2017, 9, 1)
	},
	{
		symbol: 'LTC',
		label: 'Litecoin (LTC)',
		originalDate: new Date(2013, 9, 29)
	},
	{
		symbol: 'ETH',
		label: 'Etherium (ETH)',
		originalDate: new Date(2015, 8, 7)
	},
	{
		symbol: 'LSK',
		label: 'Lisk (LSK)',
		originalDate: new Date(2016, 4, 6)
	},
	{
		symbol: 'TRX',
		label: 'Tron (TRX)',
		originalDate: new Date(2017, 9, 13)
	},
	{
		symbol: 'XRP',
		label: 'Ripple (XRP)',
		originalDate: new Date(2013, 8, 4)
	},
];

export const EXCHANGE_CURRENCIES = [
	{
		symbol: 'USD',
		label: 'US Dollar (USD)',
		character: '$'
	},
	{
		symbol: 'EUR',
		label: 'Euro Dollar (EUR)',
		character: '€'
	},
	{
		symbol: 'GBP',
		label: 'British Pound (GBP)',
		character: '£'
	},
];
