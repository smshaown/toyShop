import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({singleToy, index}) => {

    const {_id, toyName, name, postedBy, price, subcategory, quantity} = singleToy;
 

    
    
    return (
       
             <tr>
              <th>{index + 1}</th>
              <td>{name}</td>
              <td>{toyName}</td>
              <td>{subcategory}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td><button className="btn btn-outline btn-success"><Link to={`/toyDetails/${_id}`}>vew DETAILS</Link></button></td>
            </tr>
       
    );
};

export default SingleToy;