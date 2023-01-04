
import {  CREATE_PRODUCT, GET_ERROR } from "../type"


const initial ={
    product:[],
    loading:true,
}
const productReducer = (state = initial ,action) =>{
         switch (action.type) {
            // case GET_ALL_CATEGORY:
            //     return {
            //         ...state ,
            //         categorie:action.payload,
            //         loading:false
            //     }
            case CREATE_PRODUCT:
                return {
                    ...state,
                    product:action.payload,
                    loading:false
                }
            case GET_ERROR:
                return {
                    loading:true,
                    product:action.payload
                }

            default:
                return state;
                
         }
}

export default productReducer