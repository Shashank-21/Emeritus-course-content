import React, { useState } from 'react';

function LikeButton() {
	const [liked, setLiked] = useState(false);

	if (liked) {
		// Todo: Return the text 'You liked this.' here.
	}

	return <button onClick={() => setLiked(true)}>Like</button>;
}

export default LikeButton;
