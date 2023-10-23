import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

// Screens
import SelectGameMode from './Screens/SelectGameMode';
import GameMode1 from './Screens/GameMode1';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SelectGameMode />}/>
					<Route path="/mode/1" element={<GameMode1 />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
