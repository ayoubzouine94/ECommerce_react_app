import React from 'react'
import CategoryContainer from '../../components/category/CategoryContainer';
import Pagination from '../../components/utility/Pagination';
import AllCategoryPageHook from '../../hook/categorie/AllCategoryPageHook';


const AllCategoryPage = () => {
  const [loading,pageCount,getPage,categorieData] = AllCategoryPageHook();


  return (
    <div  style={{minHeight:'670px'}}>
      <div className='admin content-text fs-4 m-3'>Tout Les Categorie</div>
        <CategoryContainer data={categorieData.data} loading={loading}  />
        <br />
        {
          pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage}/>):null
        }
        
    </div>
  )
}

export default AllCategoryPage