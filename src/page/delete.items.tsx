import { Container, Main } from "../components/layout/container/container";
import Layout from "../components/layout/layout";
import TableItems from "../components/table-items/table.items";

export default function DeleteItems() {
    return (
        <Layout>
            <Main>
                <Container>
                   <TableItems />
                </Container>
            </Main>
        </Layout>
    )
}