import React,{useState} from "react";
import { Row, Col, Button, ButtonGroup, Card } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = () => {
 
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between py-3">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="warning">All</Button>
            <Button variant="primary">Happy</Button>
            <Button variant="danger">Sad</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="primary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </div>
        <div className="filter d-flex gap-2 justify-content-between py-3">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        </div>
      </Col>
    </Row>
  );
};
