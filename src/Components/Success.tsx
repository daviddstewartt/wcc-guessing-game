import React from 'react'
import { useNavigate } from 'react-router-dom'

type SuccessProps = {
    numberOfAttempts: number
}

const Success: React.FC<SuccessProps> = ({ numberOfAttempts }) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Success!</h1>
            <p>It took the computer {numberOfAttempts} attempts to guess your number.</p>
            <div>
                <button className='m0-10' onClick={() => window.location.reload()}>Play Again</button>
                <button className='m0-10' onClick={() => navigate("/")}>Select a different mode</button>
            </div>
        </div>
    )
}

export default Success