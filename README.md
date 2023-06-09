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
    *** React-Redux
    1. npm install redux react-redux --save

    *** Redux_Middleware
    1. npm install redux-logger
    2. npm i redux-thunk
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


## 4. Complete Counter App
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

## 5. Payload in action
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

## 6. Multiple Reducers & combine multiple reducers
- example
```js
const { createStore, combineReducers } = require("redux");

// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

// product states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// cart states
const initialCartState = {
  cart: ["sugar"],
  numberOfProducts: 1,
};

// product actions
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

// cart actions
const getCartAction = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCartAction = (product) => {
  return {
    type: ADD_CART_ITEMS,
    payload: product,
  };
};

// Products Reducer
const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

// Cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

// Combine All Reducers
const rootReduer = combineReducers({
  productR: productsReducer,
  cartR: cartReducer,
});

// Create Store
const store = createStore(rootReduer);

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
store.dispatch(getProductAction());
store.dispatch(addProductAction("pen"));
store.dispatch(getCartAction());
store.dispatch(addCartAction("salt"));
```

## 7. Middleware
- For extra features middlepoint of dispatching an action and handledby reducer, performing async tasks, login etc.
- Example of popular redux middlewares packages: redux-logger, redux-thunk
- example
```js
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// product states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// product actions
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

const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const store = createStore(productsReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("pen"));
```

## 8. React-Redux-Counter-Project
- Install:
```js
*** Install
1. npm i redux
2. npm i react-redux
```

### App.js
```js
    <div className="App">
      <Counter />
      <ReCounter />
    </div>
```
### Folder
```js
- Service
    - initialState => InitialStateCounter.js
    - constants => counterConstants.js
    - actions => counterAction.js
    - reducers => counterReducer.js

- src
    - store.js
```

```js
*** State
export const InitialStateCounter = {
    count: 0,
    click: 0,
};


*** Constants
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";


*** Action
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


*** Reducer
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
    };
};


*** Store
export const store = createStore(counterReducer);
```
### Index.js
```js
import { Provider } from 'react-redux';
import { store } from './store';

  <Provider store={store}>
    <App />
  </Provider>
```

### Useing Redux Action in React
```js
  *** useSelector();
    const count = useSelector(state => state.count);
    const click = useSelector(state => state.click);

    *** useDispatch();
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementAction())
    };
    const handleDecrement = () => {
        dispatch(decrementAction())
    };
    const handleReset = () => {
        dispatch(resetAction());
    };
```