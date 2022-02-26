import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='title'>Hangman!</h1>
        <br />
        <p className='content'>Guess the hidden word before the man hangs.</p>
        <br />
    </div>
  )
}

export default Header