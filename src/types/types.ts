import { ReactNode } from "react"
import { Theme } from "react-toastify"
import { Products } from "../components/cards/produts.interface"
import { Category } from "../components/filterproducts/category.interface"
import { Items } from "../components/cards/itens.interface"

export  type ContextData = {
    allproducts:Products[],
    product: Products[],
    filter: Products[],
    lowestprice:Products[],
    items:Items[],
    total: number,
    category: Category[],
    getItems:() => any,
    getProducts: (id:string) => any,
    getProduct: (id:string) => any,
    hanhlesaveItensStorage: (items:Items) => any,
    calculateValue: (items:Items[]) => any,
    notify: (message:string, theme:Theme) => any,
    deleteItem: (index:number) => any
    getCategory: () => any,
    filterProducts: (name:string) => any,
    setAllproducts: (products:Products[]) => any,
    getProductsLowestPrice: () => any
}

export type ProviderProps = {
    children:ReactNode
}

export type PropsProductsDetails = {
id:string
}