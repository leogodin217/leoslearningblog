import React from 'react';



class BlogForm extends React.Component {

	constructor() {
		super();
		this.createBlog = this.createBlog.bind(this);
	}

	createBlog(event) {
		event.preventDefault();

		const blog = {
			title: this.title.value,
			content: this.content.value
		}

		this.props.addBlog(blog);
		this.blogForm.reset();

	}


	render() {

		return (
			<div className="add-blog">
				<form className="blog-form" ref={(input) => this.blogForm = input}
					onSubmit={this.createBlog.bind(this)}>
					<input type="text" name="title" placeholder="Title" 
						ref={(input) => this.title = input} /> <br />
					<textarea name="content" placeholder="Content" 
						ref={(input) => this.content = input}/> <br />
					<button type="submit">Add Post</button> <br />
					<button onClick={this.props.addDefaultBlogs}>Add Default Blogs</button>
				</form>
			</div>
			)
	}	
}

BlogForm.PropTypes = {
	addBlog: React.PropTypes.func.isRequired,
}

export default BlogForm;