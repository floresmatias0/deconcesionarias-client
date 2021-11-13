import Api from '../../api/Api';
import Swal from 'sweetalert2';
import {VEHICLE} from '../../api/Url';
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
} from './vehicle.types';

export const createVehiclesProperty =  ({values, push}) => {
    return async (dispatch) =>{
        dispatch(createVehicleRequest())
        await Api.post(VEHICLE,{name: values.name})
            .then(value => {
                let vehicle = value.data.data[0];
                dispatch(createVehicleSuccess({vehicle}))
                dispatch(fetchAllVehicles({}))
            })
            .catch(err => {
                dispatch(createVehicleFailure(err))
            })
    }
}

export const deleteVehicleById = (vehicleId) =>{
    return async (dispatch) => {
        Swal.fire({
            title: 'Estas seguro que queres eliminarlo?',
            showDenyButton: true,
            confirmButtonText: 'Si, borrar',
            denyButtonText: `No, gracias`,
          }).then(async(result) => {
            if (result.isConfirmed) {
                await Api.delete(`${VEHICLE}/${vehicleId}`)
                .then(() => dispatch(fetchAllVehicles({})))
              Swal.fire('Exitoso!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Buena decisión!', '', 'info')
            }
          })
    }
}

export const fetchAllVehicles =  ({id}) => {

    if(id) {
        return async (dispatch) =>{
            dispatch(fetchVehicleRequest())
            await Api.get(`${VEHICLE}/${id}`)
            .then(value => {
                dispatch(fetchVehicleSuccess(value.data.data))
            })
            .catch(err => {
                dispatch(fetchVehicleFailure(err))
            })
        }
    }

    return async (dispatch) =>{
        dispatch(fetchAllVehiclesRequest())
        await Api.get(VEHICLE)
        .then(value => {
            dispatch(fetchAllVehiclesSuccess({vehicles: value.data.data}))
        })
        .catch(err => {
            dispatch(fetchAllVehiclesFailure(err))
        })
    }
}

export const fetchAllVehiclesRequest = () =>{
    return {
        type: GET_VEHICLES_REQUEST
    }
};

export const fetchAllVehiclesSuccess = props => {
    return  {
        type: GET_VEHICLES_SUCCESS,
        ...props
    }
};

export const fetchAllVehiclesFailure = err =>{
    return {
        type: GET_VEHICLES_FAILURE,
        ...err
    }
};

export const fetchVehicleRequest = () => {
    return {
        type: GET_VEHICLE_REQUEST
    }
};

export const fetchVehicleSuccess = props => {
    return  {
        type: GET_VEHICLE_SUCCESS,
        ...props
    }
};

export const fetchVehicleFailure = err =>{
    return {
        type: GET_VEHICLE_FAILURE,
        ...err
    }
};

export const createVehicleRequest = () =>{
    return {
        type: POST_VEHICLE_REQUEST
    }
};

export const createVehicleSuccess = props => {
    return  {
        type: POST_VEHICLE_SUCCESS,
        ...props
    }
};

export const createVehicleFailure = err =>{
    return {
        type: POST_VEHICLE_FAILURE,
        ...err
    }
};

export const cleanVehiclesRequest = () =>{
    return {
        type: CLEAN_REDUCER_VEHICLE
    }
};