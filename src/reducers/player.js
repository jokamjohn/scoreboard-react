import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
    {
        id: 1,
        name: "John Kagga",
        score: 40
    },
    {
        id: 2,
        name: "Cecilia Caroline",
        score: 20
    },
    {
        id: 3,
        name: "Mark Musa",
        score: 25
    },
];

export default function (state = initialState, action) {

    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            const playersArrayLength = state.length;
            const playerId = playersArrayLength ? (state[playersArrayLength - 1].id) + 1 : 1;
            return [
                ...state,
                {
                    id: playerId,
                    name: action.name,
                    score: 0
                }
            ];

        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return state.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score
                    }
                }
                return player
            });

        default:
            return state;
    }

}