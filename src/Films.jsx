import { Component } from "react";
import { Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class Films extends Component {
  state = {
    film: [],
    isLoading: true,
  };

  filmFetch = (nameOfFilm) => {
    fetch("http://www.omdbapi.com/?apikey=2eb42a5c&s=" + nameOfFilm)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((totalFilms) => {
        // console.log(totalFilms.Search);
        // totalFilms.search mi torna l'array di film di harry potter
        this.setState(() => ({
          film: totalFilms.Search,
          isLoading: false,
        }));
      })
      .catch((err) => {
        console.log("errore nella chiamata", err);
        <Alert variant="danger">Si è verificato un errore di rete</Alert>;
      });
  };

  componentDidMount() {
    this.filmFetch(this.props.nameOfFilm);
  }

  render() {
    // console.log(this.state.film);

    return this.state.isLoading ? (
      <Spinner variant="danger"></Spinner>
    ) : (
      this.state.film.slice(0, 6).map((film) => {
        return (
          <div className="col mb-2 text-center px-1" key={film.imdbID}>
            <img className="img-fluid" src={film.Poster} alt="moviepicture" />
          </div>
        );
      })
    );
  }
}
export default Films;
