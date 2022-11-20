import React from 'react'
import {Container, Row} from 'react-bootstrap'
import SubTitle from '../utility/SubTitle';
import CategorieCard from '../../components/category/CategorieCard';
import pic from '../../images/pic.png';
import cat2 from '../../images/cat2.png';
import laptop from '../../images/prod1.png';
import sale from '../../images/sale.png';
import clothe from '../../images/clothe.png';

const HomeCategorie = () => {
  return (
    <Container>
         <SubTitle title='Categorie' btnTitle='Plus' pathText='/allcategories'/>
         <Row className='my-2 d-flex justify-content-between'> 
         <CategorieCard  img={pic} title="Appareil ménager" background='#F4DBA4' />
         <CategorieCard  img={cat2} title="Appareil ménager" background='#F4DBA4' />
         <CategorieCard  img={laptop} title="Appareil ménager" background='#F4DBA4' />
         <CategorieCard  img={sale} title="Appareil ménager" background='#F4DBA4' />
         <CategorieCard  img={clothe} title="Appareil ménager" background='#F4DBA4' />
      </Row>    
    </Container>
  )
}

export default HomeCategorie