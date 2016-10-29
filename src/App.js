import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import Login from './components/Login';
import Blogs from './content/Blogs.js';
import base from './base';

const uuid = require('uuid');

class App extends Component {
  constructor() {
    super();

    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.addDefaultBlogs = this.addDefaultBlogs.bind(this);
    this.addBlog = this.addBlog.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.state = {
      blogs: {},
      currentUser: null,
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

  setCurrentUser(updatedUser) {
    this.setState({ currentUser: updatedUser });
  }

  addDefaultBlogs(event) {
    event.preventDefault();
    const blogs = {...this.state.blogs};
    this.setState({
      blogs: Blogs
    });
  }
  
  addBlog(blog) {
    event.preventDefault();
    // Get the current state
    const blogs = {...this.state.blogs};

    // Add the blog
    const id = uuid.v1();
    const postDate = Date();
    blog.postDate = postDate;
    blogs[id] = blog;

    // Set the state
    this.setState({
      blogs: blogs
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header dark-primary-color">
          <h2>Leo's Learning Blog</h2>
          <Login setCurrentUser={this.setCurrentUser}/>
        <BlogForm addDefaultBlogs={this.addDefaultBlogs} addBlog={this.addBlog} />
        </div>
        <div className="content">
          <BlogList blogs={this.state.blogs} />
        </div>
      </div>
    );
  }
}

export default App;
