import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleSubDetails = () => {
  const loader = useLoaderData();
  const {_id,  name, postedBy, subcategory, quantity, pictureUrl, rating, toyName, price} = loader;
  return (
    <div className="hero min-h-screen bg-base-200 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={pictureUrl}
          className="max-w-sm rounded-lg w-full h-[350px]"
        />
        <div className="w-1/2 ml-5">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SingleSubDetails;
