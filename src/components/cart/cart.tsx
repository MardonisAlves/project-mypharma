import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { Context } from "../../states/context/context";


const Carttext = styled.p`
font-size:12px;
font-weight:500;
color: #000;

z-index:1;
margin:-63px 0px 0px 23px;
`


const CartFaShoppingCart = styled(FaShoppingCart)`
color: #fff;
font-size:80px;
margin:-20px 20px 10px 0px;
`

const CartStyled = () => {

    const {items, total, calculateValue } = useContext(Context)

    useEffect(() => {
        calculateValue(items)
    },[items,calculateValue])

    return (
        <>
            <CartFaShoppingCart />
            <Carttext> R${total} </Carttext>
        </>
    )
}

export default CartStyled