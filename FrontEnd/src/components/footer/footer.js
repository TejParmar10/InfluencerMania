import React from "react";
import Footer from "./index.js";
import { Link } from "react-router-dom";
import Insights from "../Insights.js";
import Ourpeople from "../Ourpeople.js";
import Ourwork from "../Ourwork.js";
import Strategy from "../Strategy.js";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
export function FooterContainer() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/ourpeople" element={<Ourpeople />}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/ourwork" element={<Ourwork />}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/strategy" element={<Strategy />}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/insights" element={<Insights />}>
          </Route>
        </Routes>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    ></Box>
        <Footer>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>About</Footer.Title>
              <Footer.Link>
                <Link to="/ourpeople">Our People</Link>
              </Footer.Link>
              <Footer.Link>
                <Link to="/ourwork">Our Work</Link>
              </Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>WHAT WE DO</Footer.Title>
              <Footer.Link>
                <Link to="/strategy">Strategy</Link>
              </Footer.Link>
              <Footer.Link>
                <Link to="/Insights">Insights</Link>
              </Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Contact </Footer.Title>
              <Footer.Link>Contact:111-222-33-4</Footer.Link>
              <Footer.Link>Mail:ifluencermania@gmail.com</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Social</Footer.Title>
              <Footer.Link>Instagram</Footer.Link>
              <Footer.Link>Facebook</Footer.Link>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
      </Footer>
      </Router>
    </>
  );
};
// ReactDOM.render(<App />, document.getElementById("root"));
// export default footer;
