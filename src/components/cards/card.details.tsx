import { useState } from 'react';
import styled from 'styled-components';
import Input from '../form/input';

const Container = styled.div`
  display:flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-wrap:wrap;
  }
`;


const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:800px;
`;


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

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const handleSetName = (name:string) => {
        setName(name)
    }

    const handlesetEmail = (email:string) => {
        setEmail(email)
    }
    

    return (
        <Container>
            <CardWrapper>
                <Card>
                    <CardImage src="https://via.placeholder.com/800x400" alt="Product" />
                    <CardTitle>Product Title</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                </Card>
            </CardWrapper>

    
                <Input label='Nome Completo' name='nome' type='text' value={name} handleChange={handleSetName}/>
                <Input label='E-mail' name='email' type='text' value={email} handleChange={handlesetEmail}/>
        
            

        </Container>
    );
  }


export default CardDetails;
