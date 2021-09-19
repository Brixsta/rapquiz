import React from 'react';
import './RadioButton.css';

class RadioButton extends React.Component {
    render () {
        return (
            <div 
                className="quiz-question-container"
                onChange={(evt)=>{
                    this.props.setGuess(evt.target.id, evt.target.value);
                }}>
                    <p className="quiz-question-text">{this.props.currentQuestion}</p>
                    <input className={this.props.class} type="radio" id={this.props.id} value={this.props.values[0]} name={this.props.name}></input>
                    <label htmlFor={this.props.values[0]}>{this.props.values[0]}</label><br></br>
                    <input className={this.props.class} type="radio" id={this.props.id} value={this.props.values[1]} name={this.props.name}></input>
                    <label htmlFor={this.props.values[1]}>{this.props.values[1]}</label><br></br>
                    <input className={this.props.class} type="radio" id={this.props.id} value={this.props.values[2]} name={this.props.name}></input>
                    <label htmlFor={this.props.values[2]}>{this.props.values[2]}</label><br></br>
                    <input className={this.props.class} type="radio" id={this.props.id} value={this.props.values[3]} name={this.props.name}></input>
                    <label htmlFor={this.props.values[3]}>{this.props.values[3]}</label>
            </div>
        )
    } 
}

export default RadioButton;