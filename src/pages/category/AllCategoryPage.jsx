import React,{useEffect} from 'react'
import CategoryContainer from '../../components/category/CategoryContainer';
import Pagination from '../../components/utility/Pagination';
import { useSelector,useDispatch } from 'react-redux';
import {getAllCategories,getAllCategoriesPages} from '../../redux/actions/categorieAction';

const AllCategoryPage = () => {
          //to get state From Redux
          const dispach = useDispatch();
          const categorieData = useSelector(state=>state.allCategory.categorie);
          const loading = useSelector(state=>state.allCategory.loading);
          // when first load
          useEffect(() => {
            dispach(getAllCategories(4));
          }, [])
          
          //to get page count
          let pageCount = 0 ;
          if(categorieData.paginationResult)
        pageCount = categorieData.paginationResult.numberOfPages;

        //-when Press Pagination
        const getPage = (page) =>{
          dispach(getAllCategoriesPages(page))
        }

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