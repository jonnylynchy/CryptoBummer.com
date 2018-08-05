import React from 'react';

// Styles
import '../css/animations.css';

const Bummer = props => {
	if (props.show && props.purchaseAmount > 0 && props.purchasePrice > 0) {
		const soldPriceInCurrency = props.sellPrice * props.purchaseAmount;
		const todayPriceInCurrency = props.currentPrice * props.purchaseAmount;
		const bummer = soldPriceInCurrency < todayPriceInCurrency;
		return (
			<div className="text-center">
				{ bummer
					? 	<div className="bounceInUp">
							<h3>Bummer!</h3>
							<span role="img" className="emoji" aria-label="Bummer">😞</span>
						</div>
					:	<div className="bounceInUp">
							<h3>You made a good decision!</h3>
							<span role="img" className="emoji" aria-label="No Bummer">😊</span>
						</div>
				}
			</div>
		);
	}
	return null;
}

export default Bummer;
