"use client";
import React, { useState } from "react";

const GridDropDown = () => {
  const data = [
    {
      img: "avatar-anisha.png",
      title: "Female",
    },
    {
      img: "avatar-richard.png",
      title: "Male",
    },
    {
      img: "avatar-shanai.png",
      title: "Female",
    },
  ];

  const [selectedGender, setSelectedGender] = useState("all");
  const filteredData =
    selectedGender === "all"
      ? data
      : data.filter((item) => item.title.toLowerCase() === selectedGender);

  return (
    <section id="grid-dropdown  ">
      <div className="flex flex-col xl:container    mx-auto">
        <div className=" mt-6  text-center order-1 md:order-2 ">
          <label for="gender">Filter By Gender</label>
          <select
            className="ml-4 mt-4"
            id="gender"
            onChange={(e) => setSelectedGender(e.target.value)}
            value={selectedGender}
          >
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mt-14 grid  grid-cols-1 gap-y-7 md:gap-y-0 md:grid-cols-3  place-items-center text-center  order-2 md:order-1">
          {filteredData.map((elt, index) => (
            <div key={index}>
              <img src={`/${elt.img}`} alt="avatar" />
              <h4 className="pt-4">{elt.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridDropDown;
