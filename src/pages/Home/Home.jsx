import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col,Row }  from 'react-bootstrap';
import FormComponent from '../../components/Form';
import {ERROR_NAME} from '../../utils/constans';
import { createVehiclesProperty,fetchAllVehicles, deleteVehicleById } from '../../core/vehicle/vehicle.actions';
import CardComponent from '../../components/Card';
import map from 'lodash/map';

const validate = (values) => {
    let errors = {}
    if(!values.name) errors.name = ERROR_NAME
    return errors
}

const Home = ({
    vehicleForm,
    vehicleFields,
    createVehicle,
    vehicles,
    fetchAllVehicles,
    deleteVehicleById
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllVehicles({})
    }, [fetchAllVehicles])

    return (
        <Row>
            <Col xs="12" className="mb-3 text-center">
                <h2>Crea un auto</h2>
                <FormComponent
                    form={vehicleForm}
                    fields={vehicleFields}
                    validate={validate}
                    submit={createVehicle}
                />
            </Col>
            <Col xs="12" className="text-center">
                <h3>Coleccion de autos</h3>
                <Row>
                    {vehicles && vehicles.length > 0 ? (
                        map(vehicles, (current,idx) => (
                            <Col xs="12" sm="6" md="4" className="mb-3" key={idx}>
                                <CardComponent
                                    title={current.name}
                                    id={current.id}
                                    push={navigate}
                                    deleteAction={deleteVehicleById}
                                />
                            </Col>
                        ))
                        ) : (
                            <h2>No hay ningun auto agregado</h2>
                        )
                    }
                </Row>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        vehicleForm: state.vehicleReducer.vehicleForm,
        vehicleFields: state.vehicleReducer.vehicleFields,
        vehicles: state.vehicleReducer.vehicles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createVehicle: (value) => (dispatch(createVehiclesProperty(value))),
        fetchAllVehicles: (id) => (dispatch(fetchAllVehicles(id))),
        deleteVehicleById: (id) => (dispatch(deleteVehicleById(id)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);