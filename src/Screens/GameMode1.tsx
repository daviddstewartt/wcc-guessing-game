import React, { useState } from 'react'

type GameMode1Props = {}

const GameMode1: React.FC<GameMode1Props> = ({}) => {
    const [inputError, setInputError] = useState<string>('')
    const [guessNumber, setGuessNumber] = useState<number|null>(null);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const inputNumber = e.target.value;
            const numberToGuess = parseInt(inputNumber);

            if (isNaN(numberToGuess)) {
                throw new Error('Please enter a number');
            }

            if (numberToGuess < 1 || numberToGuess > 10000) {
                throw new Error('Please enter a number between 1 and 10,000.');
            }

            if (inputError) setInputError(''); // clear error message
            setGuessNumber(numberToGuess);
        } catch (error: any) {
            console.log(error);
            setInputError(error.message);
        }
        
    }

    const handleSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputError) return; // if there is an error, don't submit the form
    }

    return (
        <div>
            <h1>Think of a number</h1>
            <p>Pick a number between 1 & 10,000</p>
            <form onSubmit={handleSubmitInput}>
                <input onChange={onInputChange} type="number" />
                <button>Submit</button>
                <p>{inputError}</p>
            </form>
        </div>
    )
}

export default GameMode1