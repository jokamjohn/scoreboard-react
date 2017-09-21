import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import PlayerReducer from './reducers/player'
import {createStore} from 'redux';
import Scoreboard from './containers/Scoreboard';

const store = createStore(
    PlayerReducer,
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store={store}>
        <Scoreboard/>
    </Provider>,
    document.getElementById('root'));
