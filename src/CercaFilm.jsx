import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class CercaFilm extends Component {
  state = {
    parolaCercata: "",
    searchedFilm: [],
  };

  searchFunction = () => {
    fetch(
      "http://www.omdbapi.com/?apikey=2eb42a5c&s=" + this.state.parolaCercata
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((arrayDiFilmTrovati) => {
        // console.log(arrayDiFilmTrovati)
        this.setState({
          searchedFilm: arrayDiFilmTrovati.Search,
        });
        // console.log(arrayDiFilmTrovati.Search);
      })
      .catch((errore) => {
        console.log("errore nella chiamata di search", errore);
      });
  };

  render() {
    return (
      <>
        <Col>
          <Form.Control
            type="search"
            placeholder="Search"
            value={this.state.parolaCercata}
            onChange={(e) => {
              this.setState({
                parolaCercata: e.target.value,
              });
              // console.log(this.state);
            }}
          />
          <Button onClick={this.searchFunction}>
            <i className="bi bi-search icons text-white"></i>
          </Button>
        </Col>

        {this.state.searchedFilm.length > 0 ? (
          <div className="row">
            {this.state.searchedFilm.slice(0, 6).map((film) => (
              <div key={film.imdbID} className="col-2">
                <span className="text-white">{film.Title}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>Nessun film trovato</p>
        )}
      </>
    );
  }
}

export default CercaFilm;
