import React, { useEffect, useState } from 'react'
import SubmitGuessNumber from '../Components/SubmitGuessNumber'
import GuessResponses from '../Components/GuessResponses'
import Success from '../Components/Success'

type GameMode1Props = {}

const GameMode1: React.FC<GameMode1Props> = ({}) => {
    const [playerGuessNumber, setPlayerNumber] = useState<number|null>(null);
    const [computerGuessNumber, setComputerGuessNumber] = useState<number|null>(null);
    const [numberOfAttempts, setNumberOfAttempts] = useState<number>(0);
    const [computerGuessCorrect, setComputerGuessCorrect] = useState<boolean>(false); // user to determine whether the computers guess is correct

    // Setting the computer guess bounds
    const [guessUpperLimit, setGuessUpperLimit] = useState<number>(10000);
    const [guessLowerLimit, setGuessLowerLimit] = useState<number>(1);

    const generateNumberBetweenBounds = (min: number, max: number) => {
        const guess = Math.floor(Math.random() * (max - min + 1)) + min;
        setComputerGuessNumber(guess);
        setNumberOfAttempts(numberOfAttempts + 1);
    }

    /** When the players guess are too high or low, adjust the guess bounds */
    const onGuessTooHigh = () => {
        setGuessUpperLimit(computerGuessNumber!);
        generateNumberBetweenBounds(guessLowerLimit, computerGuessNumber!);
    }
    const onGuessTooLow = () => {
        setGuessLowerLimit(computerGuessNumber!);
        generateNumberBetweenBounds(computerGuessNumber!, guessUpperLimit);
    }

    /** When the player guess is correct, show success and reset the game */
    const onGuessCorrect = () => {
        setComputerGuessCorrect(true);

    }

    /** When tthe player guess number is created, automatically 
     * generate a computer guess number between 1 and 10,000
     */
    useEffect(() => {
        if (playerGuessNumber) {
            generateNumberBetweenBounds(guessLowerLimit, guessUpperLimit);
            setNumberOfAttempts(0) // After generating the inital attampt number, reset the number of attempts to 0
        }
    }, [playerGuessNumber])

    return (
        <div>
            {computerGuessCorrect && (<Success numberOfAttempts={numberOfAttempts} />)}

            {!computerGuessCorrect && (
                <>
                    {playerGuessNumber && <p>players number is[debug]: {playerGuessNumber}</p>}
                    {playerGuessNumber && <p>computer guess bounds[debug]: {guessLowerLimit} {guessUpperLimit}</p>}
                    
                    {!playerGuessNumber && <SubmitGuessNumber onGuessNumber={(number) => setPlayerNumber(number)} />}
                    
                    {playerGuessNumber && (
                        <>
                            <p>Number of attempts: {numberOfAttempts}</p>
                            <p>Computer guesses you number is: {computerGuessNumber}</p>
                            <GuessResponses onTooHigh={() => onGuessTooHigh()} onTooLow={() => onGuessTooLow()} onCorrect={() => onGuessCorrect()} />
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default GameMode1