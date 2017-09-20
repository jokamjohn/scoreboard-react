import React from 'react';

const Counter = props => (
    <div className="player-score">
        <div className="counter">
            <button className="counter-action decrement"> -</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment"> +</button>
        </div>
    </div>
);

export default Counter