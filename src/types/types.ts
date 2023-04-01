import { ReactNode } from "react"
import { Products } from "../components/cards/produts.interface"

export  type ContextData = {
    allproducts:Products[],
    product: Products[],
    getProducts: () => any,
    getProduct: (id:string) => any
}

export type ProviderProps = {
    children:ReactNode
}

export type PropsProductsDetails = {
id:string
}