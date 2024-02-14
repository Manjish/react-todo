import { Link, Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("loggedIn", JSON.stringify(true));
    window.location.reload();
  };
  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));
    window.location.reload();
  };

  return (
    <>
      <NavBar />
      <div className="todo-container">
        <button
          onClick={handleLogin}
          hidden={
            localStorage.getItem("loggedIn") &&
            localStorage.getItem("loggedIn") === "true"
              ? true
              : false
          }
        >
          Login
        </button>

        <button
          onClick={handleLogout}
          hidden={
            localStorage.getItem("loggedIn") &&
            localStorage.getItem("loggedIn") === "false"
              ? true
              : false
          }
          style={{ background: "red" }}
        >
          Logout
        </button>

        <br />
        <Link to="/login/showStatus">Show login status</Link>
        <br />
        <br />
        <Outlet />
      </div>
    </>
  );
};

export default Login;
