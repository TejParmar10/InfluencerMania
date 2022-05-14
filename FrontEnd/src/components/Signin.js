import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
// import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import "./Signin.css";
// import Login as "./Login.js";
const Signin = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#867FF4" };
  const btnstyle = { backgroundColor: "#867FF4", margin: "10px 0px" };
  return (
    <>
    <Form action="/signin" method="POST">
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in as Influencer</h2>
          </Grid>
          <TextField
          id="fname"
          name="fname"
            label="First Name"
            variant="standard"
            placeholder="Enter First name"
            fullWidth={true}
          />
          <TextField
          id="lname"
          name="lname"
            label="Last Name"
            variant="standard"
            placeholder="Enter Last name"
            fullWidth={true}
          />
          <TextField
          id="uname"
          name="uname"
            label="Username"
            variant="standard"
            placeholder="Enter username"
            fullWidth={true}
          />
          <TextField
          id="pass"
          name="pass"
            label="Password"
            variant="standard"
            placeholder="Enter password"
            type="password"
            fullWidth={true}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Password"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            className="Signinbtn"
            style={btnstyle}
          >
            Sign in
          </Button>
          <Typography>
            <h2>Already have an account?</h2>
            <NavLink to="/login">Log In</NavLink>
          </Typography>
        </Paper>
      </Grid>
      </Form>
    </>
  );
};
export default Signin;
