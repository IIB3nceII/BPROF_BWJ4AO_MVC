/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Footer from "../Footer";
import DataCard from "./ManageComponents/DataCard";

export interface ICategory {
  categoryId: string;
  competitors: [];
  maximumWeight: number;
  name: any;
  startingWeight: number;
}

const ViewData = () => {
  const [categories, setCategories] = useState([] as ICategory[]);

  useEffect(() => {
    axios
      .get("/category")
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-col">
      <div className="flex" style={{ minHeight: "100vh" }}>
        {categories &&
          categories.map((q, qKey) => (
            <div key={qKey}>
              <DataCard
                categoryId={q.categoryId}
                competitors={q.competitors}
                maximumWeight={q.maximumWeight}
                name={q.name}
                startingWeight={q.startingWeight}
              />
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default ViewData;
