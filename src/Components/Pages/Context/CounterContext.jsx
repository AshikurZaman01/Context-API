import React, { useState } from 'react';
import { createContext } from 'react';

export const Counter_Context = createContext();


const CounterContext = ({ children }) => {

    const [count, setCount] = useState(0);

    const value = {
        count, setCount
    }

    return (
        <Counter_Context.Provider value={value}>
            {children}
        </Counter_Context.Provider>
    );
};

export default CounterContext;