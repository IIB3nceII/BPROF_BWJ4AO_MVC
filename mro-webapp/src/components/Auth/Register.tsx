import React, { useState } from "react";
import Pic from "../../assets/pickerbg.jpg";
import { Button, TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../Footer";
import { Link, RouteComponentProps } from "react-router-dom";
import axios from "../../axios";
import { EyeIcon } from "@heroicons/react/outline";
import { IRootState } from "../../store/reducers";
import { connect } from "react-redux";
import { register } from "../../store/reducers/authentication";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
  },
});

export interface IRegisterProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{}> {}

function Register(props: IRegisterProps) {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);

  const sendRegisterRequest = () => props.register(userName, password);

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
          <div>
            <h3>Join to the legend.</h3>
          </div>

          <div className="w-full px-12 mt-48">
            <ThemeProvider theme={theme}>
              <TextField
                label="Username"
                style={{ width: "100%" }}
                onChange={(e) => setUserName(e.target.value)}
              />
            </ThemeProvider>
          </div>

          <div
            className="relative w-full px-12 mt-12"
            onMouseLeave={() => setPasswordFocused(false)}
          >
            <ThemeProvider theme={theme}>
              <TextField
                label="Password"
                type={isVisible ? "text" : "password"}
                style={{ width: "100%" }}
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => setPasswordFocused(true)}
              />
            </ThemeProvider>
            <EyeIcon
              className="w-5 absolute right-12 top-1/4 cursor-pointer"
              onMouseDown={() => setIsVisible(true)}
              onMouseUp={() => setIsVisible(false)}
              style={{ color: `${passwordFocused ? "#d32f2f" : "black"}` }}
            />
          </div>

          <div className="w-full px-12 mt-12 items-center text-center">
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                style={{ outline: "none" }}
                onClick={sendRegisterRequest}
              >
                Register
              </Button>
            </ThemeProvider>
          </div>

          <div className="w-full px-12 mt-12 items-center text-center">
            <p>
              If you don't have an account please{" "}
              <Link to="/register" className="cursor-pointer hover:underline">
                register!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />s
    </div>
  );
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
});

const mapDispatchToProps = { register };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Register);
