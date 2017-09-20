import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score: props.score
        }
    }

    incrementScore() {
        const score = (this.state.score + 1);
        this.setState({
            score: score
        })
    };

    decrementScore() {
        const score = (this.state.score - 1);
        this.setState({
            score: score
        })
    }

    render() {
        return <div className="player-score">
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.decrementScore()}>-</button>
                <div className="counter-score">{this.state.score}</div>
                <button className="counter-action increment" onClick={() => this.incrementScore()}>+</button>
            </div>
        </div>
    }
}

Counter.propTypes = {
    score: PropTypes.number.isRequired
};


export default Counter