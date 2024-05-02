import { createContext } from "react";
import { tapie_list } from "./tapie_list";

export const StoreContext = createContext(null);


export const StoreContextProvider = (props) => {
    const contextValue = {

        tapie_list
    }
    return (

        <StoreContext.Provider value={contextValue}>

            {props.children}
        </StoreContext.Provider>
    )


}