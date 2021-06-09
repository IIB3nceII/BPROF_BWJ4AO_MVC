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

export interface ICategory {
  CategoryId: string;
  MaximumWeight: number;
  Name: any;
  StartingWeight: number;
}

function Edit({ match }: any) {
  const [category, setCategory] = useState<ICategory>();

  const authentication = useSelector((state: any) => state.authentication);

  const history = useHistory();

  const headers = {
    Authorization: "Bearer " + authentication.account?.token,
  };

  useEffect(() => {
    axios
      .get(`/category/${match.params.id}`, { headers: headers })
      .then((res) => {
        const newCategory = {
          CategoryId: res.data.categoryId as string,
          Name: res.data.name as string,
          StartingWeight: res.data.startingWeight as number,
          MaximumWeight: res.data.maximumWeight as number,
        };
        setCategory(newCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateteName = (e: any) => {
    const newCategory = category;
    if (newCategory) {
      newCategory.Name = e.target.value as string;
    }
    setCategory(newCategory);
  };

  const updateStartingWeight = (e: any) => {
    const newCategory = category;
    if (newCategory) {
      newCategory.StartingWeight = Number(e);
    }
    setCategory(newCategory);
  };

  const updateMaximumWeight = (e: any) => {
    const newCategory = category;
    if (newCategory) {
      newCategory.MaximumWeight = Number(e);
    }
    setCategory(newCategory);
  };

  const editCategory = () => {
    axios
      .put(`/category/${category?.CategoryId}`, category, { headers: headers })
      .then((res) => {
        history.push("/view");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex-col bg-gray-50">
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
                value={category?.Name}
                onChange={(e) => updateteName(e)}
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
              onChange={(e) => updateStartingWeight(e.target.value)}
            />
          </ThemeProvider>
        </div>

        <div className="relative w-full px-12 mt-12">
          <ThemeProvider theme={theme}>
            <TextField
              label="Maximum Weight"
              type="number"
              style={{ width: "100%" }}
              onChange={(e) => updateMaximumWeight(e.target.value)}
            />
          </ThemeProvider>
        </div>

        <div className="w-full px-12 mt-12 items-center text-center">
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              style={{ outline: "none" }}
              onClick={editCategory}
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

export default Edit;
