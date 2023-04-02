import { ReactNode } from "react"
import { Theme } from "react-toastify"
import { Products } from "../components/cards/produts.interface"
import { Items } from "../interfaces/itens.interface"

export  type ContextData = {
    allproducts:Products[],
    product: Products[],
    items:Items[],
    total: number,
    getItems:() => any,
    getProducts: () => any,
    getProduct: (id:string) => any,
    hanhlesaveItensStorage: (items:Items) => any,
    calculateValue: (items:Items[]) => any,
    notify: (message:string, theme:Theme) => any,
    deleteItem: (index:number) => any
}

export type ProviderProps = {
    children:ReactNode
}

export type PropsProductsDetails = {
id:string
}