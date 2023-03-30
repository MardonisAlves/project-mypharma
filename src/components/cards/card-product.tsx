import styled from 'styled-components';
import { Link } from 'react-router-dom';


const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top:100px;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
  
  




  return (

    <CardWrapper>
      <Card>
        <CardImage src="https://via.placeholder.com/400x200" alt="Card 1" />
        <CardContent>
          <CardTitle>Card 1</CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>

        </CardContent>
      </Card>
      <Card>
        <CardImage src="https://via.placeholder.com/400x200" alt="Card 2" />
        <CardContent>
          <CardTitle>Card 2</CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardImage src="https://via.placeholder.com/400x200" alt="Card 3" />
        <CardContent>
          <CardTitle>Card 3</CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardImage src="https://via.placeholder.com/400x200" alt="Card 3" />
        <CardContent>
          <CardTitle>Card 3</CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardImage src="https://via.placeholder.com/400x200" alt="Card 3" />
        <CardContent>
          <CardTitle>Card 3</CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardImage src="https://via.placeholder.com/400x200" alt="Card 3" />
        <CardContent>
          <CardTitle>Card 3</CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardImage src="https://via.placeholder.com/400x200" alt="Card 3" />
        <CardContent>
          <CardTitle>Card 3</CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardImage src="https://via.placeholder.com/400x200" alt="Card 3" />
        <CardContent>
          <CardTitle>Card 3</CardTitle>
          <Link to='/products/details'>
            <CardButton>Details</CardButton>
          </Link>
        </CardContent>
      </Card>

    </CardWrapper>

  );
};

