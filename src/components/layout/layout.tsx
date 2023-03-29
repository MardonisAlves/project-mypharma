import { ReactNode } from "react"
import Header from "./header/header"
import Logo from "./logo/logo"

type ChildrenComponente ={
    children:ReactNode
}

export default function Layout({children}:ChildrenComponente){
    return(
        <>
        <Header>
            <Logo>Minha Logo</Logo>
        </Header>
        {children}
        </>
        
    )
}