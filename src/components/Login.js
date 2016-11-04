import React from 'react';

import base from '../base';

class Login extends React.Component {
	constructor() {
		super();
		this.authenticate = this.authenticate.bind(this);
		this.authHandler = this.authHandler.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		base.onAuth((user) => {
			this.authHandler(null, { user });
		});
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
		if (authData.user) {
			this.props.setCurrentUser(authData.user.uid); 
	  }
	}

	logout() {
		base.unauth();
		this.props.setCurrentUser(null);
	}

	render() {
		let clickHandler = {};
		let message = null;

		if (this.props.currentUser) {
			// We are logged in. 
			clickHandler = this.logout;
			message = 'Logout';
		} else {
			// We are not logged in
			clickHandler = this.authenticate;
			message = 'Login with Facebook';
		}

		return (
			<button onClick={clickHandler}>{message}</button>
		)
	}
}

Login.PropTypes = {
	currentUser: React.PropTypes.string.isRequired,
	setCurrentUser: React.PropTypes.func.isRequired,
};

export default Login;