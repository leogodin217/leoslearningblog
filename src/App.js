import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

import BlogList from './components/BlogList';
// import BlogForm from './components/BlogForm';
import Login from './components/Login';
import Blogs from './content/Blogs.js';
import base from './base';


class App extends Component {
  constructor() {
    super();

    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.logout = this.logout.bind(this);
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

  logout() {
    console.log('Logging out!');
    base.unauth();
    this.setState({currentUser: null});
  }

  addDefaultBlogs(event) {
    event.preventDefault();
    this.setState({
      blogs: Blogs
    });
  }
  



  render() {

    return (
      <div className="App">
        <div className="App-header dark-primary-color">
          <h2>Leo's Learning Blog</h2>
          <Link to="/admin">Admin</Link>
          <Login setCurrentUser={this.setCurrentUser} 
            currentUser={this.state.currentUser}/>
        </div>
        <div className="content">
          <BlogList blogs={this.state.blogs} />
        </div>
      </div>
    );
  }
}

export default App;
