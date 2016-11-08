import React from 'react';
import {Card, CardTitle, CardText } from 'material-ui/Card';


class BlogList extends React.Component {
	render() {

		const styles = {
			root: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
			},
			gridList: {
				width: 500,
				height: 450,
				overflowY: 'auto',
			},
		};


		return (
			<div style={styles.root}>
				<ul>
					{this.props.blogPosts.map((tile) => {
						return (
						<li key={tile.id}>
						<Card >
							<CardTitle 
								title={tile.title} 
								subtitle={new Date(tile.postDate).toString()} />
							<CardText >{tile.content}</CardText>
						</Card>
						</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

BlogList.PropTypes = {
	blogs: React.PropTypes.array.isRequired,
};

export default BlogList;