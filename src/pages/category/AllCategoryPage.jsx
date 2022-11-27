import React from 'react'
import CategoryContainer from '../../components/category/CategoryContainer';
import Pagination from '../../components/utility/Pagination';



const AllCategoryPage = () => {


  return (
    <div  style={{minHeight:'670px'}}>
      <div className='admin content-text fs-4 m-3'>Tout Les Categorie</div>
        <CategoryContainer />
        <br />
        <Pagination />
    </div>

  )
}

export default AllCategoryPage