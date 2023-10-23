import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Box from '../Components/Box';

type Props = {}

const SelectGameMode = (props: Props) => {
	let navigate = useNavigate();
	const [gameModeId, setGameModeId] = useState<number>(1);

    return (
        <div>
            <h1>Guessing Game</h1>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '20px 0'}}>
				<Box highlight={gameModeId === 1} onClick={() => setGameModeId(1)}>
					<p>Have a computer guess your number</p>
				</Box>
			</div>
			
			<button onClick={() => navigate(`/mode/${gameModeId}`)}>Start</button>
        </div>
    )
}

export default SelectGameMode