import React from "react";
// import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Ourpeople from "./components/Ourpeople";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom";
import {FooterContainer} from "./components/footer/footer"

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/about" element={<About/>}/>
					<Route path="/ourpeople" element={<Ourpeople/>}/>
					<Route path="/ourwork" element={<Ourpeople/>}/>
					<Route path="/strategy" element={<Ourpeople/>}/>
					<Route path="/insights" element={<Ourpeople/>}/>
						<Route path="/signin" element={<Signin/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/" element={<Home/>}/>
					<Route path="/Home" element={<Home/>}/>
				</Routes>
				<FooterContainer/>
			</Router>
		</>
	);
};
ReactDOM.render(<App/>, document.getElementById("root"));
export default App;