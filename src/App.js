import { Container } from 'react-bootstrap';
import './App.css';
import { SearchForm } from './components/form/SearchForm';
import {Title} from './components/title/Title'
import {MovieList} from './components/movie-list/MovieList'

const App=()=> {
  return (
    <>
  <div className='wrapper'>
    <Container>
    <Title/>
    <SearchForm />
    <hr />
    <MovieList />
    </Container>

  </div>
    </>
  );
}

export default App;
