import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Footer from "../Footer";

export interface ICategory {
  categoryId: string;
  competitors: [];
  maximumWeight: number;
  name: any;
  startingWeight: number;
}

function Edit() {
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
    <div>
      <div>
        {categories &&
          categories.map((q, qKey) => (
            <div key={qKey}>
              <p>
                {(q.name === 0 && "MrOlympia") ||
                  (q.name === 1 && "ClassicPhysique") ||
                  (q.name === 2 && "MensPhisyque") ||
                  (q.name === 3 && "WomensBikini")}
              </p>
              <p>{q.startingWeight}</p>
              <p>{q.maximumWeight}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Edit;
