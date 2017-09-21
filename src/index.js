import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './containers/scoreboard';
import PLAYERS from "./components/data";

ReactDOM.render(<Scoreboard initialPlayers={PLAYERS}/>, document.getElementById('root'));
