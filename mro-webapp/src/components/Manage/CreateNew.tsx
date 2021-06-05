import React, { useEffect, useState } from "react";
import Pic from "../../assets/pickerbg.jpg";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../Footer";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";
import axios from "../../axios";
import { EyeIcon } from "@heroicons/react/outline";
import { IRootState } from "../../store/reducers";
import { connect } from "react-redux";
import { login } from "../../store/reducers/authentication";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
  },
});

export interface ISignInProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{}> {}

function CreateNew(props: ISignInProps) {
  const [categoryName, setcategoryName] = useState<number>();
  const [startingWeight, setStartingWeight] = useState<number>(0);
  const [maximumWeight, setMaximumWeight] = useState<number>(0);

  const [dataType, setDataType] = useState(1);

  const history = useHistory();

  const createNew = () => {
    const data = {
      Name: categoryName,
      StartingWeight: startingWeight,
      MaximumWeight: maximumWeight,
    };

    axios
      .post("/category", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderForm = () => {
    switch (dataType) {
      default:
      case 1:
        return (
          <div className="flex-col w-1/2 my-24 items-center">
            <div className="w-full px-12 mt-48">
              <ThemeProvider theme={theme}>
                <FormControl className="w-full">
                  <InputLabel id="demo-simple-select-label">Name of the category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryName}
                    onChange={(e)=>setcategoryName(e.target.value as number)}
                  >
                    <MenuItem value={0}>MrOlympia</MenuItem>
                    <MenuItem value={1}>ClassicPhysique</MenuItem>
                    <MenuItem value={2}>MensPhisyque</MenuItem>
                    <MenuItem value={3}>WomensBikini</MenuItem>
                  </Select>
                </FormControl>
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Starting Weight"
                  type="number"
                  style={{ width: "100%" }}
                  onChange={(e) => setStartingWeight(Number(e.target.value))}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Maximum Weight"
                  type="number"
                  style={{ width: "100%" }}
                  onChange={(e) => setMaximumWeight(Number(e.target.value))}
                />
              </ThemeProvider>
            </div>

            <div className="w-full px-12 mt-12 items-center text-center">
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  style={{ outline: "none" }}
                  onClick={createNew}
                >
                  Crate
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
        );

      case 2:
        break;
    }
  };

  return (
    <div className="flex-col bg-gray-50" style={{ height: "90vh" }}>
      <div className="flex h-full">
        <div
          className="w-1/2 bg-local bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${Pic}')` }}
        >
          <div className="h-full w-full bg-red-900 bg-opacity-60"></div>
        </div>

        {renderForm()}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isSuccess: authentication.loginSuccess,
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CreateNew);
