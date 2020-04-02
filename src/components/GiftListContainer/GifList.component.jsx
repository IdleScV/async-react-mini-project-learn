import React from 'react';

export default function GifList(props) {
	const { images } = props.images;
	return (
		<div className="gif">
			<img src={images['fixed_height']['url']} />
		</div>
	);
}
