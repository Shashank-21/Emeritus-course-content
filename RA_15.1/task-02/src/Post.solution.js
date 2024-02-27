import React, { useState } from 'react';
import Comment from './Comment'; // Import the Comment component

const Post = ({ post }) => {
	const [comments, setComments] = useState([]);
	const [loadingComments, setLoadingComments] = useState(false);

	const fetchComments = async () => {
		setLoadingComments(true);
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
			);
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
						<Comment key={comment.id} comment={comment} />
					))}
				</div>
			)}
		</li>
	);
};

export default Post;
