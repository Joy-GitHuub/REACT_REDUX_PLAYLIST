import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from "../Constants/CounterConstants";
import { InitialStateCounter } from "../InitialState/InitialStateCounter.";

const init = InitialStateCounter;
export const counterReducer = (state = init, { type }) => {
    switch (type) {
        case INCREMENT_COUNTER: {
            const click = state.click + 1;
            const count = state.count + 1;
            const newState = { ...state, click, count }
            return newState;
        };
        case DECREMENT_COUNTER: {
            const click = state.click + 1;
            const count = state.count - 1;
            const newState = { ...state, click, count }
            return newState;
        };
        case RESET_COUNTER: {
            const click = 0;
            const count = 0;
            const newState = { ...state, click, count }
            return newState;
        };

        default:
            return state;
    }
}