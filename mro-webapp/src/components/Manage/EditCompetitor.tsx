import {
  Button,
  createMuiTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "../../axios";
import Footer from "../Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
  },
});

export interface ICompetitor {
  CompetitorId: string;
  Number: number;
  Name: string;
  Nationality: string;
  Gender: number;
  Height: number;
  Weight: number;
  AchivedPlace: number;
}

function EditCompetitor({ match }: any) {
  const [competitor, setCompetitor] = useState<ICompetitor>();

  const authentication = useSelector((state: any) => state.authentication);

  const history = useHistory();

  const headers = {
    Authorization: "Bearer " + authentication.account?.token,
  };

  useEffect(() => {
    axios
      .get(`/competitor/${match.params.id}`, { headers: headers })
      .then((res) => {
        console.log(res);
        const newCompetitor = {
          CompetitorId: res.data.competitorId as string,
          Number: res.data.number as number,
          Name: res.data.name as string,
          Nationality: res.data.nationality as string,
          Gender: res.data.gender as number,
          Height: res.data.height as number,
          Weight: res.data.weight as number,
          AchivedPlace: res.data.achivedPlace as number,
        };
        setCompetitor(newCompetitor);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateteName = (e: any) => {
    const newCategory = competitor;
    if (newCategory) {
      newCategory.Name = e as string;
    }

    setCompetitor(newCategory);
  };

  const updateNumber = (e: any) => {
    const newCategory = competitor;
    if (newCategory) {
      newCategory.Number = Number(e);
    }

    setCompetitor(newCategory);
  };

  const updateNationality = (e: any) => {
    const newCategory = competitor;
    if (newCategory) {
      newCategory.Nationality = e as string;
    }

    setCompetitor(newCategory);
  };

  const updateGender = (e: any) => {
    const newCategory = competitor;
    if (newCategory) {
      newCategory.Gender = Number(e);
    }

    setCompetitor(newCategory);
  };

  const updateHeight = (e: any) => {
    const newCategory = competitor;
    if (newCategory) {
      newCategory.Height = Number(e);
    }
    setCompetitor(newCategory);
  };

  const updateWeight = (e: any) => {
    const newCategory = competitor;
    if (newCategory) {
      newCategory.Weight = Number(e);
    }
    setCompetitor(newCategory);
  };

  const updateAchivedPlace = (e: any) => {
    const newCategory = competitor;
    if (newCategory) {
      newCategory.AchivedPlace = Number(e);
    }
    setCompetitor(newCategory);
  };

  const editCompetitor = () => {
    axios
      .put(`/competitor/${competitor?.CompetitorId}`, competitor, { headers: headers })
      .then((res) => {
        history.push("/view");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="relative w-full px-12 mt-12">
        <ThemeProvider theme={theme}>
          <TextField
            label="Name"
            type="text"
            style={{ width: "100%" }}
            onChange={(e) => updateteName(e.target.value)}
          />
        </ThemeProvider>
      </div>

      <div className="relative w-full px-12 mt-12">
        <ThemeProvider theme={theme}>
          <TextField
            label="Number"
            type="number"
            style={{ width: "100%" }}
            onChange={(e) => updateNumber(Number(e.target.value))}
          />
        </ThemeProvider>
      </div>

      <div className="relative w-full px-12 mt-12">
        <ThemeProvider theme={theme}>
          <TextField
            label="Nationality"
            type="text"
            style={{ width: "100%" }}
            onChange={(e) => updateNationality(e.target.value)}
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
              onChange={(e) => updateGender(e.target.value as number)}
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
            onChange={(e) => updateHeight(e.target.value)}
          />
        </ThemeProvider>
      </div>

      <div className="relative w-full px-12 mt-12">
        <ThemeProvider theme={theme}>
          <TextField
            label="Weight"
            type="number"
            style={{ width: "100%" }}
            onChange={(e) => updateWeight(Number(e.target.value))}
          />
        </ThemeProvider>
      </div>

      <div className="relative w-full px-12 mt-12">
        <ThemeProvider theme={theme}>
          <TextField
            label="Achived Place"
            type="number"
            style={{ width: "100%" }}
            onChange={(e) => updateAchivedPlace(Number(e.target.value))}
          />
        </ThemeProvider>
      </div>

      <div className="w-full px-12 mt-12 items-center text-center">
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            style={{ outline: "none" }}
            onClick={editCompetitor}
          >
            Edit
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default EditCompetitor;
