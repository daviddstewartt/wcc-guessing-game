import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

// Screens
import SelectGameMode from './Screens/SelectGameMode';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SelectGameMode />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
