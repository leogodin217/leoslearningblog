import React from 'react';

class BlogList extends React.Component {
	render() {

		const blogs = this.props.blogs;
		const blogKeys = Object.keys(blogs);
		return (
			<div className="blog-list dark-primary-color">
				<ul className="blog-list">
					{blogKeys.map( key => {
						return (
						 	<li key={key} className="light-primary-color" >
						 		<div className="blog-title">{blogs[key].title}</div><br />
						 		<div className="blog-content">{
						 			blogs[key].content.split("</p>").map(paragraph => {
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