/* eslint-disable no-restricted-globals */
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  competitorId: string;
  number: number;
  name: string;
  nationality: string;
  gender: any;
  height: number;
  weight: number;
  achivedPlace: number;
}

export interface ISponsor {
  sponsorId: string;
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
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/competitor")
      .then((res) => {
        setCompetitiors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/sponsor")
      .then((res) => {
        setSponsors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteCategory = (id: string) => {
    axios
      .delete(`/category/${id}`)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteCompetitor = (id: string) => {
    axios
      .delete(`/competitor/${id}`)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteSponsor = (id: string) => {
    axios
      .delete(`/sponsor/${id}`)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex-col bg-gray-50">
      <div className="flex-col" style={{ minHeight: "100vh" }}>
        <section className="flex justify-evenly mb-6">
          {categories &&
            categories.map((q, qKey) => (
              <div
                key={qKey}
                className="flex-col bg-red-500 rounded-lg h-40 w-32 items-center text-center text-white font-bold"
              >
                <p className="mt-6">
                  {(q.name === 0 && "MrOlympia") ||
                    (q.name === 1 && "ClassicPhysique") ||
                    (q.name === 2 && "MensPhisyque") ||
                    (q.name === 3 && "WomensBikini")}
                </p>
                <p>{q.startingWeight}kg</p>
                <p>{q.maximumWeight}kg</p>

                <div className="flex">
                  <Link to={`/editcategory/${q?.categoryId}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button onClick={() => handleDeleteCategory(q?.categoryId)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
        </section>

        <section className="flex justify-evenly mb-6">
          {competitors &&
            competitors.map((q, qKey) => (
              <div
                key={qKey}
                className="flex-col bg-red-500 rounded-lg h-48 w-32 items-center text-center text-white font-bold"
              >
                <p className="mt-6">{q.name}</p>
                <p>{q.nationality}</p>
                <p>{q.achivedPlace}</p>
                <p>{q.height}cm</p>
                <p>{q.weight}kg</p>
                <p>{q.gender}</p>

                <div className="flex">
                  <Link to={`/editcompetitor/${q?.competitorId}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button
                    onClick={() => handleDeleteCompetitor(q?.competitorId)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
        </section>

        <section className="flex justify-evenly mb-6">
          {sponsors &&
            sponsors.map((q, qKey) => (
              <div
                key={qKey}
                className="flex-col bg-red-500 rounded-lg h-48 w-32 items-center text-center text-white font-bold"
              >
                <p className="mt-6">{q.name}</p>
                <p>{q.nationality}</p>
                <p>{q.placeholder}</p>
                <p>{q.type}</p>

                <div className="flex">
                  <Link to={`/editsponsor/${q?.sponsorId}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button onClick={() => handleDeleteSponsor(q?.sponsorId)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ViewData;
