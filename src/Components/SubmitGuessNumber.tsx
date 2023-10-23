import React, { useState } from 'react'

type SubmitGuessNumberProps = {
    onGuessNumber: (number: number) => void;
    upperLimit: number;
    lowerLimit: number;
}

const SubmitGuessNumber: React.FC<SubmitGuessNumberProps> = ({onGuessNumber, upperLimit, lowerLimit}) => {
    const [inputError, setInputError] = useState<string>('')
    const [guessNumber, setGuessNumber] = useState<number|null>(null);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const inputNumber = e.target.value;
            const numberToGuess = parseInt(inputNumber);

            if (isNaN(numberToGuess)) {
                throw new Error('Please enter a number');
            }

            if (numberToGuess < lowerLimit || numberToGuess > upperLimit) {
                throw new Error('Please enter a number between 1 and 10,000.');
            }

            if (inputError) setInputError(''); // clear error message
            setGuessNumber(numberToGuess);
        } catch (error: any) {
            setInputError(error.message);
        }
        
    }

    const handleSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputError) return; // if there is an error, don't submit the form

        if (guessNumber === null) return; // if the guess number is null, don't submit the form

        onGuessNumber(guessNumber);
    }

    return (
        <div>
            <h1>Think of a number</h1>
            <p>Pick a number between {lowerLimit} & {upperLimit}</p>
            <form onSubmit={handleSubmitInput} style={{display: 'flex', flexDirection: 'column'}}>
                <input onChange={onInputChange} type="number" />
                <button>Submit</button>
                <p>{inputError}</p>
            </form>
        </div>
    )
}

export default SubmitGuessNumber