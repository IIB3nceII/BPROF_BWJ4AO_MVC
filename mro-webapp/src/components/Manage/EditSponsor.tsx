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
import Pic from "../../assets/pickerbg.jpg";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
  },
});

export interface ISponsor {
  SponsorId: string;
  Name: string;
  Nationality: string;
  Placeholder: string;
  Type: string;
}

function EditSponsor({ match }: any) {
  const [sponsor, setSponsor] = useState<ISponsor>();

  const authentication = useSelector((state: any) => state.authentication);

  const history = useHistory();

  const headers = {
    Authorization: "Bearer " + authentication.account?.token,
  };

  useEffect(() => {
    axios
      .get(`/sponsor/${match.params.id}`, { headers: headers })
      .then((res) => {
        const newCategory = {
          SponsorId: res.data.sponsorId as string,
          Name: res.data.name as string,
          Nationality: res.data.nationality as string,
          Placeholder: res.data.placeholder as string,
          Type: res.data.type as string,
        };
        setSponsor(newCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateteName = (e: any) => {
    const newCategory = sponsor;
    if (newCategory) {
      newCategory.Name = e as string;
    }
    setSponsor(newCategory);
  };

  const updateNationality = (e: any) => {
    const newCategory = sponsor;
    if (newCategory) {
      newCategory.Nationality = e as string;
    }
    setSponsor(newCategory);
  };

  const updatePlaceholder = (e: any) => {
    const newCategory = sponsor;
    if (newCategory) {
      newCategory.Placeholder = e as string;
    }
    setSponsor(newCategory);
  };

  const updateType = (e: any) => {
    const newCategory = sponsor;
    if (newCategory) {
      newCategory.Type = e as string;
    }
    setSponsor(newCategory);
  };

  const editSponsor = () => {
    axios
      .put(`/sponsor/${sponsor?.SponsorId}`, sponsor, { headers: headers })
      .then((res) => {
        history.push("/view");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex-col bg-gray-50" style={{ height: "90vh" }}>
      <div className="flex-col h-full">
        <div
          className="w-1/2 bg-local bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${Pic}')` }}
        >
          <div className="h-full w-full bg-red-900 bg-opacity-60"></div>
        </div>

        <div className="relative w-full px-12 mt-12">
          <ThemeProvider theme={theme}>
            <TextField
              label="Sponsor Name"
              type="text"
              style={{ width: "100%" }}
              onChange={(e) => updateteName(e.target.value)}
            />
          </ThemeProvider>
        </div>

        <div className="relative w-full px-12 mt-12">
          <ThemeProvider theme={theme}>
            <TextField
              label="Sponsor Nationality"
              type="text"
              style={{ width: "100%" }}
              onChange={(e) => updateNationality(e.target.value)}
            />
          </ThemeProvider>
        </div>

        <div className="relative w-full px-12 mt-12">
          <ThemeProvider theme={theme}>
            <TextField
              label="Sponsor Placeholder"
              type="text"
              style={{ width: "100%" }}
              onChange={(e) => updatePlaceholder(e.target.value)}
            />
          </ThemeProvider>
        </div>

        <div className="relative w-full px-12 mt-12">
          <ThemeProvider theme={theme}>
            <TextField
              label="Sponsor Type"
              type="text"
              style={{ width: "100%" }}
              onChange={(e) => updateType(e.target.value)}
            />
          </ThemeProvider>
        </div>

        <div className="w-full px-12 mt-12 items-center text-center">
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              style={{ outline: "none" }}
              onClick={editSponsor}
            >
              Edit
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditSponsor;
