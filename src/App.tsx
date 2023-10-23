import React, { useState } from 'react';
import './App.css';

// Screens
import Box from './Components/Box';

function App() {
	const [gameMode, setGameMode] = useState<number>(1);

	return (
		<div className="App">
			<h1>Guessing Game</h1>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '20px 0'}}>
				<Box highlight={gameMode === 1} onClick={() => setGameMode(1)}>
					<p>Have a computer guess your number</p>
				</Box>
			</div>
			
			<button onClick={() => {}}>Start</button>
		</div>
	);
}

export default App;
