import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Home from "./Home";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#867FF4" };
  const btnstyle = { backgroundColor: "#867FF4", margin: "10px 0px" };
  const unameStyle = { margin: "20px 0px" };
  const passStyle = { margin: "10px 0px" };
  //   const btnStyle={margin:"10px 0px"};
  const remStyle = { margin: "10px 0px" };
  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={Home}/>
          </Routes>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login as Influencer</h2>
          </Grid>
          {/* <TextField label="First Name" variant="standard"placeholder='Enter First name' fullWidth={true}/>
            <TextField label="Last Name" variant="standard"placeholder='Enter Last name' fullWidth={true} /> */}
          <TextField
            label="Username"
            variant="standard"
            placeholder="Enter username"
            fullWidth={true}
            style={unameStyle}
          />
          <TextField
            label="Password"
            variant="standard"
            placeholder="Enter password"
            type="password"
            fullWidth={true}
            style={passStyle}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Password"
            style={remStyle}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            className="Signinbtn"
            style={btnstyle}
          >
            Log in
          </Button>
          <Link to="/about">
          <Grid align="center">
            <Avatar style={avatarStyle}>
                        <HomeOutlinedIcon />
            </Avatar>
          </Grid>
          </Link>``
        </Paper>
      </Grid>
      {/* </Router> */}
    </>
  );
};
export default Login;
