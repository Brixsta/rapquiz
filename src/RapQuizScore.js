import React from 'react';
import './RapQuizScore.css';

class RapQuizScore extends React.Component  {
    render () {
        return (
            <div className="rap-quiz-score-modal">
                
                <p className="quiz-finished-message">You scored {this.props.score} out of 5.</p>
                <button
                onClick={this.props.resetQuiz}
                className="try-again-button">Try Again</button>
            </div>
        )
    }
}

export default RapQuizScore;