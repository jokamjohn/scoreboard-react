import React from 'react';

const Player = props => (
    <div className="players">
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <div className="player-score">
                <div className="counter">
                    <button className="counter-action decrement"> -</button>
                    <div className="counter-score">{props.score}</div>
                    <button className="counter-action increment"> +</button>
                </div>
            </div>
        </div>
    </div>
);

export default Player