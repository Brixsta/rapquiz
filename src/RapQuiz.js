import React from 'react';
import './RapQuiz.css';
import RapQuizScore from './RapQuizScore';

class RapQuiz extends React.Component {

    constructor () {
        super();

        this.state = {
            guesses: [{number: 1, guess: ''}, {number: 2, guess: ''}, {number: 3, guess:''}, 
            {number: 4, guess: ''}, {number: 5, guess: ''}],
            score: 0,
            answered: 0,
            submittingQuiz: false
        }

        this.setGuess = this.setGuess.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.calculateNumAnswered = this.calculateNumAnswered.bind(this);
        this.resetQuiz = this.resetQuiz.bind(this);
    }

    resetQuiz () {
        document.getElementsByClassName('rap-quiz-form')[0].reset();
        this.setState({submittingQuiz: false})
    }

    setGuess (id, value) {
        const numberOfQuestion = Number(id);
        const myValue = value;
        const myGuess = {number: numberOfQuestion, guess: myValue}
        const allQuestionsExceptMyGuess = this.state.guesses.filter(item => item.number !== numberOfQuestion);
        this.setState({guesses: [...allQuestionsExceptMyGuess, myGuess]});
    }

    calculateScore () {
        let currentScore = 0;
        const guesses = this.state.guesses;

        // grab individual guesses
        let questionOneGuess = guesses.filter(item => item.number === 1)[0].guess;
        let questionTwoGuess = guesses.filter(item => item.number === 2)[0].guess;
        let questionThreeGuess = guesses.filter(item => item.number === 3)[0].guess;
        let questionFourGuess = guesses.filter(item => item.number === 4)[0].guess;
        let questionFiveGuess = guesses.filter(item => item.number === 5)[0].guess;

        // compare guess to answer
        if(questionOneGuess === '1996') {currentScore++;}
        if(questionTwoGuess === 'NWA') {currentScore++;}
        if(questionThreeGuess === 'bad-boy') {currentScore++;}
        if(questionFourGuess === 'big-l') {currentScore++;}
        if(questionFiveGuess === 'snoop-dogg') {currentScore++;}

        // apply currentScore to state
        this.setState({score: currentScore});
    }

    calculateNumAnswered () {
        let numAnswered = 0;
        const guesses = this.state.guesses;

        for(let i=0; i<guesses.length; i++) {
            if(guesses[i].guess.length > 0) {
                numAnswered++;
            }
        }
        this.setState({answered: numAnswered})
    }

    handleClick (evt) {
        evt.preventDefault();
        this.calculateScore();
        this.setState({submittingQuiz: true});

        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    render () {
        return (
            <div className="rap-quiz-container">
                
                <form
                className="rap-quiz-form">
                    <h1 id="start" className="rap-quiz-title">90s Golden Age of Rap Quiz</h1>
                    <div 
                    className="quiz-question-container"
                    onChange={(evt)=>{
                        this.setGuess(evt.target.id, evt.target.value);
                        this.calculateNumAnswered();
                    }}>
                        <p className="quiz-question-text">1. What year was Tupac killed?</p>
                        <input type="radio" id="1" value="1994" name="tupac"></input>
                        <label htmlFor="1994">1994</label><br></br>
                        <input type="radio" id="1" value="1996" name="tupac"></input>
                        <label htmlFor="1996">1996</label><br></br>
                        <input type="radio" id="1" value="1997" name="tupac"></input>
                        <label htmlFor="1997">1997</label><br></br>
                        <input type="radio" id="1" value="1998" name="tupac"></input>
                        <label htmlFor="1998">1998</label>
                    </div>

                    <div 
                    className="quiz-question-container"
                    onChange={(evt)=>{
                        this.setGuess(evt.target.id, evt.target.value);
                        this.calculateNumAnswered();
                    }}>
                        <p className="quiz-question-text">2. Dr. Dre was a part of this rap group:</p>
                        <input type="radio" id="2" value="AWA" name="group"></input>
                        <label htmlFor="AWA">AWA</label><br></br>
                        <input type="radio" id="2" value="APA" name="group"></input>
                        <label htmlFor="APA">APA</label><br></br>
                        <input type="radio" id="2" value="PWA" name="group"></input>
                        <label htmlFor="PWA">PWA</label><br></br>
                        <input type="radio" id="2" value="NWA" name="group"></input>
                        <label htmlFor="NWA">NWA</label>
                    </div>

                    <div 
                    className="quiz-question-container"
                    onChange={(evt)=>{
                        this.setGuess(evt.target.id, evt.target.value);
                        this.calculateNumAnswered();
                    }}>
                        <p className="quiz-question-text">3. What is the name of P diddy's record label?</p>
                        <input type="radio" id="3" value="bad-boy" name="record"></input>
                        <label htmlFor="bad-boy">Bad Boy Records</label><br></br>
                        <input type="radio" id="3" value="deathrow" name="record"></input>
                        <label htmlFor="deathrow">Deathrow Records</label><br></br>
                        <input type="radio" id="3" value="ruthless" name="record"></input>
                        <label htmlFor="ruthless">Ruthless Records</label><br></br>
                        <input type="radio" id="3" value="ruthless-death" name="record"></input>
                        <label htmlFor="ruthless-death">Ruthless Death Records</label>
                    </div>

                    <div 
                    className="quiz-question-container"
                    onChange={(evt)=>{
                        this.setGuess(evt.target.id, evt.target.value);
                        this.calculateNumAnswered();
                    }}>
                        <p className="quiz-question-text">4. Which rap artist is responsible for the song "Put it On"?</p>
                        <input type="radio" id="4" value="DMX" name="song"></input>
                        <label htmlFor="bad-boy">DMX</label><br></br>
                        <input type="radio" id="4" value="mobb-deep" name="song"></input>
                        <label htmlFor="mobb-deep">Mobb Deep</label><br></br>
                        <input type="radio" id="4" value="jay-z" name="song"></input>
                        <label htmlFor="jay-z">Jay-Z</label><br></br>
                        <input type="radio" id="4" value="big-l" name="song"></input>
                        <label htmlFor="big-l">Big L</label>
                    </div>
    
                    <div 
                    className="quiz-question-container"
                    onChange={(evt)=>{
                        this.setGuess(evt.target.id, evt.target.value);
                        this.calculateNumAnswered();
                    }}>
                        <p className="quiz-question-text">5. Who was Dr. Dre's sidekick?</p>
                        <input type="radio" id="5" value="pimp-c" name="sidekick"></input>
                        <label htmlFor="pimp-c">Pimp-C</label><br></br>
                        <input type="radio" id="5" value="c-murda" name="sidekick"></input>
                        <label htmlFor="c-murda">C-Murder</label><br></br>
                        <input type="radio" id="5" value="snoop-dogg" name="sidekick"></input>
                        <label htmlFor="snoop-dogg">Snoop Dogg</label><br></br>
                        <input type="radio" id="5" value="mc-ren" name="sidekick"></input>
                        <label htmlFor="mc-ren">MC Ren</label>
                    </div>
                    {/* <Link activeClass="active" to="start" spy={true} smooth={true}>Home</Link> */}
                    <button 
                    // disabled={this.state.answered === 5 ? false : true}
                    onClick={this.handleClick}
                    className="submit-button">Submit</button>
                </form>
                {this.state.submittingQuiz && <RapQuizScore
                score={this.state.score}
                resetQuiz={this.resetQuiz}
                />}
            </div>
        )
    }
    
}

export default RapQuiz;