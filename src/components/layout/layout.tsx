import { ReactNode } from "react"
import CartStyled from "../cart/cart"
import { Container } from "./container/container"
import Footer from "./footer/footer"
import Header from "./header/header"
import {Logo, Img} from "./logo/logo"
import Nav from "./nav/nav"
import NavLink from "./navlink/navlink"

type ChildrenComponente = {
    children: ReactNode
}

export default function Layout({ children }: ChildrenComponente) {
    return (
        <>
            <Header>
                <Logo>
                    <NavLink href="/">
                    <Img src="/logo.png"/>
                    </NavLink>
                </Logo>
                <Nav>
                    <NavLink>
                        <CartStyled></CartStyled>
                    </NavLink>
                </Nav>
            </Header>
            {children}
            <Footer>
                <Container>
                    <p>© 2023 Minha Marca. Todos os direitos reservados.</p>
                </Container>
            </Footer>
        </>

    )
}