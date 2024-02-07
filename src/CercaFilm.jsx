import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
          <Row className="mt-5">
            {this.state.searchedFilm.slice(0, 6).map((film) => (
              <Col className="col-12 col-md-4 col-lg-3" key={film.imdbID}>
                <Link to={"/Movies/" + film.imdbID}>
                  <Card className="text-white bg-black">
                    <Card.Img variant="top" src={film.Poster} />
                    <Card.Body>
                      <Card.Title>{film.Title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <p>Nessun film trovato</p>
        )}
      </>
    );
  }
}

export default CercaFilm;
