import { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import "./App.css";
import { SearchForm } from "./components/form/SearchForm";
import { Title } from "./components/title/Title";
import { MovieList } from "./components/movie-list/MovieList";
import { CustomCard } from "./components/card/CustomCard";
import { fetchMovie } from "./components/helpers/axiosHelper";
const App = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});
  const [movieLists, setMovieLists] = useState([]);
  const [movieMainList, setmovieMainList] = useState([]);

  const handleOnDelete = (imdbID) => {
    const filteredList = movieMainList.filter((itm) => itm.imdbID !== imdbID);
    setMovieLists(filteredList);
    setmovieMainList(filteredList);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    setSearch(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const movie1 = await fetchMovie(search);
    setMovie(movie1.data);
    setSearch("");
  };

  const handleOnSelect = (cat) => {
    let filterArgs = [];
    if (cat) {
      filterArgs = movieMainList.filter((itm) => itm.cat === cat);
    } else {
      filterArgs = movieMainList;
    }
    setMovieLists(filterArgs);
  };


  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };

    !movieLists.length && setMovieLists([obj] && setmovieMainList([obj]));

    const isExist = movieLists.find((item) => item.imdbID === movie.imdbID);

    if (!isExist) {
      setMovieLists([...movieLists, obj]);
      setmovieMainList([...movieMainList, obj]);
      setMovie({})
    } else {
      alert("Movie already in the list");
    }
  };

  return (
    <>
      <div className="wrapper">
        <Container>
          <Title />
          <SearchForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            value={search}
          />

          <div className="d-flex justify-content-center">
            {movie.Response === "True" && (
              <CustomCard movie={movie} fun={handleOnAddToList} />
            )}

            {movie.Response === "False" && (
              <Alert variant="danger">{movie.Error}</Alert>
            )}
          </div>
          <hr />
          <MovieList movieList={movieLists} handleOnDelete={handleOnDelete} handleOnSelect={handleOnSelect}/>
        </Container>
      </div>
    </>
  );
};

export default App;
