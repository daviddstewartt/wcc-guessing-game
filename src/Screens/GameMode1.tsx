import React, { useEffect, useState } from 'react'
import SubmitGuessNumber from '../Components/SubmitGuessNumber'
import GuessResponses from '../Components/GuessResponses'

type GameMode1Props = {}

const GameMode1: React.FC<GameMode1Props> = ({}) => {
    const [playerGuessNumber, setPlayerNumber] = useState<number|null>(null)
    const [computerGuessNumber, setComputerGuessNumber] = useState<number|null>(null)

    // Setting the computer guess bounds
    const [guessUpperLimit, setGuessUpperLimit] = useState<number>(10000);
    const [guessLowerLimit, setGuessLowerLimit] = useState<number>(1);

    const generateNumberBetweenBounds = (min: number, max: number) => {
        const guess = Math.floor(Math.random() * (max - min + 1)) + min;
        setComputerGuessNumber(guess);
    }

    /** When tthe player guess number is created, automatically 
     * generate a computer guess number between 1 and 10,000
     */
    useEffect(() => {
        if (playerGuessNumber) {
            generateNumberBetweenBounds(guessLowerLimit, guessUpperLimit);
        }
    }, [playerGuessNumber])

    return (
        <div>
            {!playerGuessNumber && <SubmitGuessNumber onGuessNumber={(number) => setPlayerNumber(number)} />}
            
            {playerGuessNumber && (
                <>
                    <p>Computer guesses you number is: {computerGuessNumber}</p>
                    <GuessResponses onTooHigh={() => {}} onTooLow={() => {}} onCorrect={() => {}} />
                </>
            )}
        </div>
    )
}

export default GameMode1