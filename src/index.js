import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import Admin from './components/Admin.js';
import './index.css';

// Needed for onTouchTap (Not sure if this is for mobile apps only)
injectTapEventPlugin();


const Root = () => {
	return (
		<MuiThemeProvider>
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match pattern="/admin" component={Admin} />
				<Miss component={App} />
			</div>
		</BrowserRouter>
		</MuiThemeProvider>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));

/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/
