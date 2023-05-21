import React, { useContext, useEffect, useState } from "react";
import SingleToy from "../SingleToy/SingleToy";
import MyDataToySingle from "../MyDataToySingle/MyDataToySingle";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const Bookings = () => {
  const [myDataToy, setNyDataToy] = useState();
  const { user } = useContext(AuthContext);

 
  const [selectedOption, setSelectedOption] = useState("asc");
  console.log(selectedOption);

  useEffect(() => {
    let sortValue = "desc";
    if (selectedOption === "asc") {
      sortValue = "asc";
    }

    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/myJobs/${user?.email}?sort=${sortValue}`
        );
        const data = await res.json();
        setNyDataToy(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user, selectedOption]);

  const handleSortOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure you want to deleted");
    if (proceed) {
      fetch(`http://localhost:5000/myJobs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = myDataToy.filter((booking) => booking._id !== id);
            setNyDataToy(remaining);
          }
        });
    }
  };

  
  return (
    <div className="mt-5">
      <div className="text-end mr-5 ml-5 mb-8 mt-5">
      <select
          value={selectedOption}
          onChange={handleSortOptionChange}
          className="select select-bordered w-full max-w-xs "
        >
          <option disabled selected>
            Sort By High Price and Low Price!
          </option>
          <option value="desc">High Price</option>
          <option value="asc">Low Price</option>
        </select>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-compact w-full">
          <thead className="text-center">
            <tr>
             
              <th>Photo</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Rating</th>
              <th>description</th>
              <th>updated</th>
               <th>delete</th>
       
            </tr>
          </thead>
          <tbody className="text-center">
            {myDataToy?.map((singleToy) => (
              <MyDataToySingle
                key={singleToy._id}
                singleToy={singleToy}
                handleDelete={handleDelete}
                          
              ></MyDataToySingle>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
