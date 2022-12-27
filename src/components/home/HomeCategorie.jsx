import React,{useEffect} from 'react'
import {Container, Row,Spinner} from 'react-bootstrap'
import SubTitle from '../utility/SubTitle';
import CategorieCard from '../../components/category/CategorieCard';
import HomeCategoryHook from '../../hook/categorie/HomeCategoryHook';

const HomeCategorie = () => {

const [categorieData,loading] = HomeCategoryHook();

  const colors = ["#FFD3E8","#F4DBA5","#55CFDF","#FF6262","#0034FF","#FFD3E8"];


  //console.log(categorieData.data.name);
  //console.log(loading);


  return (
    <Container>
         <SubTitle title='Categorie' btnTitle='Plus' pathText='/allcategories'/>
         <Row className='my-2 d-flex justify-content-between'> 

         {
          loading === false ?(
          categorieData.data ?(
           categorieData.data.slice(0,5).map((item,index)=>{
         return(<CategorieCard key={index}  img={item.image} title={item.name} background={colors[index]} />)   
           })
         ) : <h2>Pas de Categorie</h2>
         ) : <Spinner animation="grow" />
         }
         
         
      </Row>    
    </Container>
  )
}

export default HomeCategorie