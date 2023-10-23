import React from 'react'
import { useNavigate } from 'react-router-dom'

type SuccessProps = {
    numberOfAttempts: number;
    gamemode?: number;
}

const Success: React.FC<SuccessProps> = ({ numberOfAttempts, gamemode }) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Success!</h1>
            <p>It took {gamemode === 1 ? 'the computer' : 'you'} {numberOfAttempts} attempts to guess {gamemode === 1 ? 'your' : 'the computers'} number.</p>
            <div>
                <button className='m0-10' onClick={() => window.location.reload()}>Play Again</button>
                <button className='m0-10' onClick={() => navigate("/")}>Select a different mode</button>
            </div>
        </div>
    )
}

Success.defaultProps = {
    gamemode: 1
}

export default Success