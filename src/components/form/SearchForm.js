
import React,{useState} from "react";
import {  Form, Row, Button, Col } from "react-bootstrap";



export const SearchForm = ({handleOnSubmit, handleOnChange,value}) => {
 

  return (
    <>
    <Form className="d-flex justify-content-center" onSubmit={handleOnSubmit}>
      <Row>
        <Col>
          <Form.Control value={value} placeholder="Search...." onChange={handleOnChange} required/>
        </Col>
        <Col>
          <Button varaint="warning" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
   
    </>

  );
};
