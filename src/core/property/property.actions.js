import Api from '../../api/Api';
import {PROPERTY} from '../../api/Url';
import {
    POST_PROPERTY_REQUEST,
    POST_PROPERTY_SUCCESS,
    POST_PROPERTY_FAILURE,
    GET_PROPERTIES_REQUEST,
    GET_PROPERTIES_SUCCESS,
    GET_PROPERTIES_FAILURE,
    GET_PROPERTY_REQUEST,
    GET_PROPERTY_SUCCESS,
    GET_PROPERTY_FAILURE
} from './property.types'

export const createProperty =  ({value,categoryId}) =>{
    return async (dispatch) =>{
        dispatch(createPropertyRequest())
        await Api.post(PROPERTY,{value, categoryId})
            .then(value => {
                dispatch(createPropertySuccess(value.data.data[0]))
            })
            .catch(err => {
                dispatch(createPropertyFailure(err))
            })
    }
}

// export const updatePropertyProperty =  ({valueId,value}) =>{
//     return async () =>{
//         await Api.put(PROPERTY, {valueId,value})
//     }
// }

export const fetchProperties =  ({id}) =>{
    if(id) {
        return async (dispatch) =>{
            dispatch(fetchAllPropertiesRequest())
            await Api.get(`${PROPERTY}/${id}`)
            .then(value => {
                dispatch(fetchAllPropertiesSuccess({values: value.data.data}))
            })
            .catch(err => {
                dispatch(fetchAllPropertiesFailure(err))
            })
        }
    }
    return async (dispatch) =>{
        dispatch(fetchPropertyRequest())
        await Api.get(PROPERTY)
        .then(value => {
            dispatch(fetchPropertySuccess({values: value.data.data}))
        })
        .catch(err => {
            dispatch(fetchPropertyFailure(err))
        })
    }
}

export const fetchAllPropertiesRequest = () =>{
    return {
        type: GET_PROPERTIES_REQUEST
    }
};

export const fetchAllPropertiesSuccess = props => {
    return  {
        type: GET_PROPERTIES_SUCCESS,
        ...props
    }
};

export const fetchAllPropertiesFailure = err =>{
    return {
        type: GET_PROPERTIES_FAILURE,
        ...err
    }
};

export const fetchPropertyRequest = id =>{
    return {
        type: GET_PROPERTY_REQUEST,
        id
    }
};

export const fetchPropertySuccess = props => {
    return  {
        type: GET_PROPERTY_SUCCESS,
        ...props
    }
};

export const fetchPropertyFailure = err =>{
    return {
        type: GET_PROPERTY_FAILURE,
        ...err
    }
};

export const createPropertyRequest = () =>{
    return {
        type: POST_PROPERTY_REQUEST
    }
};

export const createPropertySuccess = props => {
    return  {
        type: POST_PROPERTY_SUCCESS,
        ...props
    }
};

export const createPropertyFailure = err =>{
    return {
        type: POST_PROPERTY_FAILURE,
        ...err
    }
};