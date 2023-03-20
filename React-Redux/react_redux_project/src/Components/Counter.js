import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from './../Service/Action/CounterAction';

const Counter = () => {
    const count = useSelector(state => state.count);
    const click = useSelector(state => state.click);

    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementAction())
    };

    const handleDecrement = () => {
        if (count === 0) {
            return;
        }
        dispatch(decrementAction())
    };
    const handleReset = () => {
        dispatch(resetAction());
    };

    return (
        <div>
            <h3>Counter APP</h3>

            <h4>Count: {count}</h4>
            <h4>Click: {click}</h4>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;