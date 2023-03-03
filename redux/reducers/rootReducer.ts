// import counterReducer from './counterReducer';
import gameReducer from 'redux/reducers/gameReducer'
import {playingGame, notPlayingGame}  from 'redux/actions/gameActions'
import store from 'redux/store'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    game: gameReducer
    // counter: counterReducer
});

const reducer = (state=store, action) => {
    if(action.type==="INCREMENT") {
        state.counter++
        return state
    }
    else if(action.type==="DECREMENT") {
        state.counter--
        return state
    }
    if (action.type === "PLAYING") {
        state.inplay == true
    }
    if (action.type === "NOTPLAYING") {
        state.inplay == false
    }
    // else if(action.type==="UPDATE_NAME") {
    //     state.name = action.payload.name
    //     return state
    // }
    else return state
}



export default rootReducer;