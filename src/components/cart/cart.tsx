import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";



const Cart = styled.div``;

const Carttext = styled.p`
font-size:12px;
font-weight:500;
color: #fff;

z-index:1;
margin:-60px -20px -10px 25px;
`


const CartFaShoppingCart = styled(FaShoppingCart)`
color: #309209;
font-size:80px;

margin-top:-40px;
`

const CartStyled = () => {
    return(
        <Cart>
            <CartFaShoppingCart  />
            <Carttext>R$45.90</Carttext>
        </Cart>
    )
}

export default CartStyled