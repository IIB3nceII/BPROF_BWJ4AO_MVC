import React from "react";
import "./Home.scss";
import HomeBg from "../../assets/2020-Olympia-bg.jpg";

import MensOpen from "../../assets/mop01.jpg";
import WmBikini from "../../assets/wmbikini01.jpg";
import ClassicPhysique from "../../assets/classic01.jpg";
import MensPhisyque from "../../assets/mens01.jpg";
import WmPhisyque from "../../assets/wmsp01.jpg";
import MrO from "../../assets/brendonprofp.jpg";

import ArnoldPic from "../../assets/ArnoldProfilePic.jpg";
import ArnoldBgPic from "../../assets/arnold01.jpg";
import { ScaleIcon } from "@heroicons/react/solid";
import Footer from "../Footer";

function Home() {
  return (
    <div className="bg-gray-50 items-center h-screen">
      <div
        className="h-4/6 bg-local bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${HomeBg}')` }}
      >
        <div className="bg-red-900 bg-opacity-60 h-full">
          <div className="w-8/12 h-full ml-auto mr-auto text-white text-left flex-wrap">
            <h3 className="text-3xl pt-28 ml-2">Welcome to the</h3>
            <h1 className="text-8xl mb-10">Mr. Olympia</h1>
            <p className="w-1/2 text-lg">
              Mr. Olympia is the title awarded to the winner of the professional
              men's bodybuilding contest at Joe Weider's Olympia Fitness &
              Performance Weekend—an international bodybuilding competition that
              is held annually by the International Federation of BodyBuilding &
              Fitness (IFBB).
            </p>
          </div>
        </div>
      </div>

      <div className="items-center text-center bg-gray-50">
        <div className="w-8/12 ml-auto mr-auto" style={{ height: "150vh" }}>
          <div className="mt-10 mb-28">
            <h3 className="text-gray-500 text-3xl font-medium">Check</h3>
            <h1 className="text-gray-500 text-4xl font-medium">
              The Mr. Olympia Categories
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4 text-white">
            <div
              className="rounded-lg bg-local bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${MensOpen}')` }}
            >
              <div
                className="flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg"
                style={{ height: "50vh" }}
              >
                <span className="h-24">&nbsp;</span>
                <h1 className="mx-auto mt-12 text-4xl font-medium">Men’s Open</h1>
                <p className="mx-auto mt-40 text-lg font-medium">
                  All the top players participate here with their weights
                  starting from 300 lbs or 137 kgs.
                </p>
              </div>
            </div>

            <div
              className="rounded-lg bg-local bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${WmBikini}')` }}
            >
              <div
                className="flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg"
                style={{ height: "50vh" }}
              >
                <span className="h-24">&nbsp;</span>
                <h1 className="mx-auto mt-12 text-4xl font-medium">Women's Bikini</h1>
                <p className="mx-auto mt-40 text-lg font-medium">
                  The IFBB WOS Ms. Olympia is both the highest ranking
                  professional female bodybuilding competition and the title of
                  the winner of the competition.
                </p>
              </div>
            </div>

            <div
              className="rounded-lg bg-local bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${ClassicPhysique}')` }}
            >
              <div
                className="flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg"
                style={{ height: "50vh" }}
              >
                 <span className="h-24">&nbsp;</span>
                <h1 className="mx-auto mt-12 text-4xl font-medium">Classic Physique</h1>
                <p className="mx-auto mt-40 text-lg font-medium">
                  This division is targeted to men who want to build their
                  muscles and size above the normal Men’s Physique limits
                  (discussed later), but not to the extent of Open Division
                  Bodybuilding.
                </p>
              </div>
            </div>

            <div
              className="rounded-lg bg-local bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${MensPhisyque}')` }}
            >
              <div
                className="flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg"
                style={{ height: "50vh" }}
              >
                <span className="h-24">&nbsp;</span>
                <h1 className="mx-auto mt-12 text-4xl font-medium">Men’s Physique</h1>
                <p className="mx-auto mt-40 text-lg font-medium">
                  The judges pay close attention to Athletic, Less Muscularity
                  and an Aesthetic physique.
                </p>
              </div>
            </div>

            <div
              className="rounded-lg bg-local bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${WmPhisyque}')` }}
            >
              <div
                className="flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg"
                style={{ height: "50vh" }}
              >
                <span className="h-24">&nbsp;</span>
                <h1 className="mx-auto mt-12 text-4xl font-medium">Women’s Physique</h1>
                <p className="mx-auto mt-40 text-lg font-medium">
                  Competitors should display a toned, athletic physique
                  showcasing femininity, muscle tone, beauty/flow of physique.
                </p>
              </div>
            </div>

            <div
              className="rounded-lg bg-local bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${MrO}')` }}
            >
              <div
                className="flex-col bg-red-600 bg-opacity-50 shadow-2xl rounded-lg"
                style={{ height: "50vh" }}
              >
                <span className="h-24">&nbsp;</span>
                <h1 className="mx-auto mt-12 text-4xl font-medium">Mr. Olympia</h1>
                <p className="mx-auto mt-40 text-lg font-medium">
                  The requirements for this class, just as the name implies, is
                  that the athlete needs to weigh up to and under 212 Lb (i.e.,
                  96.6 kg).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex bg-fixed bg-no-repeat bg-cover text-white"
        style={{ backgroundImage: `url('${ArnoldBgPic}')`, height: "600px" }}
      >
        <div className="bg-red-900 bg-opacity-60">
          <div className="w-8/12 mx-auto">
            <div className="flex-col items-center text-center">
              <ScaleIcon className="h-32 ml-auto mr-auto" />
              <p className="m-5 font-normal text-2xl">
                “Not many people understand what a pump is. It must be
                experienced to be understood. It is the greatest feeling that I
                get. I search for this pump because it means that that my
                muscles will grow when I get it. I get a pump when the blood is
                running into my muscles. They become really tight with blood.
                Like the skin is going to explode any minute. It’s like someone
                putting air in my muscles. It blows up. It feels fantastic.”
              </p>
            </div>

            <div>
              <div className="h-10/12">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={ArnoldPic}
                  alt="Arnold Schwarzenegger"
                  loading="lazy"
                />
              </div>
              <h1 className="text-center mt-5 font-normal">
                Arnold Schwarzenegger <br />
                (7 Mr Olympia wins)
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
