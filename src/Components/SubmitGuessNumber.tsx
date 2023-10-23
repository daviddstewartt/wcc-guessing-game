import React, { useState } from 'react'

type SubmitGuessNumberProps = {
    title: string;
    subtitle: string;
    onSubmitNumber: (number: number) => void;
    buttonText?: string;
    upperLimit: number;
    lowerLimit: number;
}

const SubmitGuessNumber: React.FC<SubmitGuessNumberProps> = ({title, subtitle, onSubmitNumber, buttonText, upperLimit, lowerLimit}) => {
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

        onSubmitNumber(guessNumber);
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <form onSubmit={handleSubmitInput} style={{display: 'flex', flexDirection: 'column'}}>
                <input onChange={onInputChange} type="number" />
                <button>{buttonText}</button>
                <p>{inputError}</p>
            </form>
        </div>
    )
}

export default SubmitGuessNumber