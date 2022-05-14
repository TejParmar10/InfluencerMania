import React from "react";
import Navbar from "./Navbar";
import Carousel from "react-elastic-carousel";
import Item from "./HomeStyle";
import nike from "../images/nike.png";
import adidas from "../images/Adidas.png";
import armani from "../images/Armani.png";
import zara from "../images/Zara.png";
import subway from "../images/Subway.png";
import puma from "../images/Puma.png";
// import "./styles.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//  import Jumbotron from 'react-bootstrap/Jumbotron';
// import 'bootstrap/dist/css/bootstrap.min.css';
const breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 550, itemsToShow: 2},
	{width: 768, itemsToShow: 3},
	{width: 1200, itemsToShow: 4},
];
const Home = () => {
	return (
		<>
			<Navbar/>
			{/* <Routes>
          <Route path="/ourpeople"></Route>
        </Routes> */}
			<section className="hero-section">
				<div className="row">
					{/* <Jumbotron> */}
				<h1 style={{textAlign: "center"}}>Our Collaborations</h1>
				<div className="App">
					<Carousel breakPoints={breakPoints} isRTL={false}>
						<Item><img src={nike} alt={''}></img></Item>
						<Item><img src={adidas} alt={''}></img></Item>
						<Item><img src={zara} alt={''}></img></Item>
						<Item><img src={subway} alt={''}></img></Item>
						<Item><img src={armani} alt={''}></img></Item>
						<Item><img src={puma} alt={''}></img></Item>
					</Carousel>
					</div>
				</div>
			</section>
		</>
	);
};
export default Home;