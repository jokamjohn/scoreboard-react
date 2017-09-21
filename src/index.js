import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './containers/Scoreboard';
import PLAYERS from "./data/Players";

ReactDOM.render(<Scoreboard initialPlayers={PLAYERS}/>, document.getElementById('root'));
