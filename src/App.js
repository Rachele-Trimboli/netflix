import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "./CustomNavbar";
import UnderNavbar from "./UnderNavbar";
import { Container } from "react-bootstrap";
import RowTitle from "./RowTitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Films from "./Films";
import MyFooter from "./MyFooter";
import CercaFilm from "./CercaFilm";

function App() {
  return (
    <div className="App bg-black">
      <header>
        <CustomNavbar></CustomNavbar>
      </header>
      <main>
        <Container fluid className="p-5 mt-2">
          <Row>
            <CercaFilm></CercaFilm>
          </Row>

          <UnderNavbar className="mt-3"></UnderNavbar>
          <Row>
            <Col>
              <RowTitle text="Preferiti"></RowTitle>
            </Col>
          </Row>

          <Row xs={2} md={4} lg={6}>
            <Films nameOfFilm="Harry-Potter"></Films>
          </Row>
          <Row>
            <Col>
              <RowTitle text="Le tue scelte"></RowTitle>
            </Col>
          </Row>

          <Row xs={2} md={4} lg={6}>
            <Films nameOfFilm="Twilight"></Films>
          </Row>
          <Row>
            <Col>
              <RowTitle text="Le nostre scelte per te"></RowTitle>
            </Col>
          </Row>
          <Row xs={2} md={4} lg={6}>
            <Films nameOfFilm="Pirates of the Caribbean"></Films>
          </Row>
          {/* <Container>
            <Profile></Profile>
          </Container> */}

          <footer>
            <MyFooter></MyFooter>
          </footer>
        </Container>
      </main>
    </div>
  );
}

export default App;
