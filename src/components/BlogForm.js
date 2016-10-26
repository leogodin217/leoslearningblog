import React from 'react';

class BlogForm extends React.Component {
	render() {
		return (
			<div className="add-blog">
				<form className="blog-form">
					<input type="text" name="title" placeholder="Title" /> <br />
					<textarea name="content" placeholder="Content" /> <br />
					<button type="submit">Add Post</button> <br />
					<button onClick={this.props.addDefaultBlogs}>Add Default Blogs</button>
				</form>
			</div>
			)
	}	
}

export default BlogForm;