### State
- count ------>>>>> 0
- Click ----->>>>> 0

### Action
- increment, decrement, reset,

### Reducers
- increment => count, click => count + 1, click + 1  
- decrement => count, click => count - 1, click + 1  
- reset => count, click => count= 0, click= 0,  

### Store
- create Store => const store = createStore();
- index.js wrap using => provider -> store; 
- providing store in react
- use store

### Useing React
- useSelect(state => state."state_name");
- useDispatch( ) -> store in a variable and use any action this hare. 


## Folder
- Service
    - initialState => InitialStateCounter.js
    - constants => counterConstants.js
    - actions => counterAction.js
    - reducers => counterReducer.js

- src
    - store.js