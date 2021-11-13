import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col,Row }  from 'react-bootstrap';
import MenuTab from '../../components/Tabs';
import {fetchAllVehicles,cleanVehiclesRequest} from '../../core/vehicle/vehicle.actions';
import {fechtAllCategories} from '../../core/category/category.actions';

const Inspection = ({
    fetchAllVehicles,
    vehicle,
    cleanVehiclesRequest,
    categories,
    fechtAllCategories
}) => {
    const params = useParams();

    useEffect(() => {
        fetchAllVehicles({id: params.id})

        return () => cleanVehiclesRequest()
    }, [params.id, fetchAllVehicles, cleanVehiclesRequest])

    useEffect(() => {
        fechtAllCategories()
    }, [fechtAllCategories])

    return (
        <Row>
            <Col>
                <h1 className="text-center">Inspeccion de propiedades</h1>
                <MenuTab 
                    items={vehicle}
                    tabs={categories}    
                />
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        vehicle: state.vehicleReducer.vehicle,
        categories: state.categoryReducer.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllVehicles: (values) => (dispatch(fetchAllVehicles(values))),
        cleanVehiclesRequest: () => (dispatch(cleanVehiclesRequest())),
        fechtAllCategories: () => (dispatch(fechtAllCategories()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspection);