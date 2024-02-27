import React from 'react';

const Comment = ({ comment }) => {
	return (
		<div className="comment">
			<h3>
				{comment.name} <span>({comment.email})</span>
			</h3>
			<p>{comment.body}</p>
		</div>
	);
};

export default Comment;
