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
  const [startingWeight, setStartingWeight] = useState<number>();
  const [maximumWeight, setMaximumWeight] = useState<number>();

  const [compName, setCompName] = useState<string>("");
  const [compNumber, setCompNumber] = useState<number>();
  const [nationality, setNationality] = useState<string>("");
  const [gender, setGender] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [achivedPlace, setAchivedPlace] = useState<number>();

  const [sponsorName, setSponsorName] = useState<string>("");
  const [sponsorNationality, setSponsorNationality] = useState<string>("");
  const [sponsorPlaceholder, setSponsorPlaceholder] = useState<string>("");
  const [sponsorType, setSponsorType] = useState<string>("");

  const [dataType, setDataType] = useState(1);

  const history = useHistory();

  useEffect(() =>{
    reset();
  },[dataType])

  const reset = () => {
    setcategoryName(0);
    setStartingWeight(0);
    setMaximumWeight(0);

    setCompName("");
    setCompNumber(0);
    setNationality("");
    setGender(0);
    setHeight(0);
    setWeight(0);
    setAchivedPlace(0);

    setSponsorName("");
    setSponsorNationality("");
    setSponsorPlaceholder("");
    setSponsorType("");
  }

  const headers = {
    Authorization: "Bearer " + props.account?.token,
  };

  const createNew = () => {
    const data = {
      Name: categoryName,
      StartingWeight: startingWeight,
      MaximumWeight: maximumWeight,
    };

    axios
      .post("/category", data, { headers: headers })
      .then((res) => {
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createNewCompetitor = () => {
    const data = {
      Name: compName,
      Number: compNumber,
      Nationality: nationality,
      Gender: gender,
      Height: height,
      Weight: weight,
      AchivedPlace: achivedPlace,
    };

    axios
      .post("/competitor", data, { headers: headers })
      .then((res) => {
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createNewSponsor = () => {
    const data = {
      Name: sponsorName,
      Nationality: sponsorNationality,
      Placeholder: sponsorPlaceholder,
      Type: sponsorType,
    };

    axios
      .post("/sponsor", data, { headers: headers })
      .then((res) => {
        reset();
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
                  <InputLabel id="demo-simple-select-label">
                    Name of the category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryName}
                    onChange={(e) => setcategoryName(e.target.value as number)}
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
                  value={startingWeight}
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
                  value={maximumWeight}
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
                  Create
                </Button>
              </ThemeProvider>
            </div>

            <div className="w-full px-12 mt-12 items-center text-center">
              <p className="cursor-pointer" onClick={() => setDataType(2)}>
                Add a competitor
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex-col w-1/2 my-24 items-center">
            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Name"
                  type="text"
                  style={{ width: "100%" }}
                  onChange={(e) => setCompName(e.target.value)}
                  value={compName}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Number"
                  type="number"
                  style={{ width: "100%" }}
                  onChange={(e) => setCompNumber(Number(e.target.value))}
                  value={compNumber}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Nationality"
                  type="text"
                  style={{ width: "100%" }}
                  onChange={(e) => setNationality(e.target.value)}
                  value={nationality}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <FormControl className="w-full">
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value as number)}
                  >
                    <MenuItem value={0}>Male</MenuItem>
                    <MenuItem value={1}>Female</MenuItem>
                    <MenuItem value={2}>Other</MenuItem>
                  </Select>
                </FormControl>
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Height"
                  type="number"
                  style={{ width: "100%" }}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  value={height}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Weight"
                  type="number"
                  style={{ width: "100%" }}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  value={weight}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Achived Place"
                  type="number"
                  style={{ width: "100%" }}
                  onChange={(e) => setAchivedPlace(Number(e.target.value))}
                  value={achivedPlace}
                />
              </ThemeProvider>
            </div>

            <div className="w-full px-12 mt-12 items-center text-center">
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  style={{ outline: "none" }}
                  onClick={createNewCompetitor}
                >
                  Create
                </Button>
              </ThemeProvider>
            </div>

            <div className="w-full px-12 mt-12 items-center text-center">
              <p className="cursor-pointer" onClick={() => setDataType(3)}>
                Add a sponsor
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex-col w-1/2 my-24 items-center">
            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Sponsor Name"
                  type="text"
                  style={{ width: "100%" }}
                  onChange={(e) => setSponsorName(e.target.value)}
                  value={sponsorName}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Sponsor Nationality"
                  type="text"
                  style={{ width: "100%" }}
                  onChange={(e) => setSponsorNationality(e.target.value)}
                  value={sponsorNationality}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Sponsor Placeholder"
                  type="text"
                  style={{ width: "100%" }}
                  onChange={(e) => setSponsorPlaceholder(e.target.value)}
                  value={sponsorPlaceholder}
                />
              </ThemeProvider>
            </div>

            <div className="relative w-full px-12 mt-12">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Sponsor Type"
                  type="text"
                  style={{ width: "100%" }}
                  onChange={(e) => setSponsorType(e.target.value)}
                  value={sponsorType}
                />
              </ThemeProvider>
            </div>

            <div className="w-full px-12 mt-12 items-center text-center">
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  style={{ outline: "none" }}
                  onClick={createNewSponsor}
                >
                  Create
                </Button>
              </ThemeProvider>
            </div>
          </div>
        );
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
