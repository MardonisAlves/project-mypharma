import CardDetails from "../components/cards/card.details";
import { Container, Main } from "../components/layout/container/container";
import Layout from "../components/layout/layout";

export default function ProducDetails() {
    return (
        <Layout>
            <Main>
                <Container>
                    <CardDetails/>
                </Container>
            </Main>
        </Layout>
    )
}