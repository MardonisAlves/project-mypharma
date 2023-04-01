import { ReactNode } from "react"
import { Products } from "../components/cards/produts.interface"

export  type ContextData = {
    allproducts:Products[],
    getProducts: () => any
}

export type ProviderProps = {
    children:ReactNode
}

export type PropsProductsDetails = {
id:string
}