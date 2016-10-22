import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import BlogList from './components/BlogList';

import Blogs from './content/Blogs.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header dark-primary-color">
          <h2>Leo's Learning Blog</h2>
        </div>
        <div className="content">
          <BlogList blogs={Blogs()} />
        </div>
      </div>
    );
  }
}

export default App;
