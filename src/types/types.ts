import { ReactNode } from "react"

export  type ContextData = {
    products:any[],
    listProductsCallback: () => any
}

export type ProviderProps = {
    children:ReactNode
}