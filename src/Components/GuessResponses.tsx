import React from 'react'

type GuessResponsesProps = {
    onTooHigh: () => void;
    onTooLow: () => void;
    onCorrect: () => void;
}

const GuessResponses: React.FC<GuessResponsesProps> = ({onTooHigh, onTooLow, onCorrect}) => {
    return (
        <div>
            <button onClick={onTooHigh}>Too High</button>
            <button onClick={onTooLow}>Correct</button>
            <button onClick={onCorrect}>Too Low</button>
        </div>
    )
}

export default GuessResponses