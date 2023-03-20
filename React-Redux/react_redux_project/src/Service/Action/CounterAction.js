import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from "../Constants/CounterConstants"

export const incrementAction = () => {
    return {
        type: INCREMENT_COUNTER
    };
};

export const decrementAction = () => {
    return {
        type: DECREMENT_COUNTER,
    };
};

export const resetAction = () => {
    return {
        type: RESET_COUNTER,
    };
};