import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

import Blogs from './content/Blogs.js';

class App extends Component {
  constructor() {
    super();

    this.addDefaultBlogs = this.addDefaultBlogs.bind(this);
    this.addBlog = this.addBlog.bind(this);
    this.state = {
      blogs: [] 
    };
  }

  addDefaultBlogs(event) {
    event.preventDefault();
    const blogs = {...this.state.blogs};
    this.setState({
      blogs: Blogs.blogs
    });
  }

  addBlog(blog) {
    event.preventDefault();
    // Get the current state
    const blogs = this.state.blogs;

    // Add the blog
    blog.id = Math.random();    
    blogs.push(blog);

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
