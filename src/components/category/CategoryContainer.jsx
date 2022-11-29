import React from 'react';
import { Container,Spinner,Row } from 'react-bootstrap';
import CategorieCard from './CategorieCard';


const colors = ["#FFD3E8","#F4DBA5","#55CFDF","#FF6262","#0034FF","#FFD3E8"];
const CategoryContainer = ({data,loading}) => {

  return (  
    <Container>
        <Row className='my-2 d-flex justify-content-between'> 
       
        {
          loading === false ?(
           data ?(
           data.map((item,index)=>{
         return(<CategorieCard key={index} img={item.image} title={item.name} background={colors[Math.floor(Math.random() * 5)+1]} />)   
           })
         ) : <h2>Pas de Categorie</h2>
         ) : <Spinner animation="grow" />
         } 
        </Row>    
    </Container>

    
  )
}

export default CategoryContainer