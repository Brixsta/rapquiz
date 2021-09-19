import React from 'react';
import "./SubmitButton.css";

class SubmitButton extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (evt) {
        evt.preventDefault();
        this.props.handleClick();
    }

    render () {
        return (
            <div>
                <button
                    onClick={this.handleClick}
                    className="submit-button">Submit
                </button>
            </div>
        )
    }
}

export default SubmitButton;