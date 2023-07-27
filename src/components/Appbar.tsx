import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://images.pexels.com/photos/60575/smoke-smoking-chimney-fireplace-60575.jpeg?auto=compress&cs=tinysrgb&w=1600"
              width="100"
              height="100"
              className="d-inline-block align-top rounded-circle"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginRight: "5px",
                color: "white",
              }}
            >
              Home
            </Link>
            {/* <Link
              to="/history"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginRight: "5px",
                color: "white",
              }}
            >
              History
            </Link> */}
            <Link
              to="/precaution"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginRight: "5px",
                color: "white",
              }}
            >
              Precaution
            </Link>
            <Link
              to="/causes"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginRight: "5px",
                color: "white",
              }}
            >
              Causes
            </Link>
            <Link
              to="/avoid"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginRight: "5px",
                color: "white",
              }}
            >
              Avoid
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
