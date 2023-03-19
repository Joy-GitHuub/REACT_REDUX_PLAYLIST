const { createStore } = require("redux");

const initialState = { count: 0 };
const initialState2 = { users: [{ name: "anisul islam" }] };

function incrementAction() {
    return {
        type: "INCREMENT",
    }
}
function decrementAction() {
    return {
        type: "DECREMENT",
    }
}
function addUserAction() {
    return {
        type: "ADD_USER",
        payload: { name: "rafiqul islam", }
    }
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": {
            const newState = {
                ...state,
                count: state.count + 1,
            };
            return newState;
        };
        case "DECREMENT": {
            const newState = {
                ...state,
                count: state.count - 1,
            }
            return newState;
        }
        default:
            return state;
    }
};

// 4. store - getState(), dispatch(), subscribe()

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());