
import { CREATE_CATEGORIE, GET_ALL_CATEGORY, GET_ERROR } from "../type"


const initial ={
    categorie:[],
    loading:true,
}
const categorieReducer = (state = initial ,action) =>{
         switch (action.type) {
            case GET_ALL_CATEGORY:
                return {
                    ...state ,
                    categorie:action.payload,
                    loading:false
                }
            case CREATE_CATEGORIE:
                return {
                    categorie:action.payload,
                    loading:false
                }
            case GET_ERROR:
                return {
                    loading:true,
                    categorie:action.payload
                }

            default:
                return state;
                
         }
}

export default categorieReducer