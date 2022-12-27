import { CREATE_SUBCATEGORIE, GET_ERROR } from "../type";



const initial ={
    subcategorie: [],
    loading:true
}

const subcategorieReducer = (state=initial,action)=>{
    switch (action.type) {
        case CREATE_SUBCATEGORIE:
            return {
                ...state,
                subcategorie: action.payload,
                loading:false,
            }
        case GET_ERROR :
           return {
            loading:true,
            subcategorie: action.payload
           }
        default:
         return state;
    }
}

export default subcategorieReducer