import { createStore } from 'redux';
import { counterReducer } from './Service/Reducer/CounterReducer';

export const store = createStore(counterReducer);