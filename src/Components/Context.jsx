import React, { createContext, useState } from 'react';


const Context = createContext();

const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <Context.Provider value={{ sidebar, setSidebar }}>
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };
export default ContextProvider;
