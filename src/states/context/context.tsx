import { createContext } from "react";
import useMemoHook from "../usememo/usememo";
import {ContextData, ProviderProps } from './../../types/types'


export const Context = createContext({} as ContextData);
export function ContextProvider({ children }: ProviderProps) {
const  {hookMemo} = useMemoHook()



    return (
        <Context.Provider
            value={hookMemo}>
            {children}
        </Context.Provider>
    )
}

