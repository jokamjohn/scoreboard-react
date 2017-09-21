import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as PlayerActionCreators from '../actions/player';
import '../css/styles.css';
import Header from "../components/Header";
import Player from "../components/Player";
import AddPlayerForm from "../components/AddPlayerForm";

class Scoreboard extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        players: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired
        })).isRequired
    };

    static defaultProps = {
        title: "Scoreboard"
    };

    render() {

        const {dispatch, players} = this.props;
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

        const playerComponents = players.map((player, index) => (
            <Player
                key={player.id}
                index={index}
                {...player}
                updatePlayerScore={updatePlayerScore}
                removePlayer={removePlayer}
            />
        ));

        return (
            <div className="scoreboard">
                <Header title={this.props.title} players={players}/>
                {playerComponents}
                <AddPlayerForm addPlayer={addPlayer}/>
            </div>
        )
    }
}

/**
 * Map the state into props.
 * @param state
 */
const mapStateToProps = state => (
    {
        players: state
    }
);

export default connect(mapStateToProps)(Scoreboard)