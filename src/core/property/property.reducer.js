/* eslint-disable */
import {
    POST_PROPERTY_REQUEST,
    POST_PROPERTY_SUCCESS,
    POST_PROPERTY_FAILURE,
    GET_PROPERTY_REQUEST,
    GET_PROPERTY_SUCCESS,
    GET_PROPERTY_FAILURE,
    GET_PROPERTIES_REQUEST,
    GET_PROPERTIES_SUCCESS,
    GET_PROPERTIES_FAILURE
} from './property.types'

const initialState = {
    propertyLoading: false,
    propertyError:"",
    properties: [],
    property: {}
}
    
function propertyReducer(state = initialState, {type, ...props}) {
    switch(type){
        case GET_PROPERTY_REQUEST:
            return {
                ...state,
                propertyLoading: true
            }
        case GET_PROPERTY_SUCCESS:
            return {
                ...state,
                property: props.property,
                propertyLoading: false
            }
        case GET_PROPERTY_FAILURE:
            return {
                ...state,
                propertyError: "sorry err",
                propertyLoading: false
            }
        case GET_PROPERTIES_REQUEST:
            return {
                ...state,
                propertyLoading: true
            }
        case GET_PROPERTIES_SUCCESS:
            return {
                ...state,
                properties: props.properties,
                propertyLoading: false
            }
        case GET_PROPERTIES_FAILURE:
            return {
                ...state,
                propertyError: "sorry err",
                propertyLoading: false
            }
        case POST_PROPERTY_REQUEST:
            return {
                ...state,
                propertyLoading: true
            }
        case POST_PROPERTY_SUCCESS:
            return {
                ...state,
                propertyId: props.id,
                propertyLoading: false
            }
        case POST_PROPERTY_FAILURE:
        return {
            ...state,
            propertyError: "sorry err",
            propertyLoading: false
        }
        default :
            return state;
    }
        
};

export default propertyReducer;