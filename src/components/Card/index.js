import React from 'react';
import { Card,Button,Col, Row } from 'react-bootstrap';
import { VIEW, DELETE } from '../../utils/constans';
import '../../styles/Card.scss';

const CardComponent = ({
    title,
    id,
    push,
    deleteAction
}) => {
    return (
        <Card style={{ width: '16rem' }} className="card text-center mx-auto">
            <Card.Header>
                <Row>
                    <Col xs="8" className="d-flex align-items-center">
                        <Card.Title className="p-0 m-0">{title}</Card.Title>
                    </Col>
                    <Col xs="4" className="d-flex justify-content-end">
                        <Button
                            onClick={() => deleteAction(id)}
                            variant="danger"
                        >
                            {DELETE}
                        </Button>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Img 
                    src="https://fotos.perfil.com/2020/04/06/ford-mustang-gt-50-935823.jpg" 
                    alt="auto"
                    variant="top"
                    className="mb-3 rounded"
                />
                <Button
                    onClick={() => push(`/inspection/${id}`)}
                    variant="success"
                    className="btn-black"
                >
                    {VIEW}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;