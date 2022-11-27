import { combineReducers } from "redux";
import categorieReducer from './categorieReducer'





export default combineReducers({
    allCategory:categorieReducer
})