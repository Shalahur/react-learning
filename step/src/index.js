import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from "./Counter";
import CounterV2 from "./CounterV2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/*<App/>*/}
		{/*<Counter/>*/}
		<CounterV2/>
	</React.StrictMode>
);

