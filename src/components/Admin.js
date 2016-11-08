import React from 'react';

import base from '../base';
import Login from './Login';
import BlogForm from './BlogForm';

const uuid = require('uuid');

class Admin extends React.Component {

	constructor() {
		super();

		this.setCurrentUser = this.setCurrentUser.bind(this);
		this.componentWillMount = this.componentWillMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.addBlog = this.addBlog.bind(this);


		this.state = {
			uid: null,
			blogs: {}
		};
	}

  componentWillMount() {
		// Sync the app with Firebase
		this.ref = base.syncState('leosblog/content', {
			context: this,
			state: 'blogs'
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}


	setCurrentUser(uid) {
		this.setState( { uid });
	}

  addBlog(blog) {
    // Get the current state
    const blogs = {...this.state.blogs};

    // Add the blog
    const id = uuid.v1();
    const postDate = new Date().getTime();
    blog.postDate = postDate;
    blogs[id] = blog;

    // Set the state
    this.setState({
      blogs: blogs
    });
  }


	render() {
		return (
			<div>
			  <h3>Admin</h3>
				<Login currentUser={this.state.uid} setCurrentUser={this.setCurrentUser} />
				<BlogForm addBlog={this.addBlog} />
			</div>

		)
	}
}

export default Admin;