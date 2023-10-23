import React, { useEffect, useState } from 'react'
import HowToPlay from '../Components/HowToPlay';
import { generateNumberBetween } from '../Util/helpers';
import Success from '../Components/Success';

type Props = {}

type ComputerResponse = 'too low' | 'too high' | 'correct';

const GameMode2 = (props: Props) => {
    const UPPER_LIMIT = 10000;
    const LOWER_LIMIT = 1;

    const [targetNumber, setTargetNumber] = useState<number|null>(null);
    const [playerGuessNumber, setPlayerGuessNumber] = useState<number|null>(null);
    const [computerResponse, setComputerResponse] = useState<ComputerResponse|null>(null);
    const [numberOfAttempts, setNumberOfAttempts] = useState<number>(0);
    const [inputError, setInputError] = useState<string>('');
    const [playerGuessCorrect, setPlayerGuessCorrect] = useState<boolean>(false);

    const compareGuessToTarget = (guess: number) => {
        if (guess < targetNumber!) {
            setComputerResponse('too low');
        } else if (guess > targetNumber!) {
            setComputerResponse('too high');
        } else {
            setComputerResponse('correct');
            setPlayerGuessCorrect(true);
        }
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const inputNumber = e.target.value;
            const guessedNumber = parseInt(inputNumber);

            if (isNaN(guessedNumber)) {
                throw new Error('Please enter a number');
            }

            if (guessedNumber < LOWER_LIMIT || guessedNumber > UPPER_LIMIT) {
                throw new Error('Please enter a number between 1 and 10,000.');
            }


            if (inputError) setInputError(''); // clear error message
            
            setPlayerGuessNumber(guessedNumber);
        } catch (error: any) {
            setInputError(error.message);
        }
        
    }

    const handleSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComputerResponse(null); // clear computer response

        if (inputError) return; // if there is an error, don't submit the form

        if (playerGuessNumber === null) return; // if the guess number is null, don't submit the form

        compareGuessToTarget(playerGuessNumber);
        setNumberOfAttempts(numberOfAttempts + 1);
    }

    useEffect(() => {
      if (targetNumber === null) {
        // generate a target number between 1 & 10,000
        const target = generateNumberBetween(LOWER_LIMIT, UPPER_LIMIT);
        setTargetNumber(target);
      }
    }, [])

    return (
        <div className='gamemode-container'>
            <HowToPlay mode={2} />
            <div className='main-container'>
                {targetNumber && !playerGuessCorrect && (
                    <>
                        <div className='target-number'>
                            <h2>Target Number [debug]: {targetNumber}</h2>
                        </div>

                        <p>Number of attempts: {numberOfAttempts}</p>

                        {computerResponse && (
                            <div className='computer-response'>
                                <h2>Computer Response: {computerResponse}</h2>
                            </div>
                        
                        )}
                        <div className='guess-number'>
                            <h2>Guess Number: {playerGuessNumber}</h2>
                        </div>

                        <form onSubmit={handleSubmitInput} style={{display: 'flex', flexDirection: 'column'}}>
                            <input onChange={onInputChange} type="number" />
                            <button>Guess</button>
                            <p>{inputError}</p>
                        </form>
                    </>
                )}

                {playerGuessCorrect && <Success gamemode={2} numberOfAttempts={numberOfAttempts} />}
            </div>
        </div>
        
    )
}

export default GameMode2