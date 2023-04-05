import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Context } from '../../states/context/context';
import Card  from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin:100px 0px 60px 0px;
`;

const CardStyle = styled(Card)`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border:none;
  padding-top:10px;
  margin: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  width: 18rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 260px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 12px;
  margin-bottom: 0px;
`;


const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius:5px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }
`;


export default function CardProduct(){
  
  const {allproducts, getProducts} = useContext(Context)

  useEffect(() => {
    let id:any="null"
    getProducts(id)
}, [getProducts])
  
  
  return (

    <CardWrapper>
     {allproducts[0]?.id !== undefined ? 
     allproducts.map((item) => {
      return(
      <CardStyle key={item.id}>
        <CardImage src={item.upload.location} alt="Card Product" />
        <CardContent>
          <CardTitle> {item.name} - R${item.price} </CardTitle>

          <Link to={`/products/details/${item.id}`}>
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

