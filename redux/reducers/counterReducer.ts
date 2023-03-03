import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../actions/counterActions';
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

const reducer = (state, action) => {
    if(action.type==="INCREMENT") {
        state.counter++
        return state
    }
    else if(action.type==="DECREMENT") {
        state.counter--
        return state
    }
    // else if(action.type==="UPDATE_NAME") {
    //     state.name = action.payload.name
    //     return state
    // }
    else return state
}

export default reducer;
