import React from 'react';

import base from '../base';

class Login extends React.Component {
	constructor() {
		super();
		this.authenticate = this.authenticate.bind(this);
		this.authHandler = this.authHandler.bind(this);
	}

	authenticate() {
		const provider = 'facebook';
		base.authWithOAuthPopup(provider, this.authHandler);
	}

	authHandler(err, authData) {
		// Handle errors
		if (err) {
			console.error(err);
			return;
		}

		// Pass the uid up as current user
		this.props.setCurrentUser(authData.user.uid); 

	}

	render() {
		return (
			<button onClick={this.authenticate}>Login With Facebook</button>
		)
	}
}

export default Login;