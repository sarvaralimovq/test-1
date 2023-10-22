import { createContext, useState } from "react";

const Context = createContext()

function Provider ({children}){
    const [login, setLogin] = useState(0)
    return(
        <Context.Provider value={{login,setLogin}}>
            {children}
        </Context.Provider>
    )
}
export {Context,Provider}