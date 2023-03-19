# REACT_REDUX_PLAYLIST

## 1. Redux Introduction

### 1.1 What is Redux & Why Redux?
- A small JS Library
- for managing medium/large amount of states globally in your app.
- useContext + useReducer hook ideas will help you to understand redux.

### 1.2 Some common terms related to redux
- React-redux: redux is used with some common packages such as react-redux
- Redux-toolkit: recommended way to write redux logic for building redux app easily and avoiding mistakes.
- Redux devtools extension: helps to debug redux app easily.

### 1.3 How Redux works?
- Define state.
- Dispatch and Action.
- Reducer update state based on Action Type.
- Store will update the view.

<img width="700" alt="Screenshot 2022-05-17 at 19 37 57" src="https://user-images.githubusercontent.com/28184926/168863620-b2ffa708-8c0b-4b90-b81d-45212248b055.png">


## 2. Redux Install Project
```js
    1. npm init -y
    2. npm install redux
    3. npm i redux-thunk
    *** React-Redux
    1. npm install redux react-redux --save
```


## 3. Redux Core Concept

- State: consider what states you want to manage.
```js
// define states
count: 0;
const initialState = { count: 0 };
const initialState2 = { users: [{ name: "anisul islam" }] };
```

- Action: actions are object that have 2 things - type & payload
```js
// dispatch(Action)
function incrementAction() {
    return {
        type: "INCREMENT",
    }
};
function decrementAction() {
    return {
        type: "DECREMENT",
    }
};
function addUserAction() {
    return {
        type: "ADD_USER",
        payload: { name: "rafiqul islam", }
    }
};
```

- Reducer: reducers are pure function which handles all logic. it updates the state depends on action type
```js
// crate reducer
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
```

- Store: It holds the states. It has 3 important methods- getState(), dispatch(), suscribe()
```js
// 4. store - getState(), dispatch(), subscribe()
// create store
const store = createStore(counterReducer); //const { createStore } = require("redux");

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
```


## 3. Complete Counter App
- example of counter app useing JS and Redux
```js
const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialCounterState = {
  count: 0,
};

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
```

## 4. Payload in action
- example
```js

const { createStore } = require("redux");

// Const Value
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// State
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
};

// dispatch(Action)
const getProductAction = () => {
    return {
        type: GET_PRODUCTS,
    };
};
const addProductAction = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product,
    };
};

// Reducer
const productsReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            const newState = {
                ...state,
            };
            return newState;
        }
        case ADD_PRODUCTS: {
            const products = [...state.products, action.payload];
            const numberOfProducts = state.numberOfProducts + 1;
            const newState = {
                products, numberOfProducts,
            };
            return newState;
        };
        default:
            return state;
    };
};

// Store
const store = createStore(productsReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch
store.dispatch(addProductAction("pen"));
store.dispatch(addProductAction("pencil"));
store.dispatch(addProductAction("Book"));
store.dispatch(getProductAction());
```