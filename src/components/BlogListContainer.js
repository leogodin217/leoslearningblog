import React from 'react';

import BlogList from './BlogList';
import base from '../base';
import { sortByKey } from '../helpers';

class BlogListContainer extends React.Component {

	constructor() {
		super();

		this.componentWillMount = this.componentWillMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.sortedBlogPosts = this.sortedBlogPosts.bind(this);
		this.state = {
			blogs: {},
		}
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

	sortedBlogPosts() {
		// Convert the blogs object to an array of objects
		const blogIds = Object.keys(this.state.blogs);
		const blogs = blogIds.map((key) => {
			const blog = this.state.blogs[key];
			blog.id = key;
			return blog;
		});

		// Sort by post date ascending
		return blogs.sort(sortByKey('postDate'));
	}


	render() {
		return (
			<BlogList blogPosts={this.sortedBlogPosts()} />
		)
	}
}

export default BlogListContainer;