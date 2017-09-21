import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = (name, id) => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name,
        id
    }
};

export const removePlayer = index => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        index
    }
};

export const updatePlayerScore = (index, score) => {
    return {
        type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    }
};