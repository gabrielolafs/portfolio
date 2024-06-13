import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/TopNavBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNavBar = () => {
  return (
    <>
      <Navbar
        expand="md"
        sticky="top"
        className={`pl-5 pr-2 flex ${styles.navbarCustom}`}
      >
        <Navbar.Brand href="/">
          <div className={"flex"}>Logo</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/document">
              Document
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavBar;