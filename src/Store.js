import React, { createContext, useReducer } from 'react'

export const Store = createContext();

const initialState = {
    cursor: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CURSOR':
            return {
                ...state,
                cursor: action.payload
            };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <Store.Provider value={value}>{props.children}
    </Store.Provider>
};