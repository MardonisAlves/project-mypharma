import { createContext } from "react";
import { ContextData, ProviderProps } from "../types/types";
import useMemoHook from "./usememo";


const ContextPharma = createContext({} as ContextData);

const ContextPharmaProvider = ({children}:ProviderProps) => {
    const {useMemohook} = useMemoHook()

   

    return(
        <ContextPharma.Provider value={useMemohook}>
            {children}
        </ContextPharma.Provider>
    )
}

export default ContextPharmaProvider