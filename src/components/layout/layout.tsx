import { ReactNode } from "react"
import { Container } from "./container/container"
import Footer from "./footer/footer"
import Header from "./header/header"
import Logo from "./logo/logo"
import Nav from "./nav/nav"
import NavLink from "./navlink/navlink"

type ChildrenComponente = {
    children: ReactNode
}

export default function Layout({ children }: ChildrenComponente) {
    return (
        <>
            <Header>
                <Logo>Minha Logo</Logo>
                <Nav>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="#">Sobre</NavLink>
                    <NavLink href="#">Contato</NavLink>
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