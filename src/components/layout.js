import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';
import Header from "./header";
import Player from "./player";

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            players: this.props.initialPlayers
        }
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title={this.props.title}/>
                {this.state.players.map(player => <Player key={player.id} {...player}/>)}
            </div>
        )
    }
}


Application.propTypes = {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    })).isRequired
};

Application.defaultProps = {
    title: "Scoreboard"
};


export default Application