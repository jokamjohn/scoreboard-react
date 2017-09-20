import React from 'react';

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            score: 0
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
                <button className="counter-action decrement" onClick={() => this.decrementScore()}> -</button>
                <div className="counter-score">{this.state.score}</div>
                <button className="counter-action increment" onClick={() => this.incrementScore()}> +</button>
            </div>
        </div>
    }
}


export default Counter