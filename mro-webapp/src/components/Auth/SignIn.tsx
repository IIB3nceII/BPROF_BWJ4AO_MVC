import React from "react";
import Pic from "../../assets/pickerbg.jpg";
import { Button, TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
  },
});

function SignIn() {
  return (
    <div className="flex-col bg-gray-50" style={{ height: "90vh" }}>
      <div className="flex h-full">
        <div
          className="w-1/2 bg-local bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${Pic}')` }}
        >
          <div className="h-full w-full bg-red-900 bg-opacity-60"></div>
        </div>

        <div className="flex-col w-1/2 my-24 items-center">
          <div className="w-full px-12 mt-48">
            <ThemeProvider theme={theme}>
              <TextField label="Email" style={{ width: "100%" }} />
            </ThemeProvider>
          </div>
          <div className="w-full px-12 mt-12">
            <ThemeProvider theme={theme}>
              <TextField label="Password" style={{ width: "100%" }} />
            </ThemeProvider>
          </div>
          <div className="w-full px-12 mt-12 items-center text-center">
            <Button variant="outlined">Sign In</Button>
          </div>

          <div className="w-full px-12 mt-12 items-center text-center">
            <p>
              if you don't have an account{" "}
              <Link to="/register" className="cursor-pointer hover:underline">
                register!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
