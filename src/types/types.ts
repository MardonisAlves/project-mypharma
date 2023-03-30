import { ReactNode } from "react"

export  type ContextData = {
    allproducts:any[],
    getProducts: () => any
}

export type ProviderProps = {
    children:ReactNode
}