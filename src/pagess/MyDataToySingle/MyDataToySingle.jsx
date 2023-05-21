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
      <td> <button
          onClick={() => handleDelete(_id)}
          className="btn btn-secondary"
        >
          delete
             </button></td>


      



       
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