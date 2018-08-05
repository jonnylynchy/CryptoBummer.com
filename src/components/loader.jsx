import React from 'react';
// Styles
import '../css/loader.css';

const Loader = props => {
	return (
		<div className="loader">
			<div className="loader-inner text-center">
				<h3>Loading...</h3>	
				<span className="text-large glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
			</div>
		</div>	
	);
}

export default Loader;
