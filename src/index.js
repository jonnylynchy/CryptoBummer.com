import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MobileDetect from 'mobile-detect';

import configureStore from './store/configureStore';
import App from './App';
// Service worker only works on HTTPS
// import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import './css/stickyFooter.css';

const store = configureStore();
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile() !== null || md.phone() !== null;

ReactDOM.render(
	<Provider store={store}>
		<App isMobile={isMobile} />
	</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();
