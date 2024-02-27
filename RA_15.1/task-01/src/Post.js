import React from 'react';

function Post({ post }) {
	return (
		<li className="post">
			<h2 className="post-title">{post.title}</h2>
			<p className="post-body">{post.body}</p>
		</li>
	);
}

export default Post;
