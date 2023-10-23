import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { GoNumber } from 'react-icons/go';
import { RiComputerFill } from 'react-icons/ri';
import Box from '../Components/Box';

const SelectGameMode = () => {
	let navigate = useNavigate();
	const [gameModeId, setGameModeId] = useState<number>(1);

    return (
        <div>
            <h1>Guessing Game</h1>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '20px 0'}}>
				<Box highlight={gameModeId === 1} onClick={() => setGameModeId(1)}>
					<GoNumber color={gameModeId === 1 ? '#268a8a' : '#2dc8c8'} size={70} />
					<p>You think of a number, and have a computer guess your number</p>
				</Box>
				<Box highlight={gameModeId === 2} onClick={() => setGameModeId(2)}>
					<RiComputerFill color={gameModeId === 2 ? '#268a8a' : '#2dc8c8'} size={70} />
					<p>You, the player, guesses the computer's number</p>
				</Box>
			</div>
			
			<button onClick={() => navigate(`/mode/${gameModeId}`)}>Start</button>
        </div>
    )
}

export default SelectGameMode