import React from 'react';
import PropTypes from 'prop-types';
import Counter from "./counter";

const Player = props => (
    <div className="players">
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <Counter score={props.score}/>
        </div>
    </div>
);

Player.propTypes = {
    name: PropTypes.string.isRequired,
};


export default Player