import { useNavigate } from "react-router-dom";

const AuthCheck = () => {
  const navigate = useNavigate();
  if (
    localStorage.getItem("loggedIn") &&
    localStorage.getItem("loggedIn") === "false"
  ) {
    navigate("/login", { replace: true });
  }
};

export default AuthCheck;
