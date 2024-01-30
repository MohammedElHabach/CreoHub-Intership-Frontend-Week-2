"use client";
import React, { useState } from "react";

const Hobbies = () => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCheckboxChange = (e) => {
    const hobby = e.target.id;

    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((item) => item !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const handleReset = () => {
      setSelectedHobbies([])
      document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
      });
    setIsButtonClicked(false);
  };

  const handleChooseButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div className="container mx-auto">
      <h3 className="font-bold">Choose Your Hobbies : </h3>
      <div className="flex flex-col ">
        <div className=" space-x-3">
          <label htmlFor="Swimming">Swimming</label>
          <input
            type="checkbox"
            id="Swimming"
            onChange={handleCheckboxChange}
          />
        </div>

        <div className=" space-x-3">
          <label htmlFor="Weight lifting">Weight Lifting</label>
          <input
            type="checkbox"
            id="Weight lifting"
            onChange={handleCheckboxChange}
          />
        </div>

        <div className=" space-x-3">
          <label htmlFor="Football">Football</label>
          <input
            type="checkbox"
            id="Football"
            onChange={handleCheckboxChange}
          />
        </div>

        <div className=" space-x-3">
          <label htmlFor="BasketBall">BasketBall</label>
          <input
            type="checkbox"
            id="BasketBall"
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      <button
        className="mx-auto mt-2  px-7 p-2 text-white transition duration-300 ease-in-out bg-brightRed rounded-full  hover:bg-brightRedLight"
        onClick={handleChooseButtonClick}
      >
        Choose
      </button>

      <button
        className="mx-auto mt-2 ml-3  px-7 p-2 text-white transition duration-300 ease-in-out bg-brightRed rounded-full  hover:bg-brightRedLight"
        onClick={handleReset}
      >
        Reset
      </button>

      {isButtonClicked && (
        <div>
          <h4 className="mt-5">Results: </h4>
          <p>{selectedHobbies.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
