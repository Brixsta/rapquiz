import React from 'react';
import './RapQuiz.css';
import RapQuizScore from './RapQuizScore';
import SubmitButton from './SubmitButton';
import RadioButton from './RadioButton';

class RapQuiz extends React.Component {

    constructor () {
        super();

        this.state = {
            questions: ["1. What year was Tupac killed?", "2. Dr. Dre was a part of this rap group:",
            "3. What is the name of P diddy's record label?",
            `4. Which rap artist is responsible for the song "Put it On"?`, "5. Who was Dr. Dre's sidekick?"],
            guesses: [{number: 1, guess: ''}, {number: 2, guess: ''}, {number: 3, guess:''}, 
            {number: 4, guess: ''}, {number: 5, guess: ''}],
            score: 0,
            submittingQuiz: false
        }
        this.setGuess = this.setGuess.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.resetQuiz = this.resetQuiz.bind(this);
    }

    resetQuiz () {
        // grab all questions by className
        let class1 = Array.from(document.getElementsByClassName('1'));
        let class2 = Array.from(document.getElementsByClassName('2'));
        let class3 = Array.from(document.getElementsByClassName('3'));
        let class4 = Array.from(document.getElementsByClassName('4'));
        let class5 = Array.from(document.getElementsByClassName('5'));

        // visually reset form, react doesn't count this as uncheck per radio btn
        document.getElementsByClassName('rap-quiz-form')[0].reset();

        // reset guesses
        this.setState({submittingQuiz: false, guesses: [{number: 1, guess: ''}, 
        {number: 2, guess: ''}, {number: 3, guess:''}, 
        {number: 4, guess: ''}, {number: 5, guess: ''}]});

        // loop through radio btns, to uncheck them
        for(let i=0; i<4; i++) {
            class1[i].checked = false;
            class2[i].checked = false;
            class3[i].checked = false;
            class4[i].checked = false;
            class5[i].checked = false;
        }
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
        if(questionThreeGuess === 'Bad Boy Records') {currentScore++;}
        if(questionFourGuess === 'Big L') {currentScore++;}
        if(questionFiveGuess === 'Snoop Dogg') {currentScore++;}

        // apply currentScore to state
        this.setState({score: currentScore});
    }

    handleClick () {

        let class1 = Array.from(document.getElementsByClassName('1'));
        let class2 = Array.from(document.getElementsByClassName('2'));
        let class3 = Array.from(document.getElementsByClassName('3'));
        let class4 = Array.from(document.getElementsByClassName('4'));
        let class5 = Array.from(document.getElementsByClassName('5'));

        // make sure no questions are left unanswered
        let class1Check = class1.every(item => item.checked === false);
        let class2Check = class2.every(item => item.checked === false);
        let class3Check = class3.every(item => item.checked === false);
        let class4Check = class4.every(item => item.checked === false);
        let class5Check = class5.every(item => item.checked === false);

        if(class1Check || class2Check || class3Check || class4Check || class5Check) {
           return alert('Please answer all the questions.');
        }

        // user submits, score is calculated
        this.calculateScore();
        this.setState({submittingQuiz: true});
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    render () {
        return (
            <div className="rap-quiz-container">
                
                <form
                className="rap-quiz-form">
                    <h1 id="start" className="rap-quiz-title">90s Golden Age of Rap Quiz</h1>
                    <RadioButton 
                        currentQuestion={this.state.questions[0]}
                        setGuess={this.setGuess}
                        id={1}
                        name={'tupac'}
                        values={['1994', '1996', '1997', '1998']}
                        class={'1'}
                    />
                    <RadioButton 
                        currentQuestion={this.state.questions[1]}
                        setGuess={this.setGuess}
                        id={2}
                        name={'group'}
                        values={['AWA', 'APA', 'PWA', 'NWA']}
                        class={'2'}
                    />
                    <RadioButton 
                        currentQuestion={this.state.questions[2]}
                        setGuess={this.setGuess}
                        id={3}
                        name={'record'}
                        values={['Bad Boy Records', 'Deathrow Records', 'Ruthless Records', 'Ruthless Death Records']}
                        class={'3'}
                    />
                    <RadioButton 
                        currentQuestion={this.state.questions[3]}
                        setGuess={this.setGuess}
                        id={4}
                        name={'song'}
                        values={['DMX', 'Mobb Deep', 'Jay-Z', 'Big L']}
                        class={'4'}
                    />
                    <RadioButton 
                        currentQuestion={this.state.questions[4]}
                        setGuess={this.setGuess}
                        id={5}
                        name={'sidekick'}
                        values={['Pimp-C', 'C-Murder', 'Snoop Dogg', 'MC Ren']}
                        class={'5'}
                    />
                    <SubmitButton
                        handleClick={this.handleClick}
                        answered={this.state.answered}
                    />
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