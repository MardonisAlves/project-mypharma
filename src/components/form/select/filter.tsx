
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Input from '../input/input';
import CheckBox from '../checkbox/checkbox';
import SelectCustom from './select-custom';
import { useContext, useState } from 'react';
import { Context } from '../../../states/context/context';



const CheckBoxWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export default function FilterCustom() {

    const {
        category, 
        filter, 
        lowestprice,
        biggesprice,
        getProducts, 
        filterProducts, 
        setAllproducts,
        getProductsLowestPrice,
        getProductsBiggesPrice
    } = useContext(Context)
    
    
    
    const [name, setName] = useState<string>("pesquisar")
  
    
    const handleInputChange = (pesquisa:string) => {
            setName(pesquisa)
            filterProducts(pesquisa)
            setAllproducts(filter)
           
    }

    const handleChangeLowestPrice = async () => {
       await getProductsLowestPrice()
        setAllproducts(lowestprice)
    }


    const handleChangeBiggesPrice = async () => {
       await getProductsBiggesPrice()
        setAllproducts(biggesprice)
        
    }


    const handleChaneValue = async (categoria:string) => {
       await getProducts(categoria)

    }

    return (
        <Container>
            <Row>
                <Col sm="12" md="4">
                <Input 
                label='Pesquisar'
                 type='text' 
                 handleChange={handleInputChange}
                 name="pesquisar"
                 value={name}
                 />
                 
                 
                 </Col>
                 <Col sm="12" md="8">

                <SelectCustom 
                options= {category} 
                handleChaneValue={handleChaneValue} 
                />

                <CheckBoxWrapper>
                <CheckBox 
                label='Menor Preço' type='checkbox'
                handleChangeMaiorPreco={handleChangeLowestPrice}
                />  

                <CheckBox 
                label='Maior Preço' type='checkbox'
                handleChangeMaiorPreco={handleChangeBiggesPrice}
                />  
                </CheckBoxWrapper>
                             
                </Col>
            </Row>

        </Container>
    );
}


