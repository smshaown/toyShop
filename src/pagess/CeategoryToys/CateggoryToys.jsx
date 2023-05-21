import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';





const CategoryToys = ({ toys }) => {
  const {user} = useContext(AuthContext)

  const { _id, pictureUrl, rating, toyName, price } = toys || {};

  const handleUser = () => {
    if(!user?.email){
      toast.error("You have to log in first", {
        position: toast.POSITION.TOP_RIGHT,
      })    
    }
  }


  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 200,
    })
  },[])



  return (
    <div data-aos="zoom-in-up" className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 mx-auto text">
      <img
        src={pictureUrl}
        alt=""
        className="object-cover object-center w-full rounded-md h-52 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h3 className="text-2xl font-semibold tracking-wide ">
          Name: {toyName}
        </h3>

        <h3 className="text-lg font-semibold tracking-wide">
          Price: <span className="normal-case">${price}</span>
        </h3>

        
      </div>
      <p className="flex  items-center text-xl gap-x-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 tex-xl rounded dark:bg-blue-200 dark:text-blue-800 ">
          Rating: {rating}
        </span>
        <Rating
          placeholderRating={rating}
          readonly
          emptySymbol={<FaRegStar />}
          placeholderSymbol={<FaStar className="text-yellow-500" />}
          fullSymbol={<FaStar />}
        />
      </p>

      <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-3">
        <Link onClick={handleUser} to={`/singleToyDetails/${_id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default CategoryToys;
