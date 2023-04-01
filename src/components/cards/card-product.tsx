import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../states/context/context';
import Card  from 'react-bootstrap/Card';


const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top:100px;
`;

const CardStyle = styled(Card)`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border:none;
  padding-top:10px;
  margin: 20px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  width: 20rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;


const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius:5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }
`;


export default function CardProduct(){
  
  const {allproducts} = useContext(Context)
  
  return (

    <CardWrapper>
     {allproducts[0]?.id !== undefined ? 
     allproducts.map((item) => {
      return(
      <CardStyle>
        <CardImage src={item.upload.location} alt="Card 1" />
        <CardContent>
          <CardTitle> {item.name} </CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>
        </CardContent>
      </CardStyle>
      )
     })
     
     : ""}
    </CardWrapper>

  );
};

