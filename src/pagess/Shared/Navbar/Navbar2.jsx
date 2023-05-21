import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar2 = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
    console.log("ok");
  };

  return (
    <div bg="light" expand="lg" className="navbar-color shadow-md">
    <div>
      <div.Brand href="#">
        <img
          className="img-fluid"
          style={{ width: "50px", hight: "50px" }}
          src={logo}
          alt=""
        />
       <Link to="/"><span className="logoText">SM FOODCONER</span></Link>
      </div.Brand>
      <div.Toggle aria-controls="navbarScroll" />
      <div.Collapse id="navbarScroll">
      <div className="mx-auto">
        <NavLink  to="/"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "activeNav"
                      : isPending
                      ? "pending"
                      : ""
                  } activeClassName="activeNav">
          Home
        </NavLink>

        <NavLink to="/blog" className={({ isActive, isPending }) =>
                    isActive
                      ? "activeNav"
                      : isPending
                      ? "pending"
                      : ""
                  } activeClassName="activeNav" >
          Blog
        </NavLink>
      </div>
        <div>
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
      </div.Collapse>
    </div>
  </div>
  );
};

export default Navbar2;
