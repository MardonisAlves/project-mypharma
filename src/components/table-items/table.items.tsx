import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { BsFillTrash3Fill, BsArrowLeftSquareFill } from 'react-icons/bs'
import { useContext, useEffect } from "react";
import { Context } from "../../states/context/context";
import AlertNotification from "../alert/alert";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";



const TableStyled = styled(Table)`
margin: 20px 0px;
`;

const ThStyled = styled.th`
text-align: center;
`
const TdStyled = styled.td`
text-align: center;
`

const TitleH3 = styled.h3`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function TableItems() {
    const { items, deleteItem, getItems, calculateValue, notify } = useContext(Context)


    const removeItemProducts = async(index:number) => {
       await deleteItem(index)
       await notify('Item deletado com sucesso!', 'light')
       await getItems()
    }
    
    useEffect(() => {
         calculateValue(items)
    },[items, calculateValue])


    return (
        <>
            <TitleH3> 
                <Link to={"/"}>
                <BsArrowLeftSquareFill /> 
                </Link>
                Lista de produtos
            </TitleH3>
            <TableStyled responsive bordered hover>
                {items !== undefined ? 
                <thead>
                    <tr>
                        <ThStyled>Nome</ThStyled>
                        <ThStyled>valor/uni</ThStyled>
                        <ThStyled>Quantidade</ThStyled>
                        <ThStyled>Action</ThStyled>
                    </tr>
                </thead>
                
             : ""}
                {items !== undefined ?
                    items.map((item, index) => {
                        return (
                            <tbody key={item.id}>
                                <tr>
                                    <TdStyled> {item.name} </TdStyled>
                                    <TdStyled> {item.value} </TdStyled>
                                    <TdStyled> {item.qtd} </TdStyled>
                                    <TdStyled>
                                        <BsFillTrash3Fill 
                                        onClick={() => removeItemProducts(index)}
                                        color="red" 
                                        />
                                    </TdStyled>
                                </tr>
                            </tbody>
                        )
                    })

                    : <AlertNotification />}
            </TableStyled>
        <ToastContainer />
        </>
    )
}