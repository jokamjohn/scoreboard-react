import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';

const Application = props => (
    <div className="scoreboard">
        <div className="header">
            <h1>{props.title}</h1>
        </div>

        <div className="players">
            <div className="player">
                <div className="player-name">
                    John Kagga
                </div>
                <div className="player-score">
                    <div className="counter">
                        <button className="counter-action decrement"> - </button>
                        <div className="counter-score">32</div>
                        <button className="counter-action increment"> + </button>
                    </div>
                </div>
            </div>

            <div className="player">
                <div className="player-name">
                    Cecilia Caroline
                </div>
                <div className="player-score">
                    <div className="counter">
                        <button className="counter-action decrement"> - </button>
                        <div className="counter-score">20</div>
                        <button className="counter-action increment"> + </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

Application.propTypes = {
  title: PropTypes.string
};

Application.defaultProps = {
  title: "Scoreboard"
};

export default Application