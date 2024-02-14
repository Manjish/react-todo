import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        Todo v1
        <div className="menu-items">
          <Link to="/">
            <div>Home</div>
          </Link>

          <Link to="/login">
            <div>Login</div>
          </Link>

          <Link to="/add">
            <div>Add Todo</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
