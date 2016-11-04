import React from 'react';
import ReactDOM from 'react-dom';
// import render from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import Admin from './components/Admin.js';
import './index.css';


const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match pattern="/admin" component={Admin} />
				<Miss component={App} />
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));

/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/
