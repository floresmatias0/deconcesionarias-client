/* eslint-disable */
import {
    POST_VALUE_REQUEST,
    POST_VALUE_SUCCESS,
    POST_VALUE_FAILURE,
    GET_VALUE_REQUEST,
    GET_VALUE_SUCCESS,
    GET_VALUE_FAILURE
} from './value.types'

const initialState = {
    valueLoading: false,
    valueError:"",
    values: [],
    value: {}
}
    
function valueReducer(state = initialState, {type, ...props}) {
    switch(type){
        case GET_VALUE_REQUEST:
            return {
                ...state,
                valueLoading: true
            }
        case GET_VALUE_SUCCESS:
            return {
                ...state,
                values: props.values,
                valueLoading: false
            }
        case GET_VALUE_FAILURE:
        return {
            ...state,
            valueError: "sorry err",
            valueLoading: false
        }
        case POST_VALUE_REQUEST:
            return {
                ...state,
                valueLoading: true
            }
        case POST_VALUE_SUCCESS:
            return {
                ...state,
                value: props,
                valueLoading: false
            }
        case POST_VALUE_FAILURE:
        return {
            ...state,
            valueError: "sorry err",
            valueLoading: false
        }
        default :
            return state;
    }
        
};

export default valueReducer;