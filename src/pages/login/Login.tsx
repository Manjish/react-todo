import { Link, Route, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Login = () => {
  const history = useHistory();
  const handleLogin = () => {
    localStorage.setItem("loggedIn", true);
    history.push("/");
  };
  const handleLogout = () => {
    localStorage.setItem("loggedIn", false);
    history.replace("/");
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

        <Route path="/login/showStatus">
          <>
            {localStorage.getItem("loggedIn") &&
            localStorage.getItem("loggedIn") === "true" ? (
              <div>The use is currently logged in</div>
            ) : (
              <div>The user is not logged in.</div>
            )}
          </>
        </Route>
      </div>
    </>
  );
};

export default Login;
