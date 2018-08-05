import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PriceHistoryContainer from './containers/priceHistoryContainer';
import CurrencySelectContainer from './containers/currencySelectContainer';
import DateSelectContainer from './containers/dateSelectContainer';
import PurchaseAmountContainer from './containers/purchaseAmountContainer';
import ResultsContainer from './containers/resultsContainer';

import Loader from './components/loader';
import Footer from './components/footer';


import { DEFAULT_DATE } from './globalConstants';

class App extends Component {

	render() {
		// If both dates haven't been selected, don't show purchase amount field
		const showPurchaseAmount =
			this.props.dates.purchaseDate !== DEFAULT_DATE &&
			this.props.dates.sellDate !== DEFAULT_DATE;
		
		let loader = null;
		if (this.props.isFetching) { 
			loader = <Loader key="loader" />;
		}

		return [
			loader,
			<div className="container" key="container">
				<div className="row">
					<div className="col-md-12 header">
						<h1>Crypto Bummer</h1>
						<h5>
							Did you get rid of that crypto currency a little too early?
						</h5>
					</div>
					<div className="col-md-6">
						<div className="form-fields panel panel-default block">
							<h2>Details</h2>
							<CurrencySelectContainer isMobile={this.props.isMobile} />
							<DateSelectContainer isMobile={this.props.isMobile} />
							<PurchaseAmountContainer show={showPurchaseAmount} isMobile={this.props.isMobile} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="amounts-block panel panel-default block">
							<h2>Results</h2>
							<ResultsContainer />
						</div>
					</div>
					<div className="col-md-6">
						<PriceHistoryContainer />
					</div>	
				</div>
			</div>,
			<Footer key="footer" />
		];
	}
}

App.propTypes = {
	isFetching: PropTypes.bool,
	dates: PropTypes.object,
	isMobile: PropTypes.bool
};

function mapStateToProps(state) {
	return {
		isFetching: state.isFetching,
		dates: state.dates
	};
}

export default connect(
	mapStateToProps, null
)(App);
