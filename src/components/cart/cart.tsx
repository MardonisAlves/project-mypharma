import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";


const Carttext = styled.p`
font-size:10px;
font-weight:500;
color: #fff;

z-index:1;
margin:-53px 0px 0px 16px;
`
                                                

const CartFaShoppingCart = styled(FaShoppingCart)`
color: #309209;
font-size:60px;
margin:-20px 20px 10px 0px;
`

const CartStyled = () => {
    return(
        
            <>
            <CartFaShoppingCart />
            <Carttext>R$45.90</Carttext>
            </>
        
    )
}

export default CartStyled