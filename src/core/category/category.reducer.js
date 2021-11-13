import {
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILURE
} from './category.types'

const initialState = {
    category : [],
    categoryLoading: false,
    categoryError:"",
}
    
function categoryReducer(state = initialState, {type, ...props}) {
    switch(type){
        case GET_CATEGORY_REQUEST:
            return {
                ...state,
                categoryLoading: true
            }
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                category: props.data,
                categoryLoading: false
            }
        case GET_CATEGORY_FAILURE:
        return {
            ...state,
            categoryError: "sorry err",
            categoryLoading: false
        }
        default :
            return state;
    }
        
};

export default categoryReducer;