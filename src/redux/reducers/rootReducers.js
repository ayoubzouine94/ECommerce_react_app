import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import categorieReducer from './categorieReducer'
import subcategorieReducer from "./subCategorieReducer";





export default combineReducers({
    allCategory:categorieReducer,
    allBrands:brandReducer,
    subCategorie:subcategorieReducer

})