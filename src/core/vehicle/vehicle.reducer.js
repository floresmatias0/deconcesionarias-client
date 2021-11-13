/* eslint-disable */
import {
    POST_VEHICLE_REQUEST,
    POST_VEHICLE_SUCCESS,
    POST_VEHICLE_FAILURE,
    GET_VEHICLE_REQUEST,
    GET_VEHICLE_SUCCESS,
    GET_VEHICLE_FAILURE,
    GET_VEHICLES_REQUEST,
    GET_VEHICLES_SUCCESS,
    GET_VEHICLES_FAILURE,
    CLEAN_REDUCER_VEHICLE
} from './vehicle.types'

const initialState = {
    vehicleLoading: false,
    vehicleError:"",
    vehicles: [],
    vehicle: {},
    vehicleForm: {
        name: ""
    },
    vehicleFields: [
        {
            label: 'Marca',
            placeholder: 'Mustang',
            type: 'text',
            name: 'name'
        }
    ]
}

function vehicleReducer(state = initialState, {type, ...props}) {
    switch(type){
        case GET_VEHICLE_REQUEST:
            return {
                ...state,
                vehicleLoading: true
            }
        case GET_VEHICLE_SUCCESS:
            return {
                ...state,
                vehicle: props,
                vehicleLoading: false
            }
        case GET_VEHICLE_FAILURE:
            return {
                ...state,
                vehicleError: "sorry err",
                vehicleLoading: false
            }
        case CLEAN_REDUCER_VEHICLE:
            return {
                ...state,
                vehicle: {}
            }
        case GET_VEHICLES_FAILURE:
            return {
                ...state,
                vehicleError: "sorry err",
                vehicleLoading: false
            }
        case GET_VEHICLES_REQUEST:
            return {
                ...state,
                vehicleLoading: true
            }
        case GET_VEHICLES_SUCCESS:
            return {
                ...state,
                vehicles: props.vehicles,
                vehicleLoading: false
            }
        case POST_VEHICLE_REQUEST:
            return {
                ...state,
                vehicleLoading: true
            }
        case POST_VEHICLE_SUCCESS:
            return {
                ...state,
                vehicles: props.vehicles,
                vehicleLoading: false
            }
        case POST_VEHICLE_FAILURE:
            return {
                ...state,
                vehicleError: "sorry err",
                vehicleLoading: false
            }
        default :
            return state;
    }
        
};

export default vehicleReducer;