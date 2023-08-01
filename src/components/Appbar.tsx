import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavbarContent } from "../content/NavbarContent";
import LanguageTranslator from "./LanguageTranslator";

function Appbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <h1
          style={{
            fontWeight: "bold",
            fontFamily: "fantasy",
            fontSize: "30px",
            margin: "10px",
            color: "rgba(26, 38, 21, 0.68)",
          }}
        >
          AIR CHECKER
        </h1>
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
          {NavbarContent.map((value) => {
            return (
              <div key={value.id}>
                <Nav className="me-auto">
                  <Link
                    to={value.url}
                    style={{
                      textDecoration: "none",
                      fontWeight: "500",
                      marginRight: "5px",
                      color: "white",
                    }}
                  >
                    {value.name}
                  </Link>
                </Nav>
              </div>
            );
          })}

          <Navbar.Collapse className="justify-content-end">
            <LanguageTranslator />
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
