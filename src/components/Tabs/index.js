import React, { useEffect,useState } from "react";
import {
  Col,
  Row,
  Card,
  Tab ,
  Tabs
} from "react-bootstrap";
import map from 'lodash/map';
import uniqBy from "lodash/uniqBy";
import filter from "lodash/filter";
import upperCase from "lodash/upperCase";
import Rating from "../Ratings";
import '../../styles/Tabs.scss';

const MenuTab = ({items,tabs}) => {
  const [categories, setCategories] = useState(null);
  
  useEffect(() => {
    if(items) setCategories(uniqBy(items.property, 'category.name'))
  }, [items])

  return (
      <>
        {items && categories && categories.length > 0 && (
          <Col xs="10" className="p-0 mx-auto">
            <h1 className="text-center">{items.name}</h1>
            <Tabs
              defaultActiveKey="1"
              id="uncontrolled-tab-example"
              className="tabs mb-3"
            >
              {tabs && tabs.length > 0 && (
                map(tabs, (pointer,key) => (
                  <Tab key={key} eventKey={key+1} title={upperCase(pointer.name)}>
                    {map(filter(items.property,{ 'categoryId': key+1 }), (current,idx) => (
                        <Row key={idx} className="text-center">
                          <Col xs="12" sm="6" className="p-0">
                              <Card.Text>{current.name}</Card.Text>
                          </Col>
                          {map(items.values.filter(val => val.propertyId === current.id), (point,i) => (
                            <Col xs="12" sm="6" className="p-0" key={i}>
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
