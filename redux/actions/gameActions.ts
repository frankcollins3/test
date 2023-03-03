//Action Types
// export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
// export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const PLAYING_GAME = "PLAYING_GAME"
export const NOT_PLAYING_GAME = "NOT_PLAYING_GAME"

export const SET_PARENTS = "SET_PARENTS"
export const WIN_STREAK = "WIN_STREAK"
export const RESET_WIN = "RESET_WIN"

export const WRONG_GUESS = "WRONG_GUESS"
export const GUESS_RESET = "GUESS_RESET"

// Action Creators

// export const playingGame = () => {
//     type: PLAYING_GAME
// }

export const playingGame = {
    type: "PLAYING_GAME"
}

export const notPlayingGame = () => {
    type: NOT_PLAYING_GAME
}

// //Action Creator
// export const incrementCounter = () => ({
//    type: INCREMENT_COUNTER
// });

// export const decrementCounter = () => ({
//     type: DECREMENT_COUNTER
// });
