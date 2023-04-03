
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Input from '../input/input';
import { useState } from 'react';
import CheckBox from '../checkbox/checkbox';
import SelectCustom from './select-custom';
import { Products } from '../../cards/produts.interface';


const CheckBoxWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

type PropsSelect = {
    options:Products[]
}

export default function Filter({ options, ...rest }: PropsSelect) {

    const [pesquisar, setPesquisa] = useState<string>("")

    const handleInputChange = (pesquisa:string) => {
        setPesquisa(pesquisa)
    }

    const handleChangeMaiorPreco = () => {
        console.log('Maior Preco')
    }

    const handleChaneValue = (categoria:any) => {
        console.log(categoria)
    }

    return (
        <Container>
            <Row>
                <Col sm="12" md="4">
                <Input 
                label='Pesquisar'
                 type='text' 
                 handleChange={handleInputChange}
                 min="0"
                 name={pesquisar}
                 value={pesquisar}
                 />
                 
                 
                 </Col>
                 <Col sm="12" md="8">

                <SelectCustom options= {options} handleChaneValue={handleChaneValue} />

                <CheckBoxWrapper>
                <CheckBox 
                label='Maior Preço' type='checkbox'
                handleChangeMaiorPreco={handleChangeMaiorPreco}
                />  

                <CheckBox 
                label='Menor Preço' type='checkbox'
                handleChangeMaiorPreco={handleChangeMaiorPreco}
                />  
                </CheckBoxWrapper>
                             
                </Col>
            </Row>

        </Container>
    );
}


