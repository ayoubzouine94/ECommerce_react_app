import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {getAllCategories} from '../../redux/actions/categorieAction';
const HomeCategoryHook = () => {

  const dispach = useDispatch();
  const categorieData = useSelector(state=>state.allCategory.categorie);
  const loading = useSelector(state=>state.allCategory.loading);
  useEffect(() => {
    dispach(getAllCategories());
  }, [])
  return [categorieData,loading]
}

export default HomeCategoryHook