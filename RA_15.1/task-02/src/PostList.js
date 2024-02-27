import React, { useState, useEffect } from 'react';
import Post from './Post';

function PostList() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts'
			);
			const data = await response.json();
			setPosts(data);
			setLoading(false);
		};

		fetchPosts();
	}, []);

	if (loading) {
		return <div>Loading posts...</div>;
	}

	return (
		<div>
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
}

export default PostList;
