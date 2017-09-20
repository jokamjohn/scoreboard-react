import React from 'react';
import PropTypes from 'prop-types';


class Counter extends React.Component {

    render() {
        return <div className="player-score">
            <div className="counter">
                <button className="counter-action decrement"> -</button>
                <div className="counter-score">{this.props.score}</div>
                <button className="counter-action increment"> +</button>
            </div>
        </div>
    }
}

Counter.propTypes = {
    score: PropTypes.number.isRequired,
};


export default Counter