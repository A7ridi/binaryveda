import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";

function Nvabar() {
	return (
		<>
			{["sm"].map((expand) => (
				<Navbar key={expand} expand={expand} className="mb-3 navbar">
					<Container fluid className="navbar-responsive">
						<Navbar.Brand className="text-white">
							Marvel | Developers
						</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
									className="text-white"
								>
									Marvel | Developers
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3 gap-nav-link">
									<NavDropdown
										title="Why Marvel"
										id={`offcanvasNavbarDropdown-expand-${expand}`}
										className="text-light"
									>
										<NavDropdown.Item href="#action3">
											Iron Man
										</NavDropdown.Item>
										<NavDropdown.Item href="#action4">
											Ms. Marvel
										</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item>Thor</NavDropdown.Item>
									</NavDropdown>

									<Nav.Link className="text-light">Enterprise</Nav.Link>
									<Nav.Link className="text-light">Pricing</Nav.Link>
									<Nav.Link className="text-light">Sign in</Nav.Link>
									<Button className="sign-up">Sign up free</Button>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}

export default Nvabar;
