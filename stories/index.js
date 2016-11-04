import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from '../src/components/Login';

storiesOf('Login Button', module)
	.add('Not logged in', () => (
		<Login  currentUser={null} 
						setCurrentUser={() => {console.log(this.props.currentUser)}} />
	)).add('Logged in', () => (
		<Login currentUser='user1'
		       setCurrentUser={() => {console.log(this.props.currentUser)}} />
	));