import React from 'react'
import './ButtonLayout.css'

const letterButton = (letter, playable, guessedLetters, onclickfunc) =>{
  return(<button className='letterbutton' value={letter} disabled={guessedLetters.has(letter) || !playable} onClick={(e) => onclickfunc(e.target.value)}>{letter}</button>);
}

const ButtonLayout = (playable, guessedLetters, onclickfunc) => {
  return (
    <div className='keyboard'>
        <div className='row1'>
          {"QWERTYUIOP".split("").map(letter=> (letterButton(letter, playable, guessedLetters, onclickfunc)))}
        </div>
        <div className='row2'>
          {"ASDFGHJKL".split("").map(letter=> (letterButton(letter, playable, guessedLetters, onclickfunc)))}
        </div>
        <div className='row3'>
          {"ZXCVBNM".split("").map(letter=> (letterButton(letter, playable, guessedLetters, onclickfunc)))}
        </div>
    </div>
  )
}

export default ButtonLayout