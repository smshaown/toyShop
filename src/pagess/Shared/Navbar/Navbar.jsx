import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {



  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
    console.log("ok");
  };




  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>Login</Link></li>
            <li><Link>Register</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">ToyShop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Blog</Link></li> 
            <li><Link to='/allToys'>All Toys</Link></li> 
            {user?.email ? <>
          <li><Link to="/addToToy">AddToToy</Link></li>
          {/* <li><button onClick={handleLogOut}>LogOut</button></li> */}
          </>
           : 
          <li></li>
         }

            {user?.email ? <>
          <li><Link to="/myToys">My Toy</Link></li>
          {/* <li><button onClick={handleLogOut}>LogOut</button></li> */}
          </>
           : 
          <li></li>
         }



          </ul>
        </div>
        <div className="navbar-end">
        <div className="flex gap-2">
        {user ? (
              <img
                title={user?.displayName}
                src={user?.photoURL}
                style={{
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                className="rounded-circle"
                alt={user?.displayName}
              />
            ) : (
              <button className="ml-3 btn btn-danger">
                <Link to="/login">Log In</Link>
              </button>
            )}

            {user && (
              <span className="text-black">
                <button
                  onClick={handleLogOut}
                  className="btn btn-danger"
                  style={{ marginTop: "6px" }}
                >
                  Log Out
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
