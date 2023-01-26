import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";
import Logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

function Nvabar() {
	const navigate = useNavigate();
	return (
		<>
			{["sm"].map((expand) => (
				<Navbar key={expand} expand={expand} className="mb-3 navbar">
					<Container fluid className="navbar-responsive">
						<Navbar.Brand className="text-white">
							<div className="d-flex nav-logo">
								<img src={Logo} alt="logo" width={50} />| Developers
							</div>
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
									<div className="d-flex">
										<img
											src={Logo}
											alt="logo"
											width={50}
											className="nav-logo"
										/>
										| Developers
									</div>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3 gap-nav-link">
									<NavDropdown
										title="Why Marvel"
										id={`offcanvasNavbarDropdown-expand-${expand}`}
										className="text-light"
										onClick={() => navigate("/todo")}
									>
										<NavDropdown.Item href="#action3" className="text-light">
											Iron Man
										</NavDropdown.Item>
										<NavDropdown.Item href="#action4" className="text-light">
											Ms. Marvel
										</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item className="text-light">
											Thor
										</NavDropdown.Item>
									</NavDropdown>

									<Nav.Link
										className="text-light"
										onClick={() => navigate("/todo")}
									>
										Enterprise
									</Nav.Link>
									<Nav.Link
										className="text-light"
										onClick={() => navigate("/todo")}
									>
										Pricing
									</Nav.Link>
									<Nav.Link
										className="text-light"
										onClick={() => navigate("/todo")}
									>
										Sign in
									</Nav.Link>
									<Button className="sign-up" onClick={() => navigate("/todo")}>
										Sign up free
									</Button>
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
