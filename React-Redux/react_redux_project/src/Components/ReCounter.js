import React from 'react';
import { useSelector } from 'react-redux';

const ReCounter = () => {

    const click = useSelector(state => state.click);
    const count = useSelector(state => state.count);
    return (
        <div>
            <span>Count: {count}</span>
            <span>Click: {click}</span>
        </div>
    );
};

export default ReCounter;