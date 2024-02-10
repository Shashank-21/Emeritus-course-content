import React, { useState } from 'react';

function LikeButton() {
	const [liked, setLiked] = useState(false);

	if (liked) {
		return 'You liked this.';
	}

	return <button onClick={() => setLiked(true)}>Like</button>;
}

export default LikeButton;
