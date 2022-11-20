import React from 'react';
import AllBrandContainer from '../../components/brand/BrandContainer';
import Pagination from '../../components/utility/Pagination';

const AllBrandPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <div className='admin content-text fs-4 m-3'>Tout Les Marques</div>
        <AllBrandContainer />
        <Pagination />
    </div>
  )
}

export default AllBrandPage