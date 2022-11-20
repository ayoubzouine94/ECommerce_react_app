import React from 'react'
import { Container ,Row} from 'react-bootstrap'
import ProductCard from './ProductCard';
import SubTitle from '../utility/SubTitle';

const CardProductContainer = ({title,btnTitle,pathText}) => {
  return (
    <Container>
        <SubTitle  title={title} btnTitle={btnTitle} pathText={pathText} />
        <Row className='my-2 d-flex justify-content-between' >
           <ProductCard  />
           <ProductCard  />
           <ProductCard  />
           <ProductCard  />
           <ProductCard  />
        </Row>
        

    </Container>
  )
}

export default CardProductContainer