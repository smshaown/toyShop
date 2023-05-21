import React, { useEffect, useState } from "react";
import CateggoryToys from "../../CeategoryToys/CateggoryToys";

const MainCatagory = () => {
  const [allToys, setAllToy] = useState([]);
  const [activeTab, setActiveTab] = useState("sportsCar");

  useEffect(() => {
    fetch(`http://localhost:5000/allToy/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setAllToy(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h2 className="text-center mb-5 text-3xl font-bold">Shop By Category</h2>

      <div>
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          <div
            onClick={() => handleTabClick("sportsCar")}
            className={`p-4 ${
              activeTab == "sportsCar"
                ? "btn btn-outline btn-error"
                : " btn btn-outline btn-error "
            }`}
          >
            SportsCar
          </div>
          <div
            onClick={() => handleTabClick("truck")}
            className={`p-4 ${
              activeTab == "truck"
                ? " btn btn-outline btn-error"
                : " btn btn-outline btn-error"
            }`}
          >
            Truck
          </div>
          <div
            onClick={() => handleTabClick("regularCar")}
            className={`p-4 ${
              activeTab == "regularCar"
                ? " btn btn-outline btn-error"
                : " btn btn-outline btn-error"
            }`}
          >
            RegularCar
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mx-auto">
        {allToys?.map((toys) => (
          <CateggoryToys key={toys?._id} toys={toys}></CateggoryToys>
        ))}
      </div>
    </div>
  );
};

export default MainCatagory;
