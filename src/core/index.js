import { combineReducers } from "redux";
import categoryReducer from "./category/category.reducer";
import valueReducer from "./value/value.reducer";
import vehicleReducer from "./vehicle/vehicle.reducer";
import propertyReducer from "./property/property.reducer";

export default combineReducers({
    categoryReducer,
    valueReducer,
    vehicleReducer,
    propertyReducer
});