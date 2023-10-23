import React from 'react'

type GuessResponsesProps = {
    onTooHigh: () => void;
    onTooLow: () => void;
    onCorrect: () => void;
}

const GuessResponses: React.FC<GuessResponsesProps> = ({onTooHigh, onTooLow, onCorrect}) => {
    return (
        <div>
            <button className='m0-10' onClick={onTooHigh}>Too High</button>
            <button className='m0-10' onClick={onCorrect}>Correct</button>
            <button className='m0-10' onClick={onTooLow}>Too Low</button>
        </div>
    )
}

export default GuessResponses