import { useContext, useEffect, useState } from 'react';
import {  Card, Col, Container,  Row } from 'react-bootstrap';
import styled from 'styled-components';
import StyledButton from '../button/button';
import Input from '../form/input';
import { BsPlusLg } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { Context } from '../../states/context/context';
import { Items } from '../../interfaces/itens.interface';
import {  ToastContainer } from 'react-toastify';



const CardStyle = styled(Card)`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 100px;
  margin: 10px 0px 0px 0px;
`;


const CardImage = styled(Card.Img)`
  width: 100%;
  height: 400px;
`;


const CardTitle = styled.h2`
  font-size: 20px;
  margin: 20px 0px;
`;


const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;



export default function CardDetails() {
  const {
    product, 
    getProduct,
    getItems,
    hanhlesaveItensStorage,
    notify
  } = useContext(Context)

    const {id}:any = useParams()
    const [quantidade, setQuantidade] = useState<string>("0")
    

    const handleSetName = (qtd:string) => {
      setQuantidade(qtd)
    }

  
    
    const addcartItem = async () => {
      const value:any = parseFloat(product[0].price)
      const item:Items = {
        name: product[0].name,
        qtd:parseInt(quantidade),
        value: parseFloat(product[0].price),
        id:product[0].id,
        valueitems: parseInt(quantidade) * value.toFixed(2)
      }

      await  hanhlesaveItensStorage(item)
      await getItems()
      notify("produto adicionado com sucesso!")
        setQuantidade("0")
    }


    
    useEffect(() => {
      getProduct(id)
    },[id, getProduct])

    
    return (
      <>
        <Container>
          <Row>
            <Col md={8} lg={8} sm={12}>
              {product[0]?.id !== undefined ? 
                product.map((item) => {
                  return(
                <CardStyle key={item.id}>
                    <CardImage variant="top" src={item.upload.location} alt="Product details"/>
                    <CardTitle>{item.name} - R${item.price} </CardTitle>
                    <CardText> {item.description} </CardText>
                </CardStyle>
                    
                  )
                })
              : ""}
            </Col>

            <Col md={4} lg={4} sm={12}>
              <Input 
              label='Informe a quantidade' 
              name='quantidade' 
              type='number' 
              min='0' 
              value={quantidade} 
              handleChange={handleSetName}/>

              <StyledButton 
              onClick={addcartItem} 
              disabled={quantidade === "0" ? true : false}><BsPlusLg />
              </StyledButton>
            </Col>

          </Row>
        </Container>
          <ToastContainer />
      </>
    );
  }

