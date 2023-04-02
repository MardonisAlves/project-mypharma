import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { BsFillTrash3Fill } from 'react-icons/bs'
import { useContext } from "react";
import { Context } from "../../states/context/context";

const TableStyled = styled(Table)`
margin: 100px 0px;
`;

const ThStyled = styled.th`
text-align: center;
`
const TdStyled = styled.td`
text-align: center;
`


export default function TableItems() {

    const { items } = useContext(Context)
    
    return (
        <>
            <TableStyled responsive>
                <thead>
                    <tr>
                        <ThStyled>Nome</ThStyled>
                        <ThStyled>valor/uni</ThStyled>
                        <ThStyled>Quantidade</ThStyled>
                        <ThStyled>Action</ThStyled>
                    </tr>
                </thead>
                {items !== undefined ?
                    items.map((item) => {
                        return (
                            <tbody key={item.id}>
                                <tr>
                                    <TdStyled> {item.name} </TdStyled>
                                    <TdStyled> {item.value} </TdStyled>
                                    <TdStyled> {item.qtd} </TdStyled>
                                    <TdStyled>
                                        <BsFillTrash3Fill 
                                        color="red" 
                                        />
                                    </TdStyled>
                                </tr>
                            </tbody>
                        )
                    })

                    : ""}
            </TableStyled>

        </>
    )
}