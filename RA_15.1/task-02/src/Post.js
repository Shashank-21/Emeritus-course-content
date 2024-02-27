import React, { useState } from 'react';
import Comment from './Comment'; // Import the Comment component

const Post = ({ post }) => {
	const [comments, setComments] = useState([]);
	const [loadingComments, setLoadingComments] = useState(false);

	const fetchComments = async () => {
		setLoadingComments(true);
		try {
			const postId = post.id;
			const response = null; // Todo: Replace 'null'. Call the `fetch` function to fetch comments from the url `https://jsonplaceholder.typicode.com/posts/{postId}/comments`, and store the result in the variable `response`. Remember to use the `await` keyword in front of the fetch function. call.
			const data = await response.json();
			setComments(data);
		} catch (error) {
			console.error('Error fetching comments:', error);
		} finally {
			setLoadingComments(false);
		}
	};

	return (
		<li className="post">
			<h2 className="post-title">{post.title}</h2>
			<p className="post-body">{post.body}</p>
			<button onClick={fetchComments} disabled={loadingComments}>
				{loadingComments ? 'Loading comments...' : 'Show Comments'}
			</button>
			{!!comments.length && (
				<div className="comments-section">
					{comments.map((comment) => (
						<Comment /> // In the Comment component, add the `key` prop and set it to `comment.id`, as well as the `comment` prop and set it to `comment`
					))}
				</div>
			)}
		</li>
	);
};

export default Post;
