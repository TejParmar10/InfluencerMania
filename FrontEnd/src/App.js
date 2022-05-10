import React from "react";
// import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Login from "./components/Login";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import ReactDOM from "react-dom";
import{FooterContainer} from "./components/footer/footer"
const App = () => {
  return (
    <>
   <Router>
      <Routes> 
        <Route  path="/" element={<Home/>}>
          </Route>
      </Routes>
      <Routes>
      <Route path="/about" element={<About/>}>
      </Route>
      </Routes>
      <Routes> 
      <Route path="/signin" element={<Signin/>}>
      </Route>
      </Routes>
      <Routes>
      <Route  path="/contact" element={<Contact/>}>
      </Route>
      <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
    </Router>
    <FooterContainer/>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
export default App;