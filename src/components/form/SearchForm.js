
import React,{useState} from "react";
import { Alert, Form, Row, Button, Col } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { fetchMovie } from "../helpers/axiosHelper";

export const SearchForm = () => {
  const [search, setSearch] = useState("")
  const [movie, setMovie] = useState({})
const handleOnChange=e=>{
  console.log(e.target.value)
  const{value} = e.target
  setSearch(value)
}

const handleOnSubmit= async e=>{
  e.preventDefault()
  

  const movie1 = await fetchMovie(search)
  setMovie(movie1.data)
}

  return (
    <>
    <Form className="d-flex justify-content-center" onSubmit={handleOnSubmit}>
      <Row>
        <Col>
          <Form.Control placeholder="Search...." onChange={handleOnChange} required/>
        </Col>
        <Col>
          <Button varaint="warning" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
    <Row>
      <Col className="d-flex justify-content-center" >
        {movie.Response ==='True' && <CustomCard movie={movie}/>}
        
        {movie.Response ==='False' && (
        <Alert variant='danger'>
          {movie.Error}
        </Alert>)}
      
        
      </Col>
    </Row>
    </>

  );
};
