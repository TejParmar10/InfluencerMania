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
					<div className="col-md-7 col-lg-7">
						<div className="jumbotron-caption">
							<h1>Top Influencer Marketing Agency (Platform) India</h1>
							<p>InfluencerMania is a leading Influencer marketing agency in India which provides the best influencer
								marketing
								platform to help brands / visionary marketers leverage social media influencers content in marketing the
								product (service). Our influencer marketing experts unite brands with top 50,000+ content creators,
								social
								media influencers, artists and bloggers with interested viewers (potential customers) for executing
								remarkable
								influencer marketing campaigns.</p>
							{/* <div className="banner-cta">
              <a onclick="return redirectToCreator()" className="btn btn-info">I am a Creator</a>
              <a onclick="return redirectToBrand()" className="btn btn-danger">I am a Brand</a>
            </div> */}
						</div>
					</div>
					<div className="col-md-5 col-lg-5">
						<div className="jumbotron-slider">
							<img name="slide" id="slider" className="img-fluid" alt=""/>
						</div>
					</div>
					{/* </Jumbotron> */}
				</div>
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
			</section>
		</>
	);
};
export default Home;