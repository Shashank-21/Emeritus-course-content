import React, { useState, useEffect } from 'react';
import Post from './Post';

function PostList() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const response = null; // Todo: Replace 'null'. Call the `fetch` function to fetch posts from the url `https://jsonplaceholder.typicode.com/posts/`, and store the result in the variable `response`. Remember to use the `await` keyword in front of the fetch function call.
			const data = await response.json();
			// Todo: Set the state 'posts' of the component to the value of the variable `data` using the `setPosts` function.
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
				<Post /> // In the Post component, add the `key` prop and set it to `post.id`, as well as the `post` prop and set it to `post`
			))}
		</div>
	);
}

export default PostList;
