import React from 'react';

const DATA_LINK = <a href="https://www.cryptocompare.com" target="_new">cryptocompare.com</a>;
const DISCLAIMER = 'Purchase and sell prices are calculated by bits per unit of exchange currency.';
const YOU_TUBE_LINK = <a href="https://www.youtube.com/channel/UCZdW0xGv6RCwMMXmjiGGbrg" target="_new">Learn more about Crypto Currencies</a>
const Footer = props => {
	return (
		<footer className="text-center footer">
			<div className="container">
				<div>
					Market Data by {DATA_LINK}<br />
					* {DISCLAIMER}<br />
					{YOU_TUBE_LINK}
				</div>
			</div>	
		</footer>
	);
}

export default Footer;
