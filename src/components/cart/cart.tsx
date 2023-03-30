import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";


const Carttext = styled.p`
font-size:12px;
font-weight:400;
color: #fff;

z-index:999;
position:absolute;
top:6%;
left:86%;
transform: translate(-0%, -10%);
`
                                                

const CartFaShoppingCart = styled(FaShoppingCart)`
color: #309209;
font-size:80px;

`

const CartStyled = () => {
    return(
        
            <><CartFaShoppingCart /><Carttext>R$45.90</Carttext></>
        
    )
}

export default CartStyled