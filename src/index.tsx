// This must be the first line in src/index.js
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<div>Hello, world</div>
	</React.StrictMode>,
	document.getElementById('root')
);
