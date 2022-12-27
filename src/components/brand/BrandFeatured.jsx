import React,{useEffect} from 'react';
import brand1 from '../../images/brand1.png';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand3.png';
import { Container,Row ,Spinner} from 'react-bootstrap';
import SubTitle from '../utility/SubTitle';
import BrandCard from './BrandCard';
import { useDispatch,useSelector } from 'react-redux';
import  GetAllBrands  from '../../redux/actions/brandAction';


const BrandFeatured = ({title,btnTitle}) => {

  const dispatch = useDispatch();
  //get Last brand state from REDUX
  const brandData = useSelector(state=>state.allBrands.brands);
  //get Last loading state from REDUX
  const loading = useSelector(state=>state.allBrands.loading);

  useEffect(() => {
       dispatch(GetAllBrands())
  }, []);
//console.log(brandData.data)




  return (
    <Container>
    <SubTitle title={title} btnTitle={btnTitle} pathText="/allbrand" />
    <Row className='my-1 d-flex justify-content-between'>

      {
        loading === false ? (
          brandData.data ?(
            brandData.data.slice(0,5).map((item,index)=>{
                  return ( <BrandCard key={index} img={brand1} />)
            })
          ):<h2>Pas de Categorie</h2> 
        ): <Spinner animation="grow" />
      }
       
      
    </Row>
</Container>
  )
}

export default BrandFeatured


