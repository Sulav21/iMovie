import React,{useState} from "react";
import { Row, Col, Button, ButtonGroup, Card } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({movieList,handleOnDelete,handleOnSelect}) => {
 
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between py-3">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="warning" onClick={()=>handleOnSelect()}>All</Button>
            <Button variant="primary" onClick={()=>handleOnSelect("happy")}>Happy</Button>
            <Button variant="danger" onClick={()=>handleOnSelect("lazy")}>Lazy</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="primary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
          </div>
        
      </Col>
         
         
        
      
        <div className="d-flex justify-content-right gap-5 flex-wrap">
        {movieList.map((movie,i)=>{

          return <CustomCard key={i} movie={movie} btnDelete={true} fun={handleOnDelete}/>
        })}
        
        </div>
        
    </Row>
  );
};
