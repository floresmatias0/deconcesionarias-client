import Api from '../../api/Api';
import {VALUE} from '../../api/Url';
import {
    POST_VALUE_REQUEST,
    POST_VALUE_SUCCESS,
    POST_VALUE_FAILURE,
    GET_VALUE_REQUEST,
    GET_VALUE_SUCCESS,
    GET_VALUE_FAILURE
} from './value.types'

export const createValueProperty =  ({value,propertyId}) =>{
    return async (dispatch) =>{
        dispatch(createValueRequest())
        await Api.post(VALUE,{value, propertyId})
            .then(value => {
                dispatch(createValueSuccess(value.data.data[0]))
            })
            .catch(err => {
                dispatch(createValueFailure(err))
            })
    }
}

export const updateValueProperty =  ({valueId,value}) =>{
    console.log(valueId)
    console.log(value)
    return async () =>{
        await Api.put(VALUE, {valueId,value})
    }
}

export const fetchAllValues =  () =>{
    return async (dispatch) =>{
        dispatch(fetchAllValuesRequest())
        await Api.get(VALUE)
            .then(value => {
                dispatch(fetchAllValuesSuccess({values: value.data.data}))
            })
            .catch(err => {
                dispatch(fetchAllValuesFailure(err))
            })
    }
}

export const fetchAllValuesRequest = () =>{
    return {
        type: GET_VALUE_REQUEST
    }
};

export const fetchAllValuesSuccess = props => {
    return  {
        type: GET_VALUE_SUCCESS,
        ...props
    }
};

export const fetchAllValuesFailure = err =>{
    return {
        type: GET_VALUE_FAILURE,
        ...err
    }
};

export const createValueRequest = () =>{
    return {
        type: POST_VALUE_REQUEST
    }
};

export const createValueSuccess = props => {
    return  {
        type: POST_VALUE_SUCCESS,
        ...props
    }
};

export const createValueFailure = err =>{
    return {
        type: POST_VALUE_FAILURE,
        ...err
    }
};