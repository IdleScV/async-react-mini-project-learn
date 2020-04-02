import React, { useState, useEffect } from 'react';
import GifList from './GiftListContainer/GifList.component';

let key = 'tsEWspp9kd3zmt6bopoSXO13PlA4O5RD';

export default function GifListContainer() {
	const [ imageList, imageListSet ] = useState(null);
	const [ inputText, inputTextSet ] = useState('');
	const [ searchText, searchTextSet ] = useState(null);

	function doFetch() {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${inputText}&api_key=${key}`)
			.then((response) => response.json())
			.then((json) => imageListSet(json.data));
	}

	useEffect(
		() => {
			searchTextSet(`Searching... ${inputText}`);
			inputTextSet('');
		},
		[ imageList ]
	);

	return (
		<div className="gif_container">
			<div className="images">
				{imageList ? imageList.map((image, i) => <GifList images={image} key={i} />) : <div>No Images</div>}
			</div>
			<div className="search_container">
				<h2>{searchText ? searchText : 'Search Something...'}</h2>
				<input
					value={inputText}
					onChange={(e) => {
						inputTextSet(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							doFetch();
						}
					}}
				/>
				<button onClick={doFetch}>Submit</button>
			</div>
		</div>
	);
}
