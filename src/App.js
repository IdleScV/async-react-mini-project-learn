import React from 'react';
import GifListContainer from './components/GifListContainer.component';
import NavBar from './components/NavBar.component';
import './App.scss';

function App() {
	return (
		<div className="App">
			<NavBar />
			<GifListContainer />
		</div>
	);
}

export default App;
