import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const MovieDetails = () => {
  const params = useParams();
  console.log(params.filmId);
  const [filmdetail, setFilmDetail] = useState({});
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + params.filmId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMzOTYzMzZkZTM0YTAwMTk3YTEyOTUiLCJpYXQiOjE3MDczMTY3ODcsImV4cCI6MTcwODUyNjM4N30.UQoJxRhufOrPBCjyYHfJtXRJTqZGXUu6IQfpq7kLFKI",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((commenti) => {
        console.log(commenti);
        setComments(commenti);
      })
      .catch((errore) => {
        console.log("errore nella chiamata dei commenti", errore);
      });
  };

  const detailFetch = () => {
    fetch("http://www.omdbapi.com/?apikey=2eb42a5c&s=&i=" + params.filmId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        setFilmDetail(data);
      })
      .catch((err) => {
        console.log("errore nella fetch", err);
      });
  };

  useEffect(() => detailFetch(), []);
  useEffect(() => fetchComments(), []);
  // console.log(comments, "questo è lo stato dei commenti");
  return (
    <Row className="justify-content-center">
      <Col className="col-12 col-md-6 col-lg-4">
        <img src={filmdetail.Poster} alt="fotofilm" />
      </Col>
      <Col className="text-white d-flex flex-column justify-content-center">
        <h1>{filmdetail.Title}</h1>
        <p className="fw-semibold">{filmdetail.Actors}</p>
        <p>{filmdetail.Plot}</p>
        <p className="text-secondary">{filmdetail.DVD}</p>
        <div>
          <Button variant="light" style={{ width: "100px" }}>
            Riproduci
          </Button>
          <Button variant="dark" style={{ width: "100px" }}>
            Scarica
          </Button>
        </div>
      </Col>
      <Row className="mt-4">
        <Col className="text-white col-12 text-start">
          {/* <Button variant="light" style={{ width: "100px" }}> */}
          <i className="bi bi-chat-square fw-semibold fs-4 me-2"></i>
          {/* </Button> */}

          <span>Leggi i commenti</span>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-white col-12 col-md-5 ">
          {comments.map((commento) => {
            return (
              <ListGroup>
                <ListGroup.Item className="bg-black text-white mt-2 d-flex justify-content-between border-0">
                  {commento.comment}
                  <span>{commento.rate}</span>
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </Col>
      </Row>
    </Row>
  );
};
export default MovieDetails;
