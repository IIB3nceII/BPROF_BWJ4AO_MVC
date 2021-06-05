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

export interface ICompetitor {
  number: number;
  name: string;
  nationality: string;
  gender: any;
  height: number;
  weight: number;
  achivedPlace: number;
}

export interface ISponsor {
  name: string;
  nationality: string;
  placeholder: string;
  type: string;
}

const ViewData = () => {
  const [categories, setCategories] = useState([] as ICategory[]);
  const [competitors, setCompetitiors] = useState([] as ICompetitor[]);
  const [sponsors, setSponsors] = useState([] as ISponsor[]);

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

    axios
      .get("/competitor")
      .then((res) => {
        console.log(res);
        setCompetitiors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/sponsor")
      .then((res) => {
        console.log(res);
        setSponsors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-col">
      <div className="flex-col" style={{ minHeight: "100vh" }}>
        <section className="flex justify-evenly mb-6">
          {categories &&
            categories.map((q, qKey) => (
              <div
                key={qKey}
                className="flex-col bg-green-200 rounded-full h-1/3"
              >
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
        </section>

        <section className="flex justify-evenly mb-6">
          {competitors &&
            competitors.map((q, qKey) => (
              <div
                key={qKey}
                className="flex-col bg-green-200 rounded-full h-1/3"
              >
                <p>{q.name}</p>
                <p>{q.nationality}</p>
                <p>{q.achivedPlace}</p>
                <p>{q.height}</p>
                <p>{q.weight}</p>
                <p>{q.gender}</p>
              </div>
            ))}
        </section>

        <section>
          {sponsors &&
            sponsors.map((q, qKey) => (
              <div key={qKey}>
                <p>{q.name}</p>
                <p>{q.nationality}</p>
                <p>{q.placeholder}</p>
                <p>{q.type}</p>
              </div>
            ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ViewData;
