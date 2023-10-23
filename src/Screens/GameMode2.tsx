import React, { useEffect, useState } from 'react'
import HowToPlay from '../Components/HowToPlay';
import { generateNumberBetween } from '../Util/helpers';
import Success from '../Components/Success';
import SubmitGuessNumber from '../Components/SubmitGuessNumber';

type GameMode2Props = {}

type ComputerResponse = 'too low' | 'too high' | 'correct';

const GameMode2: React.FC<GameMode2Props> = ({}) => {
    const UPPER_LIMIT = 10000;
    const LOWER_LIMIT = 1;

    const [targetNumber, setTargetNumber] = useState<number|null>(null);
    const [computerResponse, setComputerResponse] = useState<ComputerResponse|null>(null);
    const [numberOfAttempts, setNumberOfAttempts] = useState<number>(0);
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
                        <p>Number of attempts: {numberOfAttempts}</p>
                        {computerResponse && <h2>Computer Response: {computerResponse}</h2>}

                        <SubmitGuessNumber 
                            title='Guess a number'
                            subtitle={`Guess a number between ${LOWER_LIMIT} and ${UPPER_LIMIT}`}
                            onSubmitNumber={(number) => {
                                compareGuessToTarget(number);
                                setNumberOfAttempts(numberOfAttempts + 1);
                            }}
                            buttonText='Submit'
                            upperLimit={UPPER_LIMIT}
                            lowerLimit={LOWER_LIMIT} 
                        />
                    </>
                )}

                {playerGuessCorrect && <Success gamemode={2} numberOfAttempts={numberOfAttempts} />}
            </div>
        </div>
        
    )
}

export default GameMode2