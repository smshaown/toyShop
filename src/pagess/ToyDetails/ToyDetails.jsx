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
    quantity,
    description,
    pictureUrl
  } = loader;

  return (
    <div> 


      <div className="card card-side bg-base-100 shadow-xl w-[500px] mx-auto mt-8">
     <figure><img src={pictureUrl} className="h-72" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name: {toyName}</h2>
    <h3 className="text-xl font-semibold">Seller name: {name}</h3>
    <h3 className="text-xl font-semibold">Seller email: {postedBy}</h3>
    <h3 className="text-xl font-semibold">Price: ${price}</h3>
    <h3 className="text-xl font-semibold">Quantity: {quantity}</h3>
    <h3 className="text-xl font-semibold">Rating: {rating}</h3>
    <p>Description: {description}</p>
    
    
  </div> 
</div>
    </div>
  );
};

export default ToyDetails;
