import React, { useEffect, useState } from 'react'
import SubmitGuessNumber from '../Components/SubmitGuessNumber'
import GuessResponses from '../Components/GuessResponses'
import Success from '../Components/Success'
import HowToPlay from '../Components/HowToPlay'
import { generateNumberBetween } from '../Util/helpers'

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
        const guess = generateNumberBetween(min, max);
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
        setGuessLowerLimit(1);
        setGuessUpperLimit(10000);
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
        <div className='gamemode-container'>
            <HowToPlay mode={1} />
            <div className='main-container'>
                {computerGuessCorrect && (<Success numberOfAttempts={numberOfAttempts} />)}

                {!computerGuessCorrect && (
                    <>
                        {!playerGuessNumber && (
                            <SubmitGuessNumber 
                                title='Think of a number'
                                subtitle={`Pick a number between ${guessLowerLimit} and ${guessUpperLimit}`}
                                onSubmitNumber={(number) => setPlayerNumber(number)}
                                buttonText='Submit'
                                upperLimit={guessUpperLimit}
                                lowerLimit={guessLowerLimit} 
                            />
                        )}
                        
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
        </div>
    )
}

export default GameMode1