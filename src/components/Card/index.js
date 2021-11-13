import React from 'react';
import { Card,Button } from 'react-bootstrap';
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
            <Card.Header className="d-flex justify-content-end">
                <Button
                    onClick={() => deleteAction(id)}
                    variant="danger"
                >
                    {DELETE}
                </Button>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button
                    onClick={() => push(`/inspection/${id}`)}
                    variant="success"
                >
                    {VIEW}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;