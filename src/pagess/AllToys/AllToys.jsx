import React, { useEffect, useState } from "react";
import SingleToy from "../SingleToy/SingleToy";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [vew, setVew] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);


  const handleSearch = () => {
    fetch(`http://localhost:5000/allToysSearchByTitle/${searchText}`)
      .then((res) => res.json())
      .then((data) => {      
        setAllToys(data);
      });
  };


  const vewAlltoys = vew? allToys : allToys.slice(0, 20)


  const handleViewAllToys = () => {
    setVew(true);
  };



  return (
    <div>
      <div className="overflow-x-auto ">
      <h2 className="mt-5 mb-4 text-center text-2xl font-bold">All Toys Added</h2>
      <div class="flex items-center justify-center mb-8">
        
        <input type="text" onChange={(e) => setSearchText(e.target.value)}  className="search-input rounded-l-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
        <button onClick={handleSearch} className="rounded-r-lg bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" >Search</button>
      </div>

        <table className="table table-compact w-full">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            
            {vewAlltoys?.map((singleToy, index) => (
              <SingleToy key={singleToy._id} index={index} singleToy={singleToy}></SingleToy>
            ))}
            
          </tbody>
        </table>
      </div>


      <div>
      
      {!vew && (
            <button
              onClick={handleViewAllToys}
              className="btn btn-secondary text-xl w-46  bg-orange-500 text-white hover:bg-black-500 hover:text-white font-semibold  mb-5"
            >
              View All
            </button>
          )}
      </div>
      
    </div>
    
  );
};

export default AllToys;
