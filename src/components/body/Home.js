import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import BuildFuture from "./BuildFuture";
import "./home.css";

const Home = () => {
	return (
		<>
			<Navbar />
			<BuildFuture />
			<Footer />
		</>
	);
};

export default Home;
