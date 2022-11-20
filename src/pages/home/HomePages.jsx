import React from 'react';
import Slider from '../../components/home/Slider';
import HomeCategorie from '../../components/home/HomeCategorie';
import CardProductContainer from '../../components/products/CardProductContainer';
import DiscountSection from '../../components/home/DiscountSection';
import BrandFeatured from '../../components/brand/BrandFeatured';




const HomePages = () => {
  return (
    <div className='font' style={{ minHeight: '670px' }}>
        
        <Slider />
        <HomeCategorie />
        <CardProductContainer title='Plus Vendu' btnTitle='Plus' pathText='/products'/>
        <DiscountSection />
        <CardProductContainer title='Plus Vendu' btnTitle='Plus' pathText='/products' />
        <BrandFeatured  title='Plus Recent' btnTitle='Plus'/>
        
        
        
    </div>
  )
}

export default HomePages