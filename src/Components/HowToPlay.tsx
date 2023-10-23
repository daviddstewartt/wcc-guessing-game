import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'

type HowToPlayProps = {
    mode: number;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ mode }) => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <AiFillInfoCircle size={30} color={'#2dc8c8'} />
                <h2 style={{marginLeft: 10}}>How to play</h2>  
            </div>
            <div className='box light' style={{padding: '10px 15px', textAlign: 'left'}}>
                {mode === 1 && (
                    <p>Mode 2 how to play</p>
                )}     
                {mode === 2 && (
                    <div>
                        <p>The computer will generate a random number (and keep it secret)</p>
                        <p>You, the player, will enter a guess.</p>
                        <p>The computer will respond to you, the player, with one of the of the following: too low, too
                        high, correct.</p>
                        <p>This will repeat until you, the player, has successfully guessed the computer's number.</p>
                    </div>
                )}
            </div>
        </div>
        
        
    )
}

HowToPlay.defaultProps = {
    mode: 1
}

export default HowToPlay