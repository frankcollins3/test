import {playingGame, notPlayingGame}  from 'redux/actions/gameActions'


const gameReducer = (state, action) => {

    if (action.type === "PLAYING_GAME") {
        state.inplay = true
    }
    if (action.type === "NOT_PLAYING_GAME") {
        state.inplay = false
    }

    else return state
}

export default gameReducer;

// const counterReducer = (state = {value: 0}, action) => {
//     switch (action.type) {
//         case INCREMENT_COUNTER:
//             return {...state, value: state.value + 1};
//         case DECREMENT_COUNTER:
//             return {...state, value: state.value - 1};
//         default:
//             return {...state};
//     }
// };