import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const loader = useLoaderData();

  const {
    _id,
    toyName,
    name,
    postedBy,
    price,
    rating,
    subcategory,
    quantity,
    description,
    pictureUrl
  } = loader;

  return (
    <div>
      <div className="hero min-h-screen bg-white mb-8">
        <div className="hero-content flex-col lg:flex-row gap-12 ">
          <img
            src={pictureUrl}
            className="max-w-sm rounded-lg shadow-2xl mt-[-70px]"
          />
          <div className="w-1/2 mt-20">
            
            <h1 className="text-3xl font-semibold">Toy Name: {toyName}</h1>
            <h1 className="text-1xl font-normal">Name: {name}</h1>
            <h1 className="text-1xl font-normal">Email: {postedBy}</h1>
            <h2 className="text-1xl font-normal">Sub-category: {subcategory}</h2>
            <h2 className="text-1xl font-normal">Price: {quantity}</h2>
            <h2 className="text-1xl font-normal">Rating: {rating}</h2>
            <h2 className="text-1xl font-normal">Quantity: ${quantity}</h2>
            <p className="py-6">
             {description}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
