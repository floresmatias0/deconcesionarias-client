import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col,Row,Spinner }  from 'react-bootstrap';
import FormComponent from '../../components/Form';
import CardComponent from '../../components/Card';
import {ERROR_NAME} from '../../utils/constans';
import { 
    createVehiclesProperty,
    fetchAllVehicles,
    deleteVehicleById 
} from '../../core/vehicle/vehicle.actions';
import map from 'lodash/map';
import "../../styles/Home.scss";

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
    deleteVehicleById,
    vehicleLoading
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllVehicles({})
    }, [fetchAllVehicles])

    return (
        <Row>
            <Col xs="12" className="my-3 text-center">
                <FormComponent
                    form={vehicleForm}
                    fields={vehicleFields}
                    validate={validate}
                    submit={createVehicle}
                />
            </Col>
            <Col xs="12" className="text-center">
                <Row>
                    {vehicleLoading ? (
                        <Col xs="12" className="d-flex justify-content-center">
                            <Spinner animation="border" variant="light"/>
                        </Col>
                    ) : (
                        vehicles && vehicles.length > 0 ? (
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
                                <h2 className="subtitle">No hay ningun vehiculo agregado</h2>
                            )
                    )}
                </Row>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        vehicleForm: state.vehicleReducer.vehicleForm,
        vehicleFields: state.vehicleReducer.vehicleFields,
        vehicles: state.vehicleReducer.vehicles,
        vehicleLoading: state.vehicleReducer.vehicleLoading
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