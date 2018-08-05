import moment from 'moment';

export const formattedAmount = (amount, currency) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
		minimumFractionDigits: 2
	});
	return formatter.format(amount);
}

export const formattedDate = (date) => { 
	return moment(date).format('YYYY-MM-DD');
}

export const getBitPerUnit = (price) => { 
	return 1 / price;
}

export const getEndDate = (date) => {
	return moment().diff(date) > 0
		? moment(date).add(1, 'days')
		: date;
}
