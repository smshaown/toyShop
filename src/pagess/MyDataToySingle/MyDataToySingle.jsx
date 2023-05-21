import React from "react";
import { Link } from "react-router-dom";


const MyDataToySingle = ({ singleToy, handleDelete, handleJobUpdate }) => {
  const {
    _id,
    toyName,
    name,
    pictureUrl,
    description,
    price,
    subcategory,
    quantity,
    rating,
  } = singleToy;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-square"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-20 rounded-xl">
              <img src={pictureUrl} />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{toyName}</td>
      <td>{subcategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>{description}</td>
      <td><Link to={`/updateToy/${_id}`} className="btn btn-secondary" >updated</Link></td>


      



       
    </tr>
  );
};

export default MyDataToySingle;
// <td>
//         {/* <button variant="primary" onClick={() => setModalShow(true)}>
//           Edit
//         </button> */}
//         <Updated
//           singleToy={singleToy}
//           onHide={() => setModalShow(false)}
//           handleJobUpdate={handleJobUpdate}
//         />
//       </td>