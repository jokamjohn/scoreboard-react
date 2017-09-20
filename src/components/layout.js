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

    onScoreChanged(index, delta) {
        const players = this.state.players.slice();
        players[index].score += delta;
        this.setState({
            players: players
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title={this.props.title}/>
                {this.state.players.map((player, index) =>
                    <Player
                        key={player.id}
                        {...player}
                        onScoreChanged={(delta) => this.onScoreChanged(index, delta)}
                    />)}
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