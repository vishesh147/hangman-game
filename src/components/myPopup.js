import React from 'react';
import Popup from 'reactjs-popup';
import './myPopup.css';

const myPopup = (mistakes, blanks, word, resetGame, disableButtons) => {
    let message="";
    let check = false;
    if(mistakes > 6){
        check = true;
        message="GAME OVER";
    }
    else if(blanks < 1) {
        message="YOU WON!";
        check = true;
    }
    return (
        <div>
            <Popup open={check} position="center center" onClose={(e) => resetGame()}>
                    <p className='msg'>{message}</p>
                    <br />
                    <p className='cword'>Correct Word : {word}</p>
                    <button className='pbtn' onClick={(e) => resetGame()}><span>Play Again</span></button>
            </Popup>
        </div>
        
    )
}

export default myPopup