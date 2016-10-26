import React from 'react';

class BlogList extends React.Component {
	render() {

		const blogs = this.props.blogs;
		console.log(blogs);
		return (
			<div className="blog-list dark-primary-color">
				<ul className="blog-list">
					{blogs.map( blog => {
						return (
						 	<li key={blog.id} className="light-primary-color" >
						 		<div className="blog-title">{blog.title}</div><br />
						 		<div className="blog-content">{
						 			blog.content.split("</p>").map(paragraph => {
						 				return <p key={Math.random()}>{paragraph}</p>;
						 			})
						 		}</div>
						 	</li>
						 )

					})}
				</ul>
			</div>
		)
	}
}

export default BlogList;