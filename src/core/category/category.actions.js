import Api from '../../api/Api';
import {CATEGORY} from '../../api/Url';
import {
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILURE
} from './category.types'

export const fechtAllCategories =  () =>{

    return async (dispatch) =>{
        dispatch(fetchAllCategoryRequest())
        await Api.get(CATEGORY)
            .then(categories => {
                dispatch(fetchAllCategorySuccess(categories.data))
            })
            .catch(err => {
                dispatch(fetchAllCategoryFailure(err))
            })
    }
}

export const fetchAllCategoryRequest = () =>{
    return {
        type: GET_CATEGORY_REQUEST
    }
};

export const fetchAllCategorySuccess = props => {
    return  {
        type: GET_CATEGORY_SUCCESS,
        ...props
    }
};

export const fetchAllCategoryFailure = err =>{
    return {
        type: GET_CATEGORY_FAILURE,
        ...err
    }
};