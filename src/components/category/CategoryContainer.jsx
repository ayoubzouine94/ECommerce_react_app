import React,{useEffect} from 'react';
import { Container,Spinner,Row } from 'react-bootstrap';
import CategorieCard from './CategorieCard';
import pic from '../../images/pic.png';
import { useSelector,useDispatch } from 'react-redux';
import getAllCategories from '../../redux/actions/categorieAction';

const colors = ["#FFD3E8","#F4DBA5","#55CFDF","#FF6262","#0034FF","#FFD3E8"];
const CategoryContainer = () => {
  const dispach = useDispatch();
  const categorieData = useSelector(state=>state.allCategory.categorie);
  const loading = useSelector(state=>state.allCategory.loading);
  useEffect(() => {
    dispach(getAllCategories());
  }, [])

  
  return (  
    <Container>
        <Row className='my-2 d-flex justify-content-between'> 
       
        {
          loading === false ?(
          categorieData.data ?(
           categorieData.data.map((item,index)=>{
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