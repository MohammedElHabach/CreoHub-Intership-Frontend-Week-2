"use client"
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

  const [selectedGender, setSelectedGender] =  useState("all");
  const filteredData = selectedGender === "all"? data: data.filter(item => item.title.toLowerCase() === selectedGender);

  return (
    <section id="grid-dropdown">
      <div className="mt-14 xl:container mx-auto grid grid-cols-3  place-items-center text-center ">
        {filteredData.map((elt,index) => (
          <div key={index}>
            <img src={`/${elt.img}`} alt="avatar" />
            <h4 className="pt-4">{elt.title}</h4>
          </div>
        ))}
      </div>

      <div className="xl:container mx-auto text-center">
        <label for="gender">Filter By Gender</label>
        <select className="ml-4 mt-4" id="gender" onChange={(e) => setSelectedGender(e.target.value)} value={selectedGender}>
        <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </section>
  );
};

export default GridDropDown;
