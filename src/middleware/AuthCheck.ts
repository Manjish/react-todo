import { useHistory } from "react-router-dom";

const AuthCheck = () => {
  const history = useHistory();
  if (
    localStorage.getItem("loggedIn") &&
    localStorage.getItem("loggedIn") === "false"
  ) {
    history.replace("/login");
  }
};

export default AuthCheck;
