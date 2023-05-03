import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    shop: productReducer,
});
export default rootReducer;