import { GET_ALL_BRAND,GET_ERROR } from "../type";

const initial={
    brands:[],
    loading:true
}

const brandReducer = (state=initial ,action) =>{
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brands:action.payload,
                loading:false
            }
        case GET_ERROR:
            return {
                loading:true,
                brands:action.payload
            }
            
          
    
        default:
            return state;
           
    }

}

export default brandReducer;