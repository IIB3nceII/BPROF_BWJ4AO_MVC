import { Button } from "@material-ui/core";
import React from "react";
import { ICategory } from "../ViewData";

function DataCard(props: ICategory) {
  const { categoryId, competitors, maximumWeight, name, startingWeight } =
    props;

  return (
    <div className="flex-col rounded-lg bg-local bg-no-repeat bg-cover m-5 text-white">
      <div
        className="flex-col bg-red-900 shadow-2xl rounded-lg"
        style={{ height: "50vh", width: "25vw" }}
      >
        <div className="p-10 text-center">
          <div>
            <h4 className="mx-auto mt-12 text-4xl font-medium">{name}</h4>
          </div>

          <div className="flex justify-between m-20 text-lg font-medium">
            <p>{startingWeight}kg</p>
            <p>{maximumWeight}kg</p>
          </div>

          <div>
              <Button style={{color: "white"}}>
                  View competitors
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
