import React from 'react';
import '../css/styles.css';
import Header from "./header";
import Player from "./player";

const Application = props => (
    <div className="scoreboard">
        <Header title={props.title}/>
        <Player name="John Kagga" score="32"/>
        <Player name="Cecilia Caroline" score="20"/>
    </div>
);


export default Application