import React from "react";
import Button from "../components/Button";
import {shoe8} from "../assets/images"
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="inline-block mt-3">we provide you </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            super quality
          </span>{" "}
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          ensuring premium comfort and style our meticulously crafted footwear
          is designed to elevatee your experience providing you qith unmatched
          quality innovation and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to dwtail and excellence ensures your satisfaction
        </p>
        <div className="mt-ll">
          <Button label="shop now" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
