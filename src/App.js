import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Drawing from './components/Drawing';
import ButtonLayout from './components/ButtonLayout';
import myPopup from './components/myPopup';

const wordlist = ["VISHESH", "PATEL", "TEST", "WORDLIST"];

function randomWord(){
    return wordlist[Math.floor(Math.random()*wordlist.length)];
}

export default class App extends Component {
  static defaultProps = {
    maxWrong: 6
  }

  constructor(props){
    super(props);
    const word = randomWord();
    const wordset = new Set(word);
    this.state = {
        playable: true,
        mistakes: 0,
        guessedLetters: new Set([]),
        correctWord: word,
        blanks: wordset.size
    }
    this.updateGuessed = this.updateGuessed.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  updateGuessed(letter) {
    this.setState(st => ({
        guessedLetters: st.guessedLetters.add(letter),
        mistakes: st.mistakes + (st.correctWord.includes(letter) ? 0 : 1),
        blanks: st.blanks - (st.correctWord.includes(letter) ? 1 : 0)
    }))
  }

  resetGame(e){
    const word = randomWord();
    const wordset = new Set(word);
    this.setState(st => ({
      playable: true,
      mistakes: 0,
      guessedLetters: new Set([]),
      correctWord: word,
      blanks: wordset.size
    }))
  }
  
  guessedWord(){
    return this.state.correctWord.split("").map(letter => (this.state.guessedLetters.has(letter) ? 
      <div className='letter'>{letter}</div> : <div className='uscore'>_</div>));
  }

  render() {
    return (
        <div className='container'>
          <div className='grid'>
            <Header />
            <div className='word'>{this.guessedWord()}</div>
            {ButtonLayout(this.state.playable, this.state.guessedLetters, this.updateGuessed)}
            {Drawing(this.state.mistakes)}
            {myPopup(this.state.mistakes, this.state.blanks, this.state.correctWord, this.resetGame, this.disableButtons)}  
          </div>
        </div>
    )
  }
}
