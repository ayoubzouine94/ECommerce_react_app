import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getAllCategories,getAllCategoriesPages} from '../../redux/actions/categorieAction';

const AllCategoryPageHook = () => {
          //to get state From Redux
          const dispach = useDispatch();
          const categorieData = useSelector(state=>state.allCategory.categorie);
          const loading = useSelector(state=>state.allCategory.loading);
          // when first load
          useEffect(() => {
            dispach(getAllCategories(6));
          }, [])
          
          //to get page count
          let pageCount = 0 ;
          if(categorieData.paginationResult)
        pageCount = categorieData.paginationResult.numberOfPages;

        //-when Press Pagination
        const getPage = (page) =>{
          dispach(getAllCategoriesPages(page))
        }
        return [loading,pageCount,getPage,categorieData]
}

export default AllCategoryPageHook