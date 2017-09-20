import React from 'react';

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            score: 0
        }
    }

    render() {
        return <div className="player-score">
            <div className="counter">
                <button className="counter-action decrement"> -</button>
                <div className="counter-score">{this.state.score}</div>
                <button className="counter-action increment"> +</button>
            </div>
        </div>
    }
}


export default Counter