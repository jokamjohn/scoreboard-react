import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import PlayerReducer from './reducers/player'
import {createStore} from 'redux';
import Scoreboard from './containers/Scoreboard';
import PLAYERS from "./data/Players";

const store = createStore(
    PlayerReducer
);

ReactDOM.render(
    <Provider store={store}>
        <Scoreboard initialPlayers={PLAYERS}/>
    </Provider>,
    document.getElementById('root'));
