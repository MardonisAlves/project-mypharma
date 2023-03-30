import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import StyledButton from '../button/button';
import Input from '../form/input';
import { BsPlusLg } from "react-icons/bs";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;


const CardImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;


const CardTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;


const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;



const CardDetails = () => {

    const [quantidade, setQuantidade] = useState<string>("0")
    console.log(quantidade);
    

    const handleSetName = (name:string) => {
      setQuantidade(name)
    }

  
    

    return (
        <Container>
          <Row>
            <Col md={8} lg={8} sm={12}>
                <Card>
                    <CardImage src="https://via.placeholder.com/800x400" alt="Product" />
                    <CardTitle>Product Title</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                </Card>
            </Col>

            <Col md={4} lg={4} sm={12}>
              <Input label='Informe a quantidade' name='quantidade' type='number' min='0' value={quantidade} handleChange={handleSetName}/>
              <StyledButton ><BsPlusLg /></StyledButton>
            </Col>

          </Row>
          
        </Container>
    );
  }


export default CardDetails;
