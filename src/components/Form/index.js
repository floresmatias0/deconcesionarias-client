import React from 'react';
import {
    Formik,
    Form,
    Field
} from 'formik';
import {
    Button,
    Col,
    Row
} from 'react-bootstrap';
import get from 'lodash/get';
import map from 'lodash/map';
import { CANCEL,SEND } from '../../utils/constans';
import '../../styles/Form.scss';

const FormComponent = ({
    form,
    fields,
    validate,
    submit,
    goBack,
    id,
    push
}) => {
    return (
        <Row>
            <Col xs="12">
                <Formik
                    initialValues={form}
                    validate={validate}
                    onSubmit={(values) => submit({values, id, push})}
                    >
                    {({ errors,touched }) => (
                        <Form className="form d-flex flex-column justify-content-center mx-auto">
                            <Col xs="12">
                                {map(fields, (field, idx) => (
                                    <Row key={idx}>
                                        <Col xs="12">
                                            <h4 className="mb-3">{get(field, 'label')}</h4>
                                        </Col>
                                        <Col xs="12" sm="9" className="d-flex align-items-center justify-content-center">
                                            <Field
                                                autocomplete="off"
                                                placeholder={get(field, 'placeholder')}
                                                type={get(field, 'type')}
                                                name={get(field, 'name')}
                                            />
                                        </Col>
                                        <Col xs="12" sm="3" className="col-btn-form d-flex justify-content-start">
                                            {goBack && (
                                                <Button
                                                    variant="danger"
                                                    className="btn-cancel m-2"
                                                    onClick={goBack}
                                                >
                                                    {CANCEL}
                                                </Button>
                                            )}
                                            {' '}
                                            <Button
                                                type="submit"
                                                className="btn-orange"
                                                variant="success"
                                            >
                                                {SEND}
                                            </Button>
                                        </Col>
                                        <Col xs="12">
                                            {errors[get(field, 'name')] && touched[get(field, 'name')] && <p className="error animate__animated animate__shakeX">{errors[get(field, 'name')]}</p>}
                                        </Col>
                                    </Row>
                                ))}
                            </Col>
                        </Form>
                    )}
                </Formik>
            </Col>
        </Row>
    )
}

export default FormComponent;