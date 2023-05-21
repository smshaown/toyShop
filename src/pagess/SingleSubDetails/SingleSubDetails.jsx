import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleSubDetails = () => {
  const loader = useLoaderData();
  const {
    _id,
    name,
    postedBy,
    description,
    subcategory,
    quantity,
    pictureUrl,
    rating,
    toyName,
    price,
  } = loader;
  return (
    <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100 mx-auto mt-12">
      <img
        src={pictureUrl}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="p-3 mx-auto">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Toy Name: {toyName}</h2>
          <h2 className="text-xl font-bold">Category: {subcategory}</h2>
          <h2 className="text-xl font-bold">Rating: {rating}</h2>
          <h2 className="text-xl font-bold">Quantity: {quantity}</h2>
          <h2 className="text-xl font-bold">Price: ${price}</h2>

          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSubDetails;
