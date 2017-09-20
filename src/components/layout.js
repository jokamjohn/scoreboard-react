import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';
import Header from "./header";
import Player from "./player";

const Application = props => (
    <div className="scoreboard">
        <Header title={props.title}/>
        <Player name="John Kagga" score={32}/>
        <Player name="Cecilia Caroline" score={20}/>
    </div>
);

Application.propTypes = {
    title: PropTypes.string
};

Application.defaultProps = {
    title: "Scoreboard"
};


export default Application