import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/layout';
import PLAYERS from "./components/data";

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('root'));
