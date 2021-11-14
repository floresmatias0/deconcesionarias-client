import React from "react";
import {
  Col,
  Row,
  Card,
  Tab ,
  Tabs
} from "react-bootstrap";
import map from 'lodash/map';
import filter from "lodash/filter";
import upperCase from "lodash/upperCase";
import Rating from "../Ratings";
import '../../styles/Tabs.scss';

const MenuTab = ({
  items,
  tabs
}) => {
  return (
      <>
        {items && (
          <Col xs="10" className="p-0 mx-auto">
            <h2 className="subtitle text-center">{items.name}</h2>
            <Tabs
              defaultActiveKey="1"
              id="uncontrolled-tab-example"
              className="tabs"
            >
              {tabs && tabs.length > 0 && (
                map(tabs, (pointer,key) => (
                  <Tab className="tab-body py-3" key={key} eventKey={key+1} title={upperCase(pointer.name)}>
                    {map(filter(items.property,{ 'categoryId': key+1 }), (current,idx) => (
                        <Row key={idx} className="text-center">
                          <Col xs="12" sm="8" md="6" className="p-0 my-2">
                              <Card.Text>{current.name}</Card.Text>
                          </Col>
                          {map(items.values.filter(val => val.propertyId === current.id), (point,i) => (
                            <Col xs="12" sm="4" md="6" className="p-0 my-2" key={i}>
                              <Rating 
                                propertyId={point.propertyId}
                                valueId={point.id}
                                value={point.value}
                              />
                            </Col>
                          ))}
                        </Row>
                    ))}
                  </Tab>
                ))
              )}
            </Tabs>
          </Col>
        )}
      </>
  );
}

export default MenuTab;
